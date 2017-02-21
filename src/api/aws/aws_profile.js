import { CognitoUserPool } from 'amazon-cognito-identity-js';
import 'amazon-cognito-js'


const REGION = "us-west-2"
const USER_POOL_ID = 'us-west-2_R6zEM1dEi'
const CLIENT_ID = '4g27gtt4e3rjp49vds18of6vpt'

AWS.config.update({
	region: REGION
})
const userData = {
    UserPoolId : USER_POOL_ID,
    ClientId : CLIENT_ID
}

export const userPool = new CognitoUserPool(userData);
export const USERPOOL_ID = 'cognito-idp.'+REGION+'.amazonaws.com/'+USER_POOL_ID;
export const IDENTITY_POOL_ID = 'us-west-2:7cf799d5-ba65-4f4e-a1ff-0e1803132b04';
