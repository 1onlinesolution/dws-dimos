const { getenv } = require('@1onlinesolution/dws-utils');

const CORS_ORIGIN = getenv('CORS_ORIGIN', false);
const corsOptions = {};
if (typeof CORS_ORIGIN !== 'undefined' && CORS_ORIGIN !== '') {
  corsOptions.origin = CORS_ORIGIN;
}

module.exports = {
  appName: getenv('APP_NAME', false) || 'Dimos Service',
  env: getenv('NODE_ENV'),
  port: parseInt(getenv('PORT_DIMOS', false) || 7002, 10),
  corsOptions: corsOptions,
  bodyParser: {
    urlencodedLimit: getenv('BODYPARSER_URLENCODED_LIMIT', false) || '1mb',
    jsonLimit: getenv('BODYPARSER_JSON_LIMIT', false) || '1mb',
  },
};
