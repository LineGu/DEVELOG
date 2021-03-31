import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type LinkProps = {
  linkName: string;
  currentPage: string;
};

const StyledLink = styled.div`
  color: ${(props) => props.color};
  opacity: ${(props) => (props.color === '#c17fce' ? '100%' : '60%')};
  text-decoration: ${(props) => (props.color === '#c17fce' ? 'underline' : 'none')};

  &:hover {
    opacity: 100%;
    cursor: pointer;
  }
`;

function LinkButton({ linkName, currentPage }: LinkProps): ReactElement {
  const color = linkName === currentPage ? '#c17fce' : '#707070';
  return (
    <Link href={`/${linkName}`}>
      <StyledLink color={color}>{linkName}</StyledLink>
    </Link>
  );
}

export default LinkButton;
