import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { DiCss3 } from 'react-icons/di';

interface IStyledIconProps {
  margin: string;
}

interface IIconProps extends IStyledIconProps {
  className?: string;
}

const StyledCss = styled(DiCss3)<IStyledIconProps>`
  width: 12vw;
  height: 12vw;
  color: #006baf;
  margin: ${({ margin }) => margin};
`;

function CssIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledCss className={className} margin={margin} />;
}

export default CssIcon;
