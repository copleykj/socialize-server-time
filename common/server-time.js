/* eslint-disable import/prefer-default-export */
export const ServerTime = {
    _timeDifference: 0,
};

ServerTime.now = () => Date.now() + this._timeDifference;

ServerTime.date = () => new Date(this.now());
