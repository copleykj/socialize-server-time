export const ServerTime = {
    _timeDifference: 0,
};

ServerTime.now = function now() { return Date.now() + this._timeDifference; };

ServerTime.date = function date() { return new Date(this.now()); };
