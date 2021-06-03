import express from 'express';

const router = express.Router();
router.route('/portfolio').post().get().delete().patch();

module.exports = router;
