import express from 'express';

const router = express.Router();
router.route('./blog/post').post();
router.route('/blog/:id').get().delete().patch();

module.exports = router;
