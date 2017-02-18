import { CognitoUserPool } from 'amazon-cognito-identity-js';
import 'amazon-cognito-js'


const REGION = "us-west-2"
const USER_POOL_ID = 'us-west-2_2tjIRXj7U'
const CLIENT_ID = '5vtb145odh35gs0p0af0iek458'

AWS.config.update({
	region: REGION
})
const userData = {
    UserPoolId : USER_POOL_ID,
    ClientId : CLIENT_ID
}

export const userPool = new CognitoUserPool(userData);
export const USERPOOL_ID = 'cognito-idp.'+REGION+'.amazonaws.com/'+USER_POOL_ID;
export const IDENTITY_POOL_ID = 'us-west-2:3cd5f713-cecb-46f3-ae2c-e1cc0e9fa0db';
