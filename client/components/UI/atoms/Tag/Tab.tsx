import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {
  tagName: string;
  currentTag: string;
};

const StyledTab = styled.div`
  color: ${(props) => props.color};
  opacity: ${(props) => (props.color === '#c17fce' ? '100%' : '60%')};
  text-decoration: ${(props) => (props.color === '#c17fce' ? 'underline' : 'none')};
  margin-left: 20px;
`;

function Tag({ tagName, currentTag }: Props): ReactElement {
  const color = tagName === currentTag ? '#c17fce' : '#707070';
  return (
    <Link href="/">
      <StyledTab color={color}>{tagName}</StyledTab>
    </Link>
  );
}

export default Tag;
