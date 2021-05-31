import React, { ReactElement } from 'react';
import styled from 'styled-components';
import pageLinkList from '@constants/pageLinkList';
import LinkButton from '@components/common/LinkButton/index';
import Theme from '@constants/Theme';
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
  const pageList = pageLinkList;
  return (
    <StyledPageNav className={className}>
      {pageList.map((linkName, index) => (
        <LinkButton linkName={linkName} currentPage={currentPage} key={index} />
      ))}
    </StyledPageNav>
  );
}

export default StaticPageNav;
