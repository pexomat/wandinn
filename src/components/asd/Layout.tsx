import { ReactNode } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import style from './Layout.module.scss';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    <main className={style.content}>{children}</main>
    <Footer />
  </>
);
