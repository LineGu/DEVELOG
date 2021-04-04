import React, { ReactElement } from 'react';
import HeaderTemp from '@templates/index';

function SomePage(): ReactElement {
  return <HeaderTemp currentPage="ABOUT" />;
}

export default SomePage;
