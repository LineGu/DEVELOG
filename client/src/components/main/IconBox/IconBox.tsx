import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from 'src/constants/Theme';
import { IComponentProps } from '@types';

const StyledIconBox = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid ${() => Theme.POINT};
`;

function IconBox({ children, className }: IComponentProps): ReactElement {
  return <StyledIconBox className={className}>{children}</StyledIconBox>;
}

export default IconBox;
