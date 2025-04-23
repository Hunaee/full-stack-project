import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

let environment = process.env.NODE_ENV;
let port_server = process.env.PORT_SERVER;
let port_mongoose = process.env.PORT_MONGOOSE;
const config = {
    env: environment,
    port_server: port_server,
    port_mongoose: port_mongoose,
    debug : 'enable',
    cors :'enable',
    compression :'disable'
};

if (environment !== 'development') {
    config.env = 'production';
    config.port_server = 80;
    config.port_mongoose = 27017;
    config.debug = 'disable';
    config.cors = 'disable';
    config.compression = 'enable';
}

export {config, app};