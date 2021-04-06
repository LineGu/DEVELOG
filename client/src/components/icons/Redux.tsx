import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SiRedux } from 'react-icons/si';

interface IStyledIconProps {
  margin: string;
}

interface IIconProps extends IStyledIconProps {
  className?: string;
}

const StyledRedux = styled(SiRedux)<IStyledIconProps>`
  width: 10vw;
  height: 10vw;
  color: #1e1e29;
  margin: ${({ margin }) => margin};
`;

function ReduxIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledRedux className={className} margin={margin} />;
}

export default ReduxIcon;
