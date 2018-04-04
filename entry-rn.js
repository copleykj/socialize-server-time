/* eslint-disable import/no-unresolved */
import Meteor from '@socialize/react-native-meteor';
/* eslint-enable import/no-unresolved */

import construct from './client/server-time.js';

export const ServerTime = construct({ Meteor });
