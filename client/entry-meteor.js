/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
/* eslint-enable import/no-unresolved */

import construct from './server-time.js';

const ServerTime = construct({ Meteor });

// At startup, wait a couple seconds so that we can get a more accurate latency estimation.
// This is far from optimal but should work.
Meteor.startup(() => Meteor.setTimeout(() => ServerTime.init(), 2000));

export { ServerTime };
