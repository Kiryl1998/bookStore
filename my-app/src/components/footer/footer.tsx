import styleFooter from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styleFooter.footer}>
      <div className={styleFooter.container}>
        <div className={styleFooter.wrap}>
          <span className={styleFooter.text}>©2024 Bookstore</span>
          <span className={styleFooter.text}>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
