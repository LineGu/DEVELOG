import express from 'express';

const router = express.Router();
router.route('/contact').post().get().delete().patch();

module.exports = router;
