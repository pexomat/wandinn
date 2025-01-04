import { Header } from './Header';
import { Footer } from './Footer';
import { ChildrenFC } from '../../utils/type';
import style from './Layout.module.scss';

export const Layout: ChildrenFC = ({ children }) => (
  <>
    <Header />
    <main className={style.content}>{children}</main>
    <Footer />
  </>
);
