import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import { ApiGatewayToLambda } from '@aws-solutions-constructs/aws-apigateway-lambda';

export class SampleProjectStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
 

    new ApiGatewayToLambda(this, 'ApiGatewayToLambdaPattern', {
        lambdaFunctionProps: {
            runtime: lambda.Runtime.NODEJS_10_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(`${__dirname}/lambda`)
        }
    });
  }
}
