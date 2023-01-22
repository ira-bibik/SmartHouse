"use strict";
function TV(name) {
    Device.call(this, name);
    this.__volume = 50;
    this.__currentChannel = 1;
}

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;

TV.prototype.getCurrentChannel = function () {
    if (this.__checkIfOn())
        return this.__currentChannel;
};

TV.prototype.setCurrentChannel = function (number) {
    if (typeof number == "number" && number >= 0 && this.__checkIfOn()) {
        this.__currentChannel = number;
    }
};

TV.prototype.setVolume = function (number) {
    if (typeof number == "number" && number >= 0 && number <= 100 && number % 10 == 0 && this.__checkIfOn()) {
        this.__volume = number;
    }
};

TV.prototype.getVolume = function () {
    if (this.__checkIfOn())
        return this.__volume;
}

TV.prototype.nextChannel = function () {
    if (this.__checkIfOn())
        ++this.__currentChannel;
};

TV.prototype.previousChannel = function () {
    if (this.__currentChannel - 1 >= 0 && this.__checkIfOn())
        --this.__currentChannel;
};

TV.prototype.volumeUp = function () {
    if (this.__volume != 100 && this.__checkIfOn())
        this.__volume += 10;
};

TV.prototype.volumeDown = function () {
    if (this.__volume != 0 && this.__checkIfOn())
        this.__volume -= 10;
};

