Meteor.methods({
    'getServerTime': function() {
        return Date.now();
    }
});

// Unify client / server api
ServerTime.now = function() {
    return Date.now();
};