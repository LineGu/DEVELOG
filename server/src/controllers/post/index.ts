import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import STATUS from '../../constants/STATUS';
import { About } from '../../entity/About';
import errorHandler from '../../utils/errorHandler';

interface IPostController {
  read(request: Request, response: Response): Promise<void>;
  create(request: Request, response: Response): Promise<void>;
  update(request: Request, response: Response): Promise<void>;
  delete(request: Request, response: Response): Promise<void>;
}

class PostController implements IPostController {
  public async read(request: Request, response: Response): Promise<void> {
    const { userId } = request.session;
    const repo = getRepository(About);
    try {
      const aboutPost = await repo.find({ author: userId });
      response.status(STATUS.OK).json(JSON.stringify(aboutPost));
    } catch (err) {
      errorHandler(err, response);
    }
  }

  public async create(request: Request, response: Response): Promise<void> {
    const { userId } = request.session;
    const { title, content } = request.body;
    const repo = getRepository(About);
    try {
      await repo.insert({ author: userId, title, content });
      response.status(STATUS.OK).json();
    } catch (err) {
      errorHandler(err, response);
    }
  }

  public async update(request: Request, response: Response): Promise<void> {
    const { userId } = request.session;
    const { id: postId } = request.params;
    const { title, content } = request.body;
    const repo = getRepository(About);
    try {
      await repo.update({ author: userId, id: parseInt(postId, 10) }, { title, content });
      response.status(STATUS.OK).json();
    } catch (err) {
      errorHandler(err, response);
    }
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const { userId } = request.session;
    const { id: postId } = request.params;
    const repo = getRepository(About);
    try {
      await repo.delete({ author: userId, id: parseInt(postId, 10) });
      response.status(STATUS.OK).json();
    } catch (err) {
      errorHandler(err, response);
    }
  }
}

const postController = new PostController();
export default postController;
