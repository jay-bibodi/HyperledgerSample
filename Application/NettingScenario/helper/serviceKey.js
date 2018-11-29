var serviceKey = {
    "type": "hyperledger-fabric",
    "channelId": process.env.CHANNEL_ID,
    "serviceUrl": process.env.SERVICE_URL,
    "documentationUrl": process.env.DOC_URL,
    "oAuth": {
      "clientId": process.env.CLIENT_ID,
      "clientSecret": process.env.CLIENT_SECRET,
      "url": process.env.ACCOUNT_URL,
      "identityZone": process.env.IDENTITY_ZONE
    }
  };
exports.serviceKey=serviceKey;