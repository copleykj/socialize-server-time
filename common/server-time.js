ServerTime = {
    _timeDifference: 0
};

ServerTime.now = function () {
    return Date.now() + this._timeDifference;
};

ServerTime.date = function() {    
    return new Date(this.now());
};