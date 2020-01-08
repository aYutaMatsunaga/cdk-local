#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkLocalStack } from '../lib/cdk-local-stack';

const app = new cdk.App();
new CdkLocalStack(app, 'CdkLocalStack');
