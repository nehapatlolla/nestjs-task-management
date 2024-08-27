import { Injectable } from '@nestjs/common';

import { DynamoDBClient, GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { dynamoDBClient } from './task/dynamo.config';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  private client: DynamoDBClient;

  constructor() {
    this.client = dynamoDBClient;
  }

  async getItem(id: string) {
    const params = {
      TableName: 'my-table',
      Key: {
        Id: { S: id }
      }
    };

    try {
      const command = new GetItemCommand(params);
      const result = await this.client.send(command);
      return result.Item;
    } catch (error) {
      console.error('Error getting item:', error);
      throw new Error('Error getting item');
    }
  }

  async putItem(id: string, name: string) {
    const params = {
      TableName: 'my-table',
      Item: {
        Id: { S: id },
        Name: { S: name }
      }
    };

    try {
      const command = new PutItemCommand(params);
      await this.client.send(command);
      return { message: 'Item added' };
    } catch (error) {
      console.error('Error putting item:', error);
      throw new Error('Error putting item');
    }
  }
}
