import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from '@components/common/Button';
import { IComponentProps } from '@types';
import Theme from '@constants/Theme';

const StyledPostBtn = styled(Button)`
  width: 10rem;
  height: 3rem;
  border-radius: 0.3em;
  font-size: 1em;
  color: ${() => Theme.HEADER_BACK};
  background-color: ${() => Theme.POINT};
`;

function PostButton({ className, children }: IComponentProps): ReactElement {
  return (
    <Link href={'/post'}>
      <StyledPostBtn className={className}>{children}</StyledPostBtn>
    </Link>
  );
}

export default PostButton;
