import checker from './checker';
import logger from './loggers';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux-thunk'

export default applyMiddleware(
  thunk,
  checker,
  logger
)