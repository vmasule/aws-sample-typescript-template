# Sample test lambda request:

<code lang='json'>
{
    "body" : "{\"applicationNumber\": \"12334343\"}" 
}
 </code>
 
 # Running Lambda Locally
 
 ## Configuration
- Install `serverless` globally by running `npm install -g serverless` 
- <code lang='json'> npm i serverless-webpack --save-dev </code>

- Create `serverless.yml` file in root lambda folder
- Create `webpack.config.js` in serverless folder # this file can be converted to `.ts`
- Create `event.json` file in serverless folder for sample input to lambda.
- Run `serverless invoke local --function search --path serverless/event.json` to run lambda locally.
