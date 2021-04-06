import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosMoon } from 'react-icons/io';

interface IIconProps {
  className?: string;
}

const StyledMoon = styled(IoIosMoon)`
  width: 27px;
  height: 27px;
`;

function MoonIcon({ className }: IIconProps): ReactElement {
  return <StyledMoon className={className} />;
}

export default MoonIcon;
