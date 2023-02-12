"use strict";
var songs = [
    new Song("Stayin' Alive", "Bee Gees", "3:38"),
    new Song("I Will Survive", "Gloria Gaynor", "4:57"),
    new Song("AS IT WAS", "Harry Styles", "2:46"),
    new Song("Blinding Lights", "The Weeknd", "4:22"),
    new Song("BAD HABITS", "Ed Sheeran", "3:50")
];

var song2 = [songs[0], songs[3], songs[1]];

var modes = [
    new Mode("Хлопок", 120, 50, "600"),
    new Mode("Бистро 30", 30, 80, "800"),
    new Mode("Вручну", 100, 50, "Без віджиму"),
    new Mode("Синтетика", 90, 25, "400"),
    new Mode("Делікатна", 800, 40, "Без віджиму")
]

var modes2 = [modes[0], modes[1], modes[2], modes[3], modes[4]];

// var wash = new Washer("LG", modes);
// wash.on();
// wash.startWash("Хлопок");
// console.log(wash.getModes());

var house = new SmartHouse("Home");

house.addDevice(new Speaker("Apple", song2));
house.addDevice(new Washer("LG", modes2));
house.addDevice(new TV("SAMSUNG"));

house.onAllDevices();
try {
    house.getDeviceByName("LG").startWash("Хлопок", function (name, time) {
        console.log(name + " закінчено! " + time + "хв вийшло!");
        house.getDeviceByName("LG").launchOff();
    });
    house.getDeviceByName("LG").startWash("Хлопок", function (name, time) {
        console.log(name + " закінчено! " + time + "хв вийшло!");
        house.getDeviceByName("LG").launchOff();
    });
} catch (error) {
    console.log("Пральна машина вже працює! Неможливо запустити одночасно два прання!");
}


console.log(house.getDeviceByName("LG").getModes());
console.log(house.getDeviceByName('LG').getState());




