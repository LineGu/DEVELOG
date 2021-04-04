import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '@theme/index';
import { IoIosMoon } from 'react-icons/io';
import { BiSun } from 'react-icons/bi';

type ThemeButtonProps = {
  onClick: (() => void) | undefined;
};

const StyledToggle = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  align-items: center;
  margin: 76vh 0 0 4vw;
  background-color: ${() => Theme.TOGGLE_BACK};
  border-radius: 50%;
  border: 1px solid ${() => Theme.BASE};
  width: 31px;
  height: 31px;

  flex-wrap: nowrap;
  overflow: hidden;

  .Dark {
    background-color: ${() => Theme.TOGGLE_BACK};
    & > .moonImg {
      display: none;
    }
    & > .sunImg {
      color: ${() => Theme.WHITE};
    }
  }

  .Light {
    background-color: ${() => Theme.BLACK};
    & > .sunImg {
      display: none;
    }
  }

  &: hover {
    border-radius: 1em;
    width: 130px;
    height: 30px;
    transition: width 0.5s ease;
    justify-content: flex-end;
    cursor: pointer;
    div > .sunImg {
      color: ${() => Theme.MODE_MARK};
      transition: color 0.3s linear;
    }
    div > .moonImg {
      color: ${() => Theme.MODE_MARK};
      transition: color 0.3s linear;
    }
    .lightMode {
      visibility: visible;
      display: block;
      opacity: 100%;
      margin: 2px 35px 0 0;
      color: ${() => Theme.TOGGLE_BTN};
      transition: color 0.3s linear 0.3s, visibility 0.3s linear 0.3s;
    }
  }
`;
const StyledCircleBtn = styled.div`
  position: relative;
  background-color: ${() => Theme.TOGGLE_BTN};
  border-radius: 50%;
  width: 27px;
  height: 27px;
  margin: 0 2px 0px 2px;
`;

const StyledMoon = styled(IoIosMoon)`
  position: absolute;
  z-index: 5;
  width: 27px;
  height: 27px;
  color: ${() => Theme.BASE};
`;

const StyledSun = styled(BiSun)`
  position: absolute;
  z-index: 5;
  margin: 3px 0 0 3px;
  width: 22px;
  height: 22px;
`;

const StyledModeSpan = styled.span`
  position: absolute;
  visibility: hidden;
  opacity: 100%;
`;

function ThemeButton({ onClick }: ThemeButtonProps): ReactElement {
  const [, setTheme] = useState('');
  const currentTheme = Theme.BASE === '#707070' ? 'Light' : 'Dark';
  const newTheme = Theme.BASE === '#707070' ? 'Dark' : 'Light';

  return (
    <StyledToggle onClick={onClick} theme={newTheme}>
      <StyledModeSpan className="lightMode">{newTheme} Mode</StyledModeSpan>
      <StyledCircleBtn
        className={currentTheme}
        onClick={() => {
          setTheme(newTheme);
        }}
      >
        <StyledMoon className="moonImg" />
        <StyledSun className="sunImg" />
      </StyledCircleBtn>
    </StyledToggle>
  );
}

export default ThemeButton;
