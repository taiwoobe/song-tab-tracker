Song = require('../models/songModel');

module.exports = {
    async getSongs (req, res) {
        try {
            const song = await Song.find({});
            res.json({
                status: "success",
                message: 'All Songs retrieved sucessfully.',
                data: song
            });
        } catch(err) {
            res.status(500).send({
                error: 'Something went wrong trying to get the songs. Try again.'
            })
        }
    },
    async getSong(req, res)  {
        try {
            const song = await Song.findById(req.params.id);
            res.json({
                status: 'success',
                message: 'Song retrieved successfully.',
                data: song
            })
        } catch (err) {
            req.status(500).send({
                error: 'Cannot retrive song. Try again.'
            })
        }
    },
    async createSong(req, res) {
        try {
            const song = await Song.create(req.body);
            res.json({
                status: "success",
                message: 'Songs created sucessfully.',
                data: song
            })
        } catch (err) {
            res.status(500).send({
                error: 'Something went wrong while creating the song. PLease try again.'
            })
        }
    },
    async updateSong(req, res) {
        try {
            const song = await Song.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json({
                status: "success",
                message: 'Song updated sucessfully.',
                data: song
            })
        } catch (err) {
            res.status(500).send({
                error: 'Something went wrong while updating the song. PLease try again.'
            })
        }
    }
}

