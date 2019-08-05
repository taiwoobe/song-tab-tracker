const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}, Your Registration was successful.`
    })
})


// Export API routes
module.exports = router;
