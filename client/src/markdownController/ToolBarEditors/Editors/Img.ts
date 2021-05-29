import axios from 'axios';
import { URL } from '@constants/url';
import { headerOption } from '@config/headerForImgur';
import { IOnClickEditButton } from '@types';
import CurrentInsertion from '../Abstract/CurrentInsertion';

export default class ImgEditor extends CurrentInsertion {
  protected textToInsert: string;

  private _maxSize!: number;

  public uploadingState: { progress: number; error: string };

  protected indexToInsert: number;

  protected indexToGo: number[];

  protected indexsToMove: number[];

  constructor() {
    super();
    this.textToInsert = '';
    this.indexsToMove = [3, 3];
    this._maxSize = 5000000;
    this.uploadingState = { progress: 0, error: '' };
    this.indexToInsert = 0;
    this.indexToGo = [0, 0];
  }

  private _setTextToInsert(url: string): void {
    this.textToInsert = `\n![](${url})\n`;
  }

  private _setUploadingState = (ProgressEvent: ProgressEvent): void => {
    const uploadingProgress = Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100);
    this.uploadingState = { progress: uploadingProgress, error: '' };
  };

  public uploadImg = async (file: File): Promise<void> => {
    const isExcessSize = file.size > this._maxSize;
    const isValidFile = file && isExcessSize;
    if (!isValidFile) this.uploadingState = { progress: 0, error: 'NOT_VAILD_FILE' };
    const imgData = new FormData();
    imgData.append('image', file);

    try {
      const postConfig = {
        headers: headerOption,
        onUploadProgress: (ProgressEvent: ProgressEvent) => this._setUploadingState(ProgressEvent),
      };

      const response = await axios.post(URL.IMGUR, imgData, postConfig);
      const imgUrl = response.data.data.link;
      this.uploadingState = { progress: 0, error: '' };
      this._setTextToInsert(imgUrl);
    } catch (error) {
      this.uploadingState = { progress: 0, error };
    }
  };

  public onClickEditButton = ({ input, cursorPosition, moveCursor }: IOnClickEditButton): string => {
    const currentCursorIndex = cursorPosition[0];
    this.setIndexToInsert(currentCursorIndex);
    this.setIndexToGo(currentCursorIndex);
    const updatedText = this.insertText(input);
    this.moveCursorAfterEdit(moveCursor);

    return updatedText;
  };
}
