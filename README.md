# AWS CDK TypeScript Bootstrap

This repository is a template for bootstrapping new AWS CDK TypeScript projects.
By running the GitHub Actions workflow a new repository will be created containing configuration for Jest, ESLint and Webpack.
Additonally it will contain a GitHub Actions CDK deployment pipeline using the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in this repository.

For usage run the create workflow and enter new stackname.

## Useful commands

| Command  | Description    |
|----------|----------------|
|`npm run build`|compile typescript to js|
|`npm run test`|perform the jest unit tests|
|`npm run lint`|perform static analyses on code|
|`cdk bootstrap`|bootstrap aws for cdk on first time using cdk|
|`cdk diff`|compare deployed stack with current state|
|`cdk synth`|emits the synthesized CloudFormation template|
|`cdk deploy`| deploy this stack to your default AWS account/region|
