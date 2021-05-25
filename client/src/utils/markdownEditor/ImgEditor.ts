import axios from 'axios';
import { URL } from '@construction/url';
import { headerOption } from '@config/headerForImgur';
import Editor from './Editor';

export default class ImgEditor extends Editor {
  public insertionText: string;

  public maxSize: number;

  public uploadingState: { progress: number; error: string };

  public positionToMove: number[];

  public constructor(editType: string) {
    super();
    this.insertionText = this.stringToInsert[editType];
    this.maxSize = 5000000;
    this.uploadingState = { progress: 0, error: '' };
    this.positionToMove = [3, 3];
  }

  public editInput = (input: string, cursorPosition: number[]): { updatedText: string; cursorToGo: number[] } => {
    const currentPositon = cursorPosition[0];
    const updatedText = this.insertText(this.insertionText, input, currentPositon);
    const [firstPoint, secondPoint] = this.positionToMove;
    const cursorToGo = [firstPoint + currentPositon, secondPoint + currentPositon];
    return { updatedText, cursorToGo };
  };

  public setImgText = (url: string): void => {
    this.setImgString(url);
    this.insertionText = this.stringToInsert.img;
  };

  public getUploadProgress = (ProgressEvent: ProgressEvent): void => {
    const uploadingProgress = Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100);
    this.uploadingState = { progress: uploadingProgress, error: '' };
  };

  public uploadImg = async (file: File): Promise<void> => {
    const isExcessSize = file.size > this.maxSize;
    const isValidFile = file && isExcessSize;
    if (!isValidFile) this.uploadingState = { progress: 0, error: 'NOT_VAILD_FILE' };
    const imgData = new FormData();
    imgData.append('image', file);

    try {
      const postConfig = {
        headers: headerOption,
        onUploadProgress: (ProgressEvent: ProgressEvent) => this.getUploadProgress(ProgressEvent),
      };

      const response = await axios.post(URL.IMGUR, imgData, postConfig);
      const imgUrl = response.data.data.link;
      this.setImgText(imgUrl);
    } catch (error) {
      this.uploadingState = { progress: 0, error };
    }
  };
}
