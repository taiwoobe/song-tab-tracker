RecentlyViewed = require('../models/recentlyViewed');

module.exports = {
    async getRecentlyViewed (req, res) {
        try {
            const recentlyViewed = await RecentlyViewed.find({});
            res.json({
                status: "success",
                message: 'All Recently viewed songs retrieved sucessfully.',
                data: recentlyViewed
            });
        } catch(err) {
            res.status(500).send({
                error: 'Something went wrong trying to get the recently viewed songs. Try again.'
            })
        }
    },
    async createRecentlyViewed(req, res) {
        try {
            const recentlyViewed = await RecentlyViewed.create(req.body);
            res.json({
                status: "success",
                message: 'Recent Song sucessfully created.',
                data: recentlyViewed
            })
        } catch (err) {
            res.status(500).send({
                error: 'Something went wrong while creating the recent song. PLease try again.'
            })
        }
    }
}

