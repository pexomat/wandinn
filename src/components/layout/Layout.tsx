import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import style from './Layout.module.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className={style.content}>{children}</main>
    <Footer />
  </>
);
