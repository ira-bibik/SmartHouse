"use strict";
function Washer(name, modes) {
    Device.call(this, name);
    this.__modes = [];
    if (this.__modesValid(modes)) {
        this.__modes = modes;
    }
}

Washer.prototype = Object.create(Device.prototype);
Washer.prototype.constructor = Washer;

Washer.prototype.__modesValid = function (array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].constructor != Mode) {
            return false;
        }
    }
    return (array.constructor == Array) && (array.length != 0);
};

Washer.prototype.getModes = function () {
    if (this.__checkIfOn())
        return this.__modes;
};

Washer.prototype.setModes = function (array) {
    if (this.__modesValid(array) && this.__checkIfOn()) {
        this.__modes = array;
    }
};

Washer.prototype.getModeByName = function (name) {
    var findMode = null;
    if (this.__checkIfOn()) {
        this.__modes.forEach(function (mode) {
        if (mode.getName() == name) {
            findMode = mode;
        }
    });
    }
    return findMode;
};

Washer.prototype.startWash = function (name) {
    if (this.__checkIfOn()) {
        var mode = this.getModeByName(name);
        function wash(name, callback) {
            console.log("Пральна машина запущена!")
            var time = mode.getTime();
            setTimeout(
                function () {
                    callback(name, time)
                },
                (time*100/3)
            );
        }
        wash(name, function (name, time) {
            console.log(name + " закінчено! " + time + "хв вийшло!");
        })
    }
};