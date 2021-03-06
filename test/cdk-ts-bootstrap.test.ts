import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import environmentConfig from '../bin/stack-config';
import * as Stack from '../lib/cdk-ts-bootstrap-stack';

// example test.
test('SQS Queue Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Stack.CdkTsBootstrapStack(app, 'MyTestStack', environmentConfig);
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300,
    QueueName: 'testName',
  });
});
