import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SiNextDotJs } from 'react-icons/si';

interface IStyledIconProps {
  margin: string;
}

interface IIconProps extends IStyledIconProps {
  className?: string;
}

const StyledNext = styled(SiNextDotJs)<IStyledIconProps>`
  width: 10vw;
  height: 10vw;
  color: #1e1e29;
  margin: ${({ margin }) => margin};
`;

function NextIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledNext className={className} margin={margin} />;
}

export default NextIcon;
