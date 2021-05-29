import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button/index';
import Theme from '@constants/Theme';

const StyledButtonBox = styled.div`
  position: absolute;
  right: 50%;
  bottom: 1rem;
  @media (max-width: ${() => Theme.PC}) {
    right: 0;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 3.7em;
    background-color: ${() => Theme.PREVIEW_BACK};
  }

  .back {
    background-color: ${() => Theme.LINK_MODAL};
  }
  .save {
    background-color: ${() => Theme.LINK_MODAL};
  }
  .submit {
    background-color: ${() => Theme.POINT};
  }
`;

const StyledButton = styled(Button)`
  pointer-events: auto;
  margin-right: 0.8em;
  width: 7rem;
  height: 3rem;
  font-size: 1.125rem;
  border-radius: 0.3em;
  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
  @media (max-width: ${() => Theme.MOBILE}) {
    width: 5rem;
    height: 2rem;
    font-size: 1rem;
  }
`;

function PostButtons(): ReactElement {
  return (
    <StyledButtonBox>
      <StyledButton onClick={() => console.log('나가기')} className="back">
        나가기
      </StyledButton>
      <StyledButton onClick={() => console.log('임시저장')} className="save">
        임시저장
      </StyledButton>
      <StyledButton onClick={() => console.log('등록')} className="submit">
        등록
      </StyledButton>
    </StyledButtonBox>
  );
}

export default PostButtons;
