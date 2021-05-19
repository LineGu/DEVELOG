import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IOnChangeFileFunc } from '@eventInterfaces';

interface IFinderProps {
  onChange: IOnChangeFileFunc;
}

const StyledFinder = styled.input`
  position: absolute;
  visibility: hidden;
`;

function Finder({ onChange }: IFinderProps): ReactElement {
  return <StyledFinder type="file" accept="image/*,.pdf" onChange={onChange} />;
}

export default Finder;
