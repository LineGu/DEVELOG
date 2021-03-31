import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Theme from '@theme/index';

type LinkProps = {
  linkName: string;
  currentPage: string;
};

const StyledLink = styled.div`
  color: ${(props) => props.color};
  opacity: ${(props) => (props.color === Theme.POINT ? '100%' : '60%')};
  text-decoration: ${(props) => (props.color === Theme.POINT ? 'underline' : 'none')};

  &:hover {
    opacity: 100%;
    cursor: pointer;
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
