const NodeMediaServer = require('node-media-server');
const process = require('process');

const config = {
  logType: 2,
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: '*',
  },
  auth: {
    api: false,
    api_user: 'admin',
    api_pass: 'admin',
    play: false,
    publish: false,
  },
};

var nms = new NodeMediaServer(config);
nms.run();
