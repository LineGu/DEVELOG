import React, { Fragment, ReactElement } from 'react';
import styled from 'styled-components';
import { pointWord } from '@utils/introduceList';
import Theme from '@theme/index';

interface IIntroduceTextProps {
  introduce: string;
}

const StyledPointText = styled.span`
  color: ${() => Theme.POINT};
`;

function IntroduceText({ introduce }: IIntroduceTextProps): ReactElement {
  const sentenceDivided = introduce.split('/');
  return (
    <>
      {sentenceDivided.map((sentence, sentenseIndex) => {
        const wordDivided = sentence.split('#');

        return (
          <Fragment key={sentenseIndex}>
            {wordDivided.map((word, wordIndex) =>
              pointWord.includes(word) ? <StyledPointText key={wordIndex}>{word}</StyledPointText> : word,
            )}
            <br />
          </Fragment>
        );
      })}
    </>
  );
}

export default IntroduceText;
