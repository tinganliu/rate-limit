const util = require('util');

const { port } = require('./configs/settings');
const logger = require('./utils/logger');
const app = require('./app');

const listen = util.promisify(app.listen).bind(app);

const startup = async () => {
  await listen(port);
};

startup()
  .then(() => logger.info(`Server starts running on port ${port}`))
  .catch(console.error);
