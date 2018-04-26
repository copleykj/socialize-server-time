import { ServerTime } from '../common/server-time';

export default ({ Meteor }) => {
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

    if (!Meteor.isReactNative) {
        
    } else {
        setTimeout(() => ServerTime.init(), 2000);
    }

    return ServerTime;
};
