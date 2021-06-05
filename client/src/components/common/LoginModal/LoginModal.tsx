import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';

const StyledModal = styled.div<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  position: absolute;
  z-index: 3;
  background-color: ${() => Theme.LOGIN_MODAL};
  padding: 3em 0.6em 3em 2em;
  border-radius: 0.4em;
  top: 170%;
  left: 30%;
  .login-form {
    position: relative;
    z-index: 2;
  }

  .login-form h1 {
    font-size: 50px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
  }

  .login-form h1::selection {
    background-color: transparent;
  }

  .int-area {
    width: 400px;
    position: relative;
    margin-top: 20px;
  }
  .int-area:first-child {
    margin-top: 0;
  }
  .int-area input {
    width: 100%;
    padding: 20px 10px 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 18px;
    color: #fff;
    outline: none;
  }

  .int-area label {
    position: absolute;
    left: 10px;
    top: 15px;
    font-size: 18px;
    color: #999;
    transition: top 0.5s ease;
    cursor: text;
  }

  .int-area input:focus + label,
  .int-area input:valid + label {
    top: 0;
    font-size: 13px;
    color: #166cea;
  }

  .btn-area {
    margin-top: 30px;
  }

  .btn-area button {
    width: 94%;
    height: 43px;
    background: #166cea;
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 0.4em;
    cursor: pointer;
    margin-top: 10px;
  }

  .btn-area button:hover {
    background: #0e53bb;
  }
  .caption {
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    text-align: center;
  }

  .caption button {
    margin-top: 5px;
    margin-right: 55px;
    font-size: 15px;
    height: 10px;
    background-color: transparent;
    color: #fff;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
  }

  .caption button:hover {
    color: rgb(128, 180, 223);
    text-decoration: underline;
  }
`;

function LoginModal({ isHidden }: { isHidden: boolean }): ReactElement {
  return (
    <StyledModal isHidden={isHidden}>
      <section className="login-form">
        <h1>DEVELOG</h1>
        <form className="login-button">
          <div className="int-area">
            <input spellCheck={false} type="text" name="id" id="id" autoComplete="off" required />
            <label htmlFor="id">E-MAIL</label>
          </div>
          <div className="int-area">
            <input type="password" name="pw" id="pw" autoComplete="off" required />
            <label htmlFor="pw">PASSWORD</label>
          </div>
          <div className="btn-area">
            <button type="submit" value="login" id="login">
              LOGIN
            </button>
          </div>
        </form>
        <div className="caption">
          <button className="sign-up-button">회원 가입</button>
          <button className="find-id-button">아이디 찾기</button>
          <button className="find-pw-button">비밀번호 찾기</button>
        </div>
      </section>
    </StyledModal>
  );
}

export default LoginModal;
