# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Running local

1. `docker network create sam-cli`
2. `docker-compose up -d`
3. `cdk synth --no-staging > template.yaml`
4. `sam local invoke sampleLambdaBA9DE42C --no-event --docker-network sam-cli`

## Debug

`sam local invoke sampleLambdaBA9DE42C --no-event --docker-network sam-cli --debug-port 5858`

## Reference

- [AWS CDKで定義したリソースをローカル環境で実行してみた](https://dev.classmethod.jp/cloud/aws/cdk-local-develop/)