import React, { ReactElement } from 'react';
import styled from 'styled-components';
import pageLinkList from 'src/constants/pageLinkList';
import LinkButton from 'src/components/common/LinkButton/index';
import Theme from 'src/constants/Theme';
import { IComponentProps, ILinkPageProps } from '@types';

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
