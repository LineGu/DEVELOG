import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Theme from '@theme/index';
import { ILinkPageProps, IColorProps } from '@interfaces';

const StyledLink = styled.div<IColorProps>`
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

function LinkButton({ linkName, currentPage }: ILinkPageProps): ReactElement {
  const textColor = linkName?.toLowerCase() === currentPage ? Theme.POINT : Theme.BASE;
  return (
    <Link href={`/${linkName?.toLowerCase()}`}>
      <StyledLink color={textColor}>{linkName}</StyledLink>
    </Link>
  );
}

export default LinkButton;
