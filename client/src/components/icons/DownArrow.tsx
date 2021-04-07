import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { IIconProps } from '@interfaces';

const StyledDownArrow = styled(IoIosArrowDown)`
  width: 8vmin;
  height: 8vmin;
`;

function DownArrowIcon({ className }: IIconProps): ReactElement {
  return <StyledDownArrow className={className} />;
}

export default DownArrowIcon;
