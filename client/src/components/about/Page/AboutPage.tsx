import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PageBase from '@components/common/PageBase/PageBase';
import Header from '@components/common/Header';
import ThemeButton from '@components/common/ThemeBtn';
import Devider from '@components/common/Devider';
import BodyContainer from '@components/about/BodyContainer';
import { IPagePorps } from '@types';
import Theme from '@constants/Theme';

const StyledThemeBtn = styled(ThemeButton)`
  margin: 0 0 0 5vw;
  bottom: 4em;
`;

const StyledDevider = styled(Devider)`
  margin: 1em 0 0 0;
  width: 100%;
  height: 1px;
  background-color: ${() => Theme.TOGGLE_BTN};
  opacity: 60%;
  border: 0px;
`;

function AboutPageComponent({ mode }: IPagePorps): ReactElement {
  return (
    <PageBase mode={mode} title="Develog">
      <Header currentPage="about" />
      <StyledDevider />
      <BodyContainer />
      <StyledThemeBtn />
    </PageBase>
  );
}

export default AboutPageComponent;
