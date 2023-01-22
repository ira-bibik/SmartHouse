"use strict";
function Speaker(name, songs) {
    Device.call(this, name);
    this.__currentSong = 0;
    this.__volume = 5;
    this.__songs = [];
    if (this.__songsValid(songs)) {
        this.__songs = songs;
    }
}

Speaker.prototype = Object.create(Device.prototype);
Speaker.prototype.constructor = Speaker;

Speaker.prototype.__songsValid = function (array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].constructor != Song) {
            return false;
        }
    }
    return (array.constructor == Array) && (array.length != 0);
};

Speaker.prototype.setVolume = function (number) {
    if (typeof number == "number" && number >= 0 && number <= 10 && this.__checkIfOn()) {
        return this.__volume = number;
    }
};

Speaker.prototype.getVolume = function () {
    if (this.__checkIfOn())
        return this.__volume;
};

Speaker.prototype.getSongs = function() {
    if (this.__checkIfOn())
        return this.__songs;
};

Speaker.prototype.setSongs = function (array) {
    if (this.__songsValid(array) && this.__checkIfOn()) {
        this.__songs = array;
    }
};

Speaker.prototype.addSong = function (song) {
    if (song.constructor == Song && this.__checkIfOn()) {
        this.__songs.push(song);
    }
};

Speaker.prototype.nextSong = function () {
    if (this.__checkIfOn() && this.__currentSong + 1 < this.__songs.length)
        ++this.__currentSong;
};

Speaker.prototype.previousSong = function () {
    if (this.__currentSong - 1 >= 0 && this.__checkIfOn())
        --this.__currentSong;
};

Speaker.prototype.getCurrentSong = function () {
    if (this.__checkIfOn())
        return this.__songs[this.__currentSong];
};

Speaker.prototype.setCurrentSong = function (number) {
    if (this.__checkIfOn() && number < this.__songs.length && number >= 0) {
        this.__currentSong = number;
    }
};

Speaker.prototype.volumeUp = function () {
    if (this.__volume != 10 && this.__checkIfOn())
        this.__volume += 1;
};

Speaker.prototype.volumeDown = function () {
    if (this.__volume != 0 && this.__checkIfOn())
        this.__volume -= 1;
};

