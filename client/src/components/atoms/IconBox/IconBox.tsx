import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';

interface IIconBoxProps {
  children: ReactNode;
  className: string;
}

const StyledIconBox = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid ${() => Theme.POINT};
`;

function IconBox({ children, className }: IIconBoxProps): ReactElement {
  return <StyledIconBox className={className}>{children}</StyledIconBox>;
}

export default IconBox;
