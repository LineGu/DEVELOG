import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { Image } from '@icons/index';
import { IOnClickSvgFunc, IOnChangeFileFunc } from '@eventInterfaces';
import { IEditFuncProps } from '@interfaces';
import { SetStateProcess } from '@types';
import Finder from '@atoms/Finder';

function ImgButton(onClick: IEditFuncProps, setUploadState: SetStateProcess) {
  const [imgUrl, setImgUrl] = useState('');

  const selectImgAndUpload: IOnChangeFileFunc = async (event) => {
    const { 0: file } = event.target.files as FileList;
    if (!file) return;
    uploadImg(file, setUploadState, setImgUrl);
  };

  const openFinder: IOnClickSvgFunc = (event) => {
    const finderElem = event.currentTarget.nextSibling as HTMLButtonElement;
    finderElem.click();
  };
  return (
    <>
      <Image onClick={openFinder} />
      <Finder onChange={selectImgAndUpload} />
    </>
  );
}
