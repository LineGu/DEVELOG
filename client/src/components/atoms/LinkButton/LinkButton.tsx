import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Theme from '@theme/index';

interface ILinkButtonProps {
  linkName: string;
  currentPage: string;
}

interface ILinkProps {
  color: string;
}

const StyledLink = styled.div<ILinkProps>`
  position: relative;
  z-index: 3;
  color: ${({ color }) => color};
  text-decoration: ${({ color }) => (color === Theme.POINT ? 'underline' : 'none')};

  &:hover {
    cursor: pointer;
    color: ${({ color }) => (color === Theme.POINT ? Theme.POINT : Theme.LINK_MODAL)};
  }
  &::selection {
    background: none;
  }
`;

function LinkButton({ linkName, currentPage }: ILinkButtonProps): ReactElement {
  const color = linkName === currentPage ? Theme.POINT : Theme.BASE;
  return (
    <Link href={`/${linkName}`}>
      <StyledLink color={color}>{linkName}</StyledLink>
    </Link>
  );
}

export default LinkButton;
