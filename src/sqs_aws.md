## Create a New NestJS Project

npm i -g @nestjs/cli
nest new my-sqs-project
cd my-sqs-project

## Install Required Dependencies

npm install @aws-sdk/client-sqs

## Set Up AWS Configuration

```ts
// src/aws.config.ts
import { SQSClient } from '@aws-sdk/client-sqs';

export const sqsClient = new SQSClient({
  region: process.env.AWS_REGION || 'us-east-1', // Replace with your region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
```

## create a resource sqs

nest g resource sqs

## create a queue

aws sqs create-queue --queue-name practice-queue

## Set env variables

yarn add install dotenv

```ts
import * as dotenv from 'dotenv';

dotenv.config();
```

add this in the main.ts right after the imports

## Add swagger

yarn add @nestjs/swagger swagger-ui-express

## Swagger configuration

```ts
const config = new DocumentBuilder()
  .setTitle('SQS API')
  .setDescription('API documentation for the SQS service')
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
```

## Key features in swagger

@ApiOperation: Provides a summary of the endpoint.

@ApiBody: Defines the request body schema.

@ApiResponse: Describes the response for the endpoint.

@ApiQuery: Specifies query parameters for GET requests.

## delete

Receipt handle will be in the response of the receive message.

## SQS CLI

brew install awscli

aws configure

To create a new SQS queue, use the following command:

aws sqs create-queue --queue-name my-queue

To list all SQS queues in your account:

aws sqs list-queues

To send a message to your SQS queue:

aws sqs send-message --queue-url <your-queue-url> --message-body "This is a test message"

Replace <your-queue-url> with the URL of your SQS queue.

To receive messages from your SQS queue:

aws sqs receive-message --queue-url <your-queue-url>

Delete Messages from the Queue:

aws sqs delete-message --queue-url <your-queue-url> --receipt-handle <receipt-handle>
