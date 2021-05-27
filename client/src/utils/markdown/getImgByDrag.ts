import React from 'react';

const getImgByDrag = (event: React.DragEvent<HTMLElement>): File => {
  event.stopPropagation();
  event.preventDefault();
  const { files } = event.dataTransfer;
  const { 0: imgFile } = files;
  return imgFile;
};

export default getImgByDrag;
