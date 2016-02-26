import AWSSignature  from 'react-native-aws-signature'

const awsSignature = new AWSSignature(),
    credentials = {
        SecretKey: 'Q9m27o7Npv7JTQhktkmvuKARDz2Sp86eIBJR2Lno',
        AccessKeyId: 'AKIAISDV34V3K7Z5MU2A'
    },
    options = {
        path: '/?Param2=value2&Param1=value1',
        method: 'get',
        service: 'service',
        headers: {
            'X-Amz-Date': '20150209T123600Z',
            'host': 'example.amazonaws.com'
        },
        region: 'us-east-1',
        body: '',
        credentials
    };

awsSignature.setParams(options);

const authHeader = awsSignature.getAuthorizationHeader();

// us-east-1:745de6f9-3002-40d7-be34-02053c2e0196
