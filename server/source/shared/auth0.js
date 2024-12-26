const auth0 = require('auth0');
const { auth } = require('express-oauth2-jwt-bearer');

const authenticationClient = new auth0.AuthenticationClient({
    domain: '{YOUR_ACCOUNT}.auth0.com',
    clientId: '{OPTIONAL_CLIENT_ID}',
    clientSecret: '{OPTIONAL_CLIENT_SECRET}',
});


var managementClient = new auth0.ManagementClient({
    domain: '{YOUR_TENANT_AND REGION}.auth0.com',
    clientId: '{YOUR_CLIENT_ID}',
    clientSecret: '{YOUR_CLIENT_SECRET}',
  });


const checkJwt = auth({
    audience : '',
    issuerBaseURL : ``,
});