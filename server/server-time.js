Meteor.methods({
    'socialize:getServerTime': function() {
        return Date.now();
    }
});

// Unify client / server api
ServerTime.now = function() {
    return Date.now();
};
