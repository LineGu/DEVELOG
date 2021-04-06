import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BiSun } from 'react-icons/bi';

interface IIconProps {
  className?: string;
}

const StyledSun = styled(BiSun)`
  width: 22px;
  height: 22px;
`;

function SunIcon({ className }: IIconProps): ReactElement {
  return <StyledSun className={className} />;
}

export default SunIcon;
