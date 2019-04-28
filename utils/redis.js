const redis = require('redis');

const client = redis.createClient();

client.on('error', console.error);

module.exports = client;
