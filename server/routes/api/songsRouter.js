const express = require('express');
const router = express.Router();

const controller = require('./songsController');

router.get('/:sortBy', controller.getAllSongs);
router.patch('/', controller.patchSong);
router.put('/', controller.putNewSong);

module.exports = router;