import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { REPLCommand } from 'repl';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props): ReactElement => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a href="#!">Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a href="#!">About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a href="#!">Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
