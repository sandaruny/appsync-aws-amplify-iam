import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    userPoolId: 'us-east-1_dlandd23e32',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    identityPoolId: 'us-east-1:dao20e32a-234s-4fa2-hghf--0r9qjnoadvsbi',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: 'iojvba=-0q9rhqsa,
  },
  API: {
    'aws_appsync_graphqlEndpoint': 'https://0329urhqweiuabfsdjksla.appsync-api.us-west-1.amazonaws.com/graphql',
    'aws_appsync_region': 'us-east-1',
    'aws_appsync_authenticationType': 'AWS_IAM',
  },
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
