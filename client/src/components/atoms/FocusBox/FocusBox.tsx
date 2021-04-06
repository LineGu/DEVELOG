import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';

interface IFocusBoxCssProps {
  margin: string;
  color: string;
}

interface IFocusBoxProps extends IFocusBoxCssProps {
  children: ReactNode;
  className?: string;
}

const StyledFocusBox = styled.div<IFocusBoxCssProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vmin;

  .left {
    margin-right: ${({ margin }) => margin};
    border-top: 1px solid ${({ color }) => color};
    border-bottom: 1px solid ${({ color }) => (color === Theme.POINT ? Theme.BLACK : Theme.POINT)};
    transition: margin-right 0.5s ease 0s;
  }
  .right {
    border-bottom: 1px solid ${({ color }) => color};
    border-top: 1px solid ${({ color }) => (color === Theme.POINT ? Theme.BLACK : Theme.POINT)};
  }
`;

const StyledSlideBox = styled.div`
  width: 47%;
  height: 100%;
  border-top: 1px solid ${() => Theme.BLACK};
  border-bottom: 1px solid ${() => Theme.BLACK};
`;

function FocusBox({ children, margin, color, className }: IFocusBoxProps): ReactElement {
  return (
    <StyledFocusBox className={className} margin={margin} color={color}>
      <StyledSlideBox className="left" />
      <StyledSlideBox className="right" />
      {children}
    </StyledFocusBox>
  );
}

export default FocusBox;
