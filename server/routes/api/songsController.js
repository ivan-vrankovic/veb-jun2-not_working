const Song = require('./songsModel');

module.exports.getAllSongs = async function (req, res, next) {
    const sortBy = req.params.sortBy;

    try {
        const songs = await Song.getAll(sortBy);
        res.status(200).json(songs);
    } catch (err) {
        next(err);
    }
};

module.exports.patchSong = async function (req, res, next) {
    const songId = req.body.id;

    try {
        const song = await Song.updateSong(songId);
        if (song === null) {
            return res.status(404).json({ message: "Song not found!" });
        }
        return res.status(200).json(song);
    } catch (err) {
        next(err);
    }
};

module.exports.putNewSong = async function (req, res, next) {
    const newArtist = req.body.artist;
    const newTitle = req.body.title;

    try {
        const song = await Song.putSong(newArtist, newTitle);
        if (song === null) {
            return res.status(309).json({ message: "The song already exists! Try again!" });
        }
        return res.status(201).json({message: "The song has successfully been scrobbled!"});
    } catch (err) {
        next(err);
    }
}