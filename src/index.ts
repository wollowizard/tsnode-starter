import 'dotenv/config';

import {
  initApm, logger, requestLogger, healthController,
} from '@sunriseupc/nodejs-common';
import express from 'express';
import testController from './controller/test-controller';
import { defaultErrorHandler } from './controller/controller-utils';
import metricsMiddleware from '@sunriseupc/nodejs-common/dist/prometheus';

const expressApp = express();
expressApp.use(requestLogger);
expressApp.get('/health', healthController);

initApm();
expressApp.use(metricsMiddleware);

expressApp.get('/rest/test', testController.router);
expressApp.use(defaultErrorHandler);

const port = process.env.PORT || 8080;
expressApp.listen(port, () => {
  logger.info(`SERVICE RUNNING ON PORT ${port}`);
});
