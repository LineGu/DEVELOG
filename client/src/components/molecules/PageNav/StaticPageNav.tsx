import React, { ReactElement } from 'react';
import styled from 'styled-components';
import pageLinkList from '@construction/pageLinkList';
import LinkButton from '@atoms/LinkButton/index';
import Theme from '@theme/index';
import { IComponentProps, ILinkPageProps } from '@interfaces';

const StyledPageNav = styled.nav`
  display: flex;
  margin-right: 1vw;
  margin-bottom: 3%;
  color: ${() => Theme.BASE};
  font-size: 20px;
  font-weight: 400;

  & > div {
    margin-left: 20px;
  }
  @media (max-width: ${() => Theme.PC}) {
    display: none;
  }
`;

function StaticPageNav({ currentPage, className }: ILinkPageProps & IComponentProps): ReactElement {
  return (
    <StyledPageNav className={className}>
      {pageLinkList.map((linkName, index) => (
        <LinkButton linkName={linkName} currentPage={currentPage} key={index} />
      ))}
    </StyledPageNav>
  );
}

export default StaticPageNav;
