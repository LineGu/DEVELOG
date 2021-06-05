import express from 'express';

const router = express.Router();
router.route('/contact').post().get().delete().patch();

export default router;
