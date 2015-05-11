ServerTime.init = function() {
    ServerTime._diffStart = Date.now();

    Meteor.call("getServerTime", function(error,serverTimeStamp){
        if(!error){
            var now = Date.now();
            var latency = now - ServerTime._diffStart;
            
            ServerTime._timeDifference = serverTimeStamp + latency - now;
        }else{
            throw(error); 
        }
    });
};

//At startup, wait a couple seconds so that we can get a more accurate latency estimation.
//This is far from optimal but should work.
Meteor.startup(function(){
    Meteor.setTimeout(function(){
        ServerTime.init();
    }, 2000);
});