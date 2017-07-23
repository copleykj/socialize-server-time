/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';

/* eslint-enable import/no-unresolved */

import { ServerTime } from '../common/server-time';

ServerTime.init = () => {
    ServerTime._diffStart = Date.now();

    Meteor.call('socialize:getServerTime', (error, serverTimeStamp) => {
        if (!error) {
            const now = Date.now();
            const latency = now - ServerTime._diffStart;

            ServerTime._timeDifference = (serverTimeStamp + latency) - now;
        } else {
            throw (error);
        }
    });
};

// At startup, wait a couple seconds so that we can get a more accurate latency estimation.
// This is far from optimal but should work.
Meteor.startup(() => {
    Meteor.setTimeout(() => {
        ServerTime.init();
    }, 2000);
});

export { ServerTime };
