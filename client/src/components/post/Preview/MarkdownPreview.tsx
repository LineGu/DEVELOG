import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { MarkdownStyleWrapper, CodeBox, LinkRenderer } from '@components/common/MarkdownStyleWrapper/index';
import Controller from 'src/markdownController/Controller/index';

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
  const markdownController = new Controller();
  const updatedInput = markdownController.applyBlankToMarkdown(input);

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
