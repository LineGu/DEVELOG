import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';

const StyledFooterSection = styled.header`
  display: flex;
  position: absolute;
  z-index: 0;
  justify-content: center;
  width: 100%;
  height: 25%;
  background-color: ${() => Theme.BASE};
  border-bottom: 0px solid ${() => Theme.BASE};
  @media (max-width: ${() => Theme.PC}) {
    bottom: 0;
    height: 15%;
  }
`;

function Footer(): ReactElement {
  return (
    <>
      <StyledFooterSection>
        <span>Develog</span>
      </StyledFooterSection>
    </>
  );
}

export default Footer;
