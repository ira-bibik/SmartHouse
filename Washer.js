"use strict";
function Washer(name, modes) {
    Device.call(this, name);
    this.__modes = [];
    if (this.__modesValid(modes)) {
        this.__modes = modes;
    }
    this.__launch = false;
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
    return this.__modes;
};

Washer.prototype.setModes = function (array) {
    if (this.__modesValid(array)) {
        this.__modes = array;
    }
};

Washer.prototype.getModeByName = function (name) {
    var findMode = null;
    this.__modes.forEach(function (mode) {
    if (mode.getName() == name) {
        findMode = mode;
    }
    });
    return findMode;
};

Washer.prototype.launchOn = function () {
    this.__launch = true;
}

Washer.prototype.launchOff = function () {
    this.__launch = false;
};

Washer.prototype.startWash = function (name, callback) {
    // if (this.__checkIfOn()) {
    //     if (!this.__launch) {
    //         this.__launch = true;
    //         var mode = this.getModeByName(name);
    //         function wash(name, callback) {
    //             console.log("Пральна машина запущена!")
    //             var time = mode.getTime();
    //             setTimeout(
    //                 function () {
    //                     callback(name, time)
    //                 },
    //                 (time * 100 / 3)
    //             );
    //         }
    //         wash(name, function (name, time) {
    //             console.log(name + " закінчено! " + time + "хв вийшло!");
    //         })
    //     } else {
    //         throw new Error("Девайс вже працює!");
    //     }
    // }
    var error;
    var mode = this.getModeByName(name);
    var time = mode.getTime();;
    if (this.__checkIfOn() && !this.__launch) {
        this.launchOn();
        console.log("Пральна машина запущена!");
    }  else {
        error = new Error(
          "Пральна машина вже працює! Неможливо запустити одночасно два прання!"
        );
    }
    setTimeout(function () {
      callback(name, time, error);
    }, (time * 100) / 3);
}; 