import express from 'express';

const router = express.Router();
router.route('/about').post().get().delete().patch();

module.exports = router;
