/*
 * Create and export configureation variables
 *
 */

// Container for all the environments
let environments = {};

// Staging (default) environment
environments.staging = {
  'httpPort': 3000,
  'httpsPort': 3001,
  'envName': 'staging',
  'hashingSecret': 'thisIsASecret',
  'maxChecks': 5,
  'twilio': {
    'accountSid': 'ACb32d411ad7fe886aac54c665d25e5c5d',
    'authToken': '9455e3eb3109edc12e3d8c92768f7a67',
    'fromPhone': '+15005550006'
  }
};

// Production environment
environments.production = {
  'httpPort': 5000,
  'httpsPort': 5001,
  'envName': 'production',
  'hashingSecret': 'thisIsAlsoASecret',
  'maxChecks': 5,
  'twilio': {
    'accountSid': 'AC284c1508ea7a2d5c4b46114b852dcc58',
    'authToken': 'f27505f2349ada91b68d68fa08b73b81',
    'fromPhone': '8302436557'
  }
};

// Determine which environment was passed as a command-line argument
let currentEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not , default to staging
let environmentToExport = typeof (environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;

