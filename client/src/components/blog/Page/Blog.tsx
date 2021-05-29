import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PageBase from '@components/common/PageBase/PageBase';
import Header from '@components/common/Header';
import ThemeButton from '@components/common/ThemeBtn';
import { IPagePorps } from '@types';

const StyledThemeBtn = styled(ThemeButton)`
  margin: 76vh 0 0 5vw;
`;

function BlogPageComponent({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase mode={mode} title="Develog">
      <Header currentPage="blog" />
      <StyledThemeBtn />
    </PageBase>
  );
}

export default BlogPageComponent;
