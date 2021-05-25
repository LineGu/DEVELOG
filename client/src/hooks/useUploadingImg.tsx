import React, { useCallback, useState, useEffect, useRef } from 'react';
import { IUploadState } from '@interfaces';
import { SetStateString } from '@types';
import editByButton from '@utils/markdownEditor/index';

interface IUploadingImgHook {
  (
    input: string,
    cursorPosition: number[],
    setInput: SetStateString,
    setCursorToGo: React.Dispatch<React.SetStateAction<number[]>>,
  ): {
    setImageUrl: SetStateString;
    setUploadState: React.Dispatch<React.SetStateAction<IUploadState>>;
    uploadState: IUploadState;
  };
}

const useUloadingImg: IUploadingImgHook = (input, cursorPosition, setInput, setCursorToGo) => {
  const uploadStateInit = { progress: 0, error: '' };
  const [imageUrl, setImageUrl] = useState<string>('');
  const [uploadState, setUploadState] = useState<IUploadState>(uploadStateInit);
  const isUploading = useRef(false);

  isUploading.current = uploadState.progress !== 0;
  useEffect(() => {
    if (!isUploading.current) return;
    const currentCursor = cursorPosition[0];
    const inputInsertedUploading = `${input.slice(0, currentCursor)}![Loading...]()${input.slice(currentCursor)}`;
    setInput(inputInsertedUploading);
  }, [isUploading.current]);

  const insertImageMarkdown = useCallback(() => {
    const isNotVaildUrl = imageUrl === null || imageUrl === undefined || imageUrl.length === 0;
    if (uploadState.error) {
      alert('이미지 업로드 실패');
      const previousInput = `${input.slice(0, cursorPosition[0])}${input.slice(cursorPosition[0] + 15)}`;
      setInput(previousInput);
      setImageUrl('');
      setUploadState(uploadStateInit);
      return;
    }
    if (isNotVaildUrl) return;

    const inputAfterLoading = input.slice(0, cursorPosition[0]) + input.slice(cursorPosition[0] + 15);
    const { updatedText, cursorToGo } = editByButton({ input: inputAfterLoading, cursorPosition, url: imageUrl });

    setInput(updatedText);
    setImageUrl('');
    setCursorToGo(cursorToGo);
  }, [imageUrl, uploadState]);

  useEffect(() => {
    insertImageMarkdown();
  }, [imageUrl, uploadState]);

  return { uploadState, setImageUrl, setUploadState };
};

export default useUloadingImg;
