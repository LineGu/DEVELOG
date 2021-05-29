import React, { ReactElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import Theme from '@constants/Theme';
import { ILinkPageProps } from '@types';
import ResponsiveMenu from './ResponsiveMenu';
import StaticPageNav from './StaticPageNav';

const ResponsiveControlBox = styled.div`
  .showModal {
    display: block;
    position: absolute;
    flex-direction: column;
    top: 99%;
    right: calc(7.6vw - 26px);

    animation-name: left;
    animation-duration: 0.8s;
    animation-iteration-count: initial;
    animation-delay: 0s;
    animation-timing-function: ease-out;

    & > div {
      background-color: ${() => Theme.LINK_MODAL};
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      margin: 10px calc(10px - 1.2vw) 0 0;
      padding: 9px;
      opacity: 100%;
      text-align: center;
      text-decoration: none;
      font-size: 1.7vh;
    }
    & > div:hover {
      color: ${() => Theme.HOVER_POINT};
    }
  }
  @keyframes left {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
  }
`;

function PageNav({ currentPage }: ILinkPageProps): ReactElement {
  const [isShowingLinkModal, setIsShowingLinkModal] = useState<boolean>(false);

  const onClickMenu = useCallback(() => {
    setIsShowingLinkModal(!isShowingLinkModal);
  }, [isShowingLinkModal]);

  return (
    <>
      <ResponsiveMenu onClick={onClickMenu} />
      <ResponsiveControlBox>
        <StaticPageNav className={isShowingLinkModal ? 'showModal' : ''} currentPage={currentPage} />
      </ResponsiveControlBox>
    </>
  );
}

export default PageNav;
