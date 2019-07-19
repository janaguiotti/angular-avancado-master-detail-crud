import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import * as cryptoJs from 'crypto-js';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
  ICognitoUserAttributeData
} from 'amazon-cognito-identity-js';

import { environment } from '../../environments/environment';


const poolData = {
  UserPoolId: 'us-east-2_mmEciOF7C',
  ClientId: '70ga6ba0vg6aqhi4iuohcc89gv'
};

const userPool = new CognitoUserPool(poolData);



@Injectable()
export class AuthorizationService {

}
