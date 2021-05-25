import axios from 'axios';
import { headerOption } from '@config/headerForImgur';
import { URL } from '@construction/url';
import { SetStateProcess, SetStateString } from '@types';

const uploadImg = async (file: File, setProcess: SetStateProcess, setImageUrl: SetStateString): Promise<void> => {
  const isExcessSize = file.size > 5000000;

  const getUploadProgress = (ProgressEvent: ProgressEvent) => {
    const progress = Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100);
    setProcess({ progress, error: '' });
  };

  if (file && isExcessSize) {
    setProcess({ progress: 0, error: 'EXCESS' });
  }

  const imgData = new FormData();
  imgData.append('image', file);

  try {
    const postConfig = {
      headers: headerOption,
      onUploadProgress: (ProgressEvent: ProgressEvent) => getUploadProgress(ProgressEvent),
    };

    const response = await axios.post(URL.IMGUR, imgData, postConfig);
    const imgLink = response.data.data.link;
    setImageUrl(imgLink);
    setProcess({ progress: 0, error: '' });
  } catch (error) {
    setProcess({ progress: 0, error });
  }
};

export default uploadImg;

