import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import GuideBox from '@components/about/GuideBox';
import Preview from '@components/post/Preview';

interface IUrlProps {
  dataUrl: string;
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  width: 100%;
  height: auto;
`;

const ContentsWrapper = styled(Preview)`
  width: 60%;
  background-color: inherit;
`;

const init = `
# 블로그 페이지


`;

function BodyContainer({ dataUrl }: IUrlProps): ReactElement {
  const [contents, setContent] = useState<string>(init);

  return <StyledContainer>{contents ? <ContentsWrapper input={contents} /> : <GuideBox />}</StyledContainer>;
}

export default BodyContainer;
