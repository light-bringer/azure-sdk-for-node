// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2aa30309-3723-4112-bd0b-79e9f65fc52d';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup678/providers/Microsoft.Storage/storageAccounts/testacc2931?api-version=2016-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/operations/376ea910-ec42-41cc-a6e5-51054cc71ba7?monitor=true&api-version=2016-05-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'a16e90e8-7722-4c0f-9f7c-cf73a7fcbfbb',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'a16e90e8-7722-4c0f-9f7c-cf73a7fcbfbb',
  'x-ms-routing-request-id': 'JAPANEAST:20161219T084037Z:a16e90e8-7722-4c0f-9f7c-cf73a7fcbfbb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Dec 2016 08:40:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodeTestGroup678/providers/Microsoft.Storage/storageAccounts/testacc2931?api-version=2016-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/operations/376ea910-ec42-41cc-a6e5-51054cc71ba7?monitor=true&api-version=2016-05-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'a16e90e8-7722-4c0f-9f7c-cf73a7fcbfbb',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'a16e90e8-7722-4c0f-9f7c-cf73a7fcbfbb',
  'x-ms-routing-request-id': 'JAPANEAST:20161219T084037Z:a16e90e8-7722-4c0f-9f7c-cf73a7fcbfbb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Dec 2016 08:40:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/operations/376ea910-ec42-41cc-a6e5-51054cc71ba7?monitor=true&api-version=2016-05-01')
  .reply(200, "{\"id\":\"/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodetestgroup678/providers/Microsoft.Storage/storageAccounts/testacc2931\",\"kind\":\"BlobStorage\",\"location\":\"eastasia\",\"name\":\"testacc2931\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2016-12-19T08:40:37.2420100Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc2931.blob.core.windows.net/\",\"table\":\"https://testacc2931.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '613',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9ef3b019-55ae-4a01-a63c-c319b68bb944',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '9ef3b019-55ae-4a01-a63c-c319b68bb944',
  'x-ms-routing-request-id': 'JAPANEAST:20161219T084108Z:9ef3b019-55ae-4a01-a63c-c319b68bb944',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Dec 2016 08:41:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/providers/Microsoft.Storage/operations/376ea910-ec42-41cc-a6e5-51054cc71ba7?monitor=true&api-version=2016-05-01')
  .reply(200, "{\"id\":\"/subscriptions/2aa30309-3723-4112-bd0b-79e9f65fc52d/resourceGroups/nodetestgroup678/providers/Microsoft.Storage/storageAccounts/testacc2931\",\"kind\":\"BlobStorage\",\"location\":\"eastasia\",\"name\":\"testacc2931\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2016-12-19T08:40:37.2420100Z\",\"primaryEndpoints\":{\"blob\":\"https://testacc2931.blob.core.windows.net/\",\"table\":\"https://testacc2931.table.core.windows.net/\"},\"primaryLocation\":\"eastasia\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '613',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '9ef3b019-55ae-4a01-a63c-c319b68bb944',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '9ef3b019-55ae-4a01-a63c-c319b68bb944',
  'x-ms-routing-request-id': 'JAPANEAST:20161219T084108Z:9ef3b019-55ae-4a01-a63c-c319b68bb944',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Dec 2016 08:41:08 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['testacc2931'];};