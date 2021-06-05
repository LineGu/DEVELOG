import express from 'express';

const router = express.Router();
router.route('/portfolio').post().get().delete().patch();

export default router;
