const NodeMediaServer = require('node-media-server');
const process = require('process');

// https://github.com/illuspas/Node-Media-Server

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
    api: true,
    api_user: 'cloudhub',
    api_pass: process.env.API_PASS || 'cloudhub',
    play: false,
    publish: true,
    secret: process.env.API_KEY || 'nodemedia2017privatekey',
  },
  // trans: {
  //   ffmpeg: '/usr/local/bin/ffmpeg',
  //   tasks: [
  //     {
  //       app: 'live',
  //       mp4: true,
  //       mp4Flags: '[movflags=frag_keyframe+empty_moov]',
  //     }
  //   ]
  // }
};

var nms = new NodeMediaServer(config);
nms.run();
