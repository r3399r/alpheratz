#!/bin/bash
set -e

env=test
project=alpheratz
# subDomain=wedding
# domain=celestialstudio.net

echo ====================================================================================
echo env: $env
echo project: $project
# echo domain: $subDomain.$domain
echo ====================================================================================

echo deploy backend AWS...
cd backend
npm run clean
npm install --production
mkdir -p dist/nodejs
cp -R node_modules dist/nodejs
npm install
npm run compile # lambda
# aws cloudformation package --template-file aws/cloudformation/template.yaml --output-template-file packaged.yaml --s3-bucket y-cf-midway-singapore
# aws cloudformation deploy --template-file packaged.yaml --stack-name $project-$env-stack --parameter-overrides TargetEnvr=$env Project=$project --no-fail-on-empty-changeset --s3-bucket y-cf-midway-singapore --capabilities CAPABILITY_NAMED_IAM
echo ====================================================================================

echo prepare frontend files...
mkdir -p ../frontend/src/model/backend
cp -R lib/src/model ../frontend/src/model/backend
echo ====================================================================================

echo deploy frontend to S3...
# cd ../frontend
# export liff=$(aws ssm get-parameter --name $project-$env-liff | jq .Parameter.Value | sed -e 's/^"//' -e 's/"$//')
# npm i
# npm run build
# mkdir -p ./dist/img08150958
# cp -R ../backend/public/img08150958 ./dist
# aws s3 sync ./public s3://$project-$env --delete --cache-control no-cache
echo ====================================================================================
