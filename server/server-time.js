/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';

/* eslint-enable import/no-unresolved */

import { ServerTime } from '../common/server-time';

Meteor.methods({
    'socialize:getServerTime': function getServerTime() {
        return Date.now();
    },
});

export { ServerTime };
