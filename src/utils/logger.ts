import pino from "pino";
import pretty from "pino-pretty";
const stream = pretty({
  colorize: true,
  translateTime: true, // --translateTime
  ignore: "pid,hostname", // --ignore
});

const logger = pino(stream);

export default logger;
