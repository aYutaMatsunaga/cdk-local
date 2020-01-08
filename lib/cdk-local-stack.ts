import cdk = require("@aws-cdk/core");
import lambda = require("@aws-cdk/aws-lambda");
import apigateway = require("@aws-cdk/aws-apigateway");
import dynamodb = require("@aws-cdk/aws-dynamodb");
 
export class CdkLocalStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        const env = process.env.ENV || "local";
 
        // DynamoDBテーブル
        const sampleTable = new dynamodb.Table(this, "sampleTable", {
            tableName: "samples",
            billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
            partitionKey: { name: "id", type: dynamodb.AttributeType.STRING }
        });
 
        // Lambda関数
        const sampleLambda = new lambda.Function(this, "sampleLambda", {
            runtime: lambda.Runtime.NODEJS_8_10,
            handler: "index.handler",
            code: lambda.Code.asset("src/lambda/sample"),
            timeout: cdk.Duration.seconds(60),
            environment: {
                ENV: env
            }
        });
        sampleTable.grantReadWriteData(sampleLambda);
 
        // API Gateway
        const sampleApi = new apigateway.RestApi(this, "sampleApi", {
            restApiName: "sampleApi"
        });
 
        const samplesResource = sampleApi.root.addResource("samples");
        const getSamplesIntegration = new apigateway.LambdaIntegration(sampleLambda);
        samplesResource.addMethod("GET", getSamplesIntegration);
    }
}
