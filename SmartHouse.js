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
    for (var i = 0; i < this.__devices.length; i++) {
        if (this.__devices[i].getName() == name) {
            this.__devices.splice(i, 1);
        }
    }
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
        if (device.getState() == false) {
            device.on();
        }
    })
};