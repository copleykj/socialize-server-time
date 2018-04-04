/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
/* eslint-enable import/no-unresolved */

import construct from './server-time.js';

export const ServerTime = construct({ Meteor });
