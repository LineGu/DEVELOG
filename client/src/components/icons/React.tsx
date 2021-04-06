import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { DiReact } from 'react-icons/di';

interface IStyledIconProps {
  margin: string;
}

interface IIconProps extends IStyledIconProps {
  className?: string;
}

const StyledReact = styled(DiReact)<IStyledIconProps>`
  width: 12vw;
  height: 12vw;
  color: #3bd6f7;
  margin: ${({ margin }) => margin};
`;

function ReactIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledReact className={className} margin={margin} />;
}

export default ReactIcon;
