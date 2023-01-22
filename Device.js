"use strict";
function Device(name) {
    this.__name = name;
    this.__state = false;
}

Device.prototype.getName = function () {
    return this.__name;
};

Device.prototype.getState = function () {
    return this.__state;
};

Device.prototype.on = function () {
    this.__state = true;
};

Device.prototype.off = function () {
    this.__state = false;
};

Device.prototype.__checkIfOn = function () {
    if (!this.__state) {
        console.log("Девайс вимкнений!");
        return false;
    } else {
        return true;
    }
};