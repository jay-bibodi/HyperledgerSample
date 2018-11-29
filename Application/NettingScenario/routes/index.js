var express = require('express');
var router = express.Router();
var btoa = require('btoa');
var rp = require('request-promise');
var chaincodeId = process.env.CHAINCODE_ID;
var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var envSetting = require('../helper/serviceKey');
var serviceKey = envSetting.serviceKey;
var tokenDetailsPath = path.join(__dirname, '..', 'helper', 'tokenDetails.json');

rimraf(tokenDetailsPath, (err) => {
  if(err) throw err;
  console.log("successfully deleted tokendetails.json")
});

var getAmountForSpecificCompanyOptions = {
  method: 'GET',
  url: serviceKey.serviceUrl + '/chaincodes/' + chaincodeId + '/',
  headers: {
    'Authorization': ''
  }
}

setInterval(()=>{
  getAccessToken();
},41400000)

function getAccessToken() {
  console.log("Inside getaccesstokens")
  console.log(new Date())
  var options = {
    method: 'GET',
    url: serviceKey.oAuth.url + '/oauth/token',
    qs: { grant_type: 'client_credentials' },
    headers:
      { 'Authorization': 'Basic ' + btoa(serviceKey.oAuth.clientId + ":" + serviceKey.oAuth.clientSecret) }
  }

  return new Promise((resolve, reject) => {
    rp(options).then((response) => {
      var body = JSON.parse(response);

      fs.writeFile(tokenDetailsPath, JSON.stringify(body), (err) => {
        if (err) reject(err);
        resolve(body.access_token);
      })

    }).catch((err) => {
      console.log(err)
      reject(err);
    });
  });
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getAmount', function (req, res, next) {
  var companyName = req.query.companyName
  fs.readFile(tokenDetailsPath, (err, data) => {
    err ? handleTokenOrTokenFileReadErrorForGetAmount(companyName,res) : getAmount(companyName, JSON.parse(data).access_token).then((response) => { 
      res.send(response); 
    }).catch((err) => { 
      res.status(400).send(err.error);
    })
  })
})

function handleTokenOrTokenFileReadErrorForGetAmount(companyName,res){
  getAccessToken().then((access_token) => {
    getAmount(companyName, access_token).then((response) => {
      res.send(response);
    }).catch((err) => {
      res.status(400).send(err.error);
    })
  })
}

function getAmount(companyName, access_token) {
  return new Promise((resolve, reject) => {
    var options = JSON.parse(JSON.stringify(getAmountForSpecificCompanyOptions));
    options.url = (options.url).concat(companyName);
    options.headers['Authorization'] = 'Bearer ' + access_token;

    rp(options).then((response) => {
      resolve(response);
    }).catch((err) => {
      console.log("Inside error");
      reject(err);
    })
  })
}

router.post('/transferAmount', function (req, res, next) {
  (req.body.amount < 1 || req.body.amount > 1000) ? 
    (res.status(400).send(JSON.stringify({message:"Amount to be transferred is Required, range is >0 & <=1000"}))) : (fs.readFile(tokenDetailsPath, (err, data) => {
      err ? handleTokenOrTokenFileReadErrorForTransferToken(req,res) : transferAmount(req,res,JSON.parse(data).access_token);
  }))
})

function handleTokenOrTokenFileReadErrorForTransferToken(req,res){
  getAccessToken().then((access_token)=>{
    transferAmount(req,res,access_token);
  })
}

function transferAmount(req,res,access_token){
  
  var fromCompanyName = req.body.fromCompanyName;
  var toCompanyName = req.body.toCompanyName;
  var amount = req.body.amount;

    getAmount(fromCompanyName,access_token).then((response)=>{
      if (response > -1000) {
        var options = {
          method: 'POST',
          url: serviceKey.serviceUrl + '/chaincodes/' + chaincodeId + '/' + fromCompanyName,
          formData: {
            'toCompanyName': toCompanyName,
            'amountToBeTransferred': amount
          },
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
        }
    
        rp(options).then((response) => {
          res.send(JSON.stringify({message:"Amount transferred successfully!"}));
        }).catch((err) => {
          res.status(400).send(err.error);
        })
      }
      else {
        res.status(400).send(JSON.stringify({message:"Amount cannot be transferred! Settle up the balance first and try again",isSettleUp:true}))
      }
    }) 
}

router.post('/settleUpBalance',function(req,res,next){
  console.log("settle up balance");
  res.send(req.body);
})

module.exports = router;