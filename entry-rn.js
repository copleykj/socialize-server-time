/* eslint-disable import/no-unresolved */
import Meteor from '@socialize/react-native-meteor';
/* eslint-enable import/no-unresolved */

import construct from './client/server-time.js';

const ServerTime = construct({ Meteor });

// wait for ddp to be ready before we try to calulate time difference
Meteor.waitDdpConnected(() => {
    ServerTime.init();
});

export { ServerTime };
