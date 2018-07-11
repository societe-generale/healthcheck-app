module.exports = {
  appPort: 1337,
  loopTime: 2000,
  logPath: process.env.HC_LOGS_PATH || 'logs',
  shouldLogToFile: false,
  items: [
    {
      name: 'Google Website',
      description: 'Ping Google website',
      checkType: 'http',
      ssl: true,
      host: 'www.google.com',
      expectedStatusCodes: [ 200 ]
    },
    {
      name: 'Weather API',
      description: 'Ping Weather API',
      checkType: 'http',
      ssl: false,
      host: 'www.metaweather.com',
      port: '80',
      path: '/api/location/search/?query=manchester',
      expectedStatusCodes: [ 200, 302 ]
    },
    {
      name: 'Google IP Ping',
      description: 'Ping Google IP Addresss',
      checkType: 'ping',
      host: '172.217.16.68',
    },
    {
      name: 'DATABAYZ',
      description: '5UP3R DB P1NG',
      checkType: 'postgresql',
      DATABASE_USER: process.env.DATABASE_USER,
      DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
      DATABASE_DB: process.env.DATABASE_DB,
      DATABASE_HOST: process.env.DATABASE_HOST,
      DATABASE_PORT: process.env.DATABASE_PORT
    },
    {
      name: 'DATABAYZ 2',
      description: '5UP3R DB P1NG',
      checkType: 'mongodb',
      DATABASE_USER: process.env.DATABASE_USER,
      DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
      DATABASE_DB: process.env.DATABASE_DB,
      DATABASE_HOST: process.env.DATABASE_HOST,
      DATABASE_PORT: process.env.DATABASE_PORT
    }
  ]
}
