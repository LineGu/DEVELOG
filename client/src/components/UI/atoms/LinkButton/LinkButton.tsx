import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Theme from '@theme/index';

type LinkProps = {
  linkName: string;
  currentPage: string;
};

const StyledLink = styled.div`
  position: relative;
  z-index: 3;
  color: ${(props) => props.color};
  text-decoration: ${(props) => (props.color === Theme.POINT ? 'underline' : 'none')};

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.color === Theme.POINT ? Theme.POINT : Theme.LINK_MODAL)};
  }
  &::selection {
    background: none;
  }
`;

function LinkButton({ linkName, currentPage }: LinkProps): ReactElement {
  const color = linkName === currentPage ? Theme.POINT : Theme.BASE;
  return (
    <Link href={`/${linkName}`}>
      <StyledLink color={color}>{linkName}</StyledLink>
    </Link>
  );
}

export default LinkButton;
