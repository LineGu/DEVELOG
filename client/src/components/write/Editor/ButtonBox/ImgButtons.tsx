import React, { ReactElement } from 'react';
import { Image } from '@icons/index';
import { IOnClickSvgFunc, IEditImgFunc, SetStateProcess } from '@types';
import { Editors } from '@utils/markdown/markdownEditor/index';

import Finder from 'src/components/write/Finder';

interface IImgButtonProps {
  onClick: (editType: string) => void;
  setUploadState: SetStateProcess;
}

function ImgButton({ onClick, setUploadState }: IImgButtonProps): ReactElement {
  const openFinder: IOnClickSvgFunc = (event) => {
    const finderElem = event.currentTarget.nextSibling as HTMLButtonElement;
    finderElem.click();
  };

  const selectImgAndUpload: IEditImgFunc = async (event) => {
    const finderElem = event.target as HTMLInputElement;
    const { 0: file } = finderElem.files as FileList;
    if (!file) return;
    const checkUploadState = setInterval(() => {
      setUploadState(Editors.img.uploadingState);
    }, 10);

    await Editors.img.uploadImg(file);
    onClick('img');
    setUploadState(Editors.img.uploadingState);
    clearInterval(checkUploadState);
  };

  return (
    <>
      <Image onClick={openFinder} />
      <Finder onChange={selectImgAndUpload} />
    </>
  );
}

export default ImgButton;
