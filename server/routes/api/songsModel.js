const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    artist: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    count: {
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 1
    }
});

const Song = new mongoose.model('Song', songSchema);

async function getAll(sortBy) {
    if(sortBy === "count") {
        return await Song.find({}).sort({ count: 1 }).exec();
    }
    if(sortBy === "title") {
        return await Song.find({}).sort({ title: 1 }).exec();
    }
    if(sortBy === "artist") {
        return await Song.find({}).sort({ artist: 1 }).exec();
    }
}

async function updateSong(songId) {
    const song = await Song.findOne({ _id: songId }).exec();
    song.count++;
    await song.save();
    return song;
}

async function putSong(newArtist, newTitle) {
    const alreadyExists = await Song.findOne({ artist: newArtist, title: newTitle });
    if (alreadyExists !== null) {
        return null;
    }

    const newSong = new Song({
        _id: new mongoose.Types.ObjectId(),
        artist: newArtist,
        title: newTitle
    });

    await newSong.save();
    return newSong;
}

module.exports = {
    getAll,
    updateSong,
    putSong
}