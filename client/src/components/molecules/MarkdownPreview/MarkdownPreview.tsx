import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { MarkdownStyleWrapper, CodeBox, LinkRenderer } from '@molecules/MarkdownStyleWrapper/index';
import applyLineBlank from '@utils/applyLineBlank';

interface IPreviewProps {
  input: string;
}

const StyledPreviewBox = styled(MarkdownStyleWrapper)`
  width: 50%;
  background-color: ${() => Theme.PREVIEW_BACK};
  @media (max-width: ${() => Theme.PC}) {
    display: none;
  }
`;

function MarkdownPreview({ input }: IPreviewProps): ReactElement {
  const updatedInput = applyLineBlank(input);

  const renderOptions = { code: CodeBox, link: LinkRenderer };

  return (
    <StyledPreviewBox>
      <ReactMarkdown
        plugins={[[gfm, { tableCellPadding: 'true' }]]}
        source={updatedInput}
        className="codeMirror"
        renderers={renderOptions}
      />
    </StyledPreviewBox>
  );
}

export default MarkdownPreview;
