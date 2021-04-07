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
  const sentencesDividedByLine = introduce.split('/');
  return (
    <>
      {sentencesDividedByLine.map((sentence, sentenseIndex) => {
        const wordsDivided = sentence.split('#');

        return (
          <Fragment key={sentenseIndex}>
            {wordsDivided.map((word, wordIndex) =>
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
