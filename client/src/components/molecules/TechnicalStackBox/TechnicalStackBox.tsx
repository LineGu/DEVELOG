import React, { ReactElement } from 'react';
import styled from 'styled-components';
import IconBox from '@atoms/IconBox/index';
import { MysqlIcon, NextIcon, ReduxIcon, ReactIcon, CssIcon, HtmlIcon, JsIcon } from '@icons/index';

interface ITechnicalStackBoxProps {
  className: string;
}

const StyledTechnicalStackBox = styled(IconBox)`
  top: 55%;
  right: 100%;
`;

function TechnicalStackBox({ className }: ITechnicalStackBoxProps): ReactElement {
  return (
    <StyledTechnicalStackBox className={className}>
      <MysqlIcon margin={'0 0 0 0'} />
      <NextIcon margin={'10px 0 0 0'} />
      <ReduxIcon margin={'10px 0 0 0'} />
      <ReactIcon margin={'0 0 0 0'} />
      <CssIcon margin={'0 0 0 0'} />
      <HtmlIcon margin={'0 0 0 0'} />
      <JsIcon margin={'10px 0 0 0'} />
    </StyledTechnicalStackBox>
  );
}

export default TechnicalStackBox;
