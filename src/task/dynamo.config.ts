// src/task/dynamo.config.ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const dynamoDBClient = new DynamoDBClient({
  region: 'local',
  endpoint: 'http://localhost:8000', // Local DynamoDB endpoint
});
