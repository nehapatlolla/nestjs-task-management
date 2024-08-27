// src/task/dynamo.config.ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const dynamoDBClient = new DynamoDBClient({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000', // Local DynamoDB endpoint
});
