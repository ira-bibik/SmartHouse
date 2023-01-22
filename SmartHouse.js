"use strict";
function SmartHouse(name) {
    this.__name = name
    this.__devices = [];
}

SmartHouse.prototype.getHouseName = function () {
    return this.__name;
};

SmartHouse.prototype.getDevices = function () {
    return this.__devices;
};

SmartHouse.prototype.addDevice = function (device) {
    if (device.constructor = Device)
        this.__devices.push(device);
};

SmartHouse.prototype.getDeviceByName = function (name) {
    var findDevice = null;
    this.__devices.forEach(function (device) {
        if (device.getName() == name) {
            findDevice = device;
        }
    })
    return findDevice
};

SmartHouse.prototype.deleteDeviceByName = function (name) {
    //  this.__devices.forEach(function (device) {
    //      if (device.getName() == name) {
    //         var index = this.__devices.indexOf(device);
    //         this.__devices.splice(index, 1);
    //     }
    // })
    var element = this.getDeviceByName(name);
    var index = this.__devices.indexOf(element);
    this.__devices.splice(index, 1);
};

SmartHouse.prototype.offAllDevices = function () {
    this.__devices.forEach(function (device) {
        if (device.getState() === true) {
            device.off();
        }
    })
};

SmartHouse.prototype.onAllDevices = function () {
    this.__devices.forEach(function (device) {
        if (device.getState() === false) {
            device.on();
        }
    })
};