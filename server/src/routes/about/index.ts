import express from 'express';
import postController from '../../controllers/post/index';

const router = express.Router();

router.post('/', postController.create);

export default router;
