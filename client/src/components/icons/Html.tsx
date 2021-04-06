import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { DiHtml5 } from 'react-icons/di';

interface IStyledIconProps {
  margin: string;
}

interface IIconProps extends IStyledIconProps {
  className?: string;
}

const StyledHtml = styled(DiHtml5)<IStyledIconProps>`
  width: 12vw;
  height: 12vw;
  color: #006baf;
  margin: ${({ margin }) => margin};
`;

function HtmlIcon({ className, margin }: IIconProps): ReactElement {
  return <StyledHtml className={className} margin={margin} />;
}

export default HtmlIcon;
