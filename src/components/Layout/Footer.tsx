import style from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={style.footer}>
    <div className={style.centerText}>pexomat {new Date().getFullYear()}</div>
  </footer>
);
