"use strict";
function Mode(name, time, temperature, squeeze) {
    this.__name = name;
    this.__time = time;
    if (this.__temperatureValid(temperature)) {
        this.__temperature = temperature;
    } else {
        this.__temperature = 40;
    }
    if (this.__squeezeValid(squeeze)) {
        this.__squeeze = squeeze;
    } else {
        this.__squeeze = "Без віджиму";
    }
    
}

Mode.prototype.__temperatureValid = function (number) {
    return (typeof number == "number" && number < 95 && number > 20)
};

Mode.prototype.__squeezeValid = function (string) {
    return (typeof string == "string" && (string == "800" || string == "600" || string == "400" || string == "Без віджиму"))
};

Mode.prototype.getName = function () {
    return this.__name;
}

Mode.prototype.getTime = function () {
    return this.__time;
}