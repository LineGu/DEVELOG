import { Request, Response } from 'express';

interface IPostController {
  _userId: string;
  _postId: string;
  _maxId: string;

  read(request: Request, response: Response): Promise<void>;
  create(request: Request, response: Response): Promise<void>;
  update(request: Request, response: Response): Promise<void>;
  delete(request: Request, response: Response): Promise<void>;
}

class PostController implements IPostController {
  private _userId: string;
  private _maxId: string;
  private _postId: string;

  constructor() {
    this._postId = '';
    this._maxId = '';
    this._userId = '';
  }

  setPostId(id: string): void {
    this._postId = id;
  }

  async read(request: Request, response: Response): Promise<void> {
    const { id: postId } = request.params;
    this.setPostId(postId);
  }

  async create(request: Request, response: Response): Promise<void> {
    console.log(request, response);
  }

  async update(request: Request, response: Response): Promise<void> {
    const { id: postId } = request.params;
    this.setPostId(postId);
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id: postId } = request.params;
    this.setPostId(postId);
  }
}

const postController = new PostController();
export default postController;
