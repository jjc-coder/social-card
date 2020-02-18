import React from 'react';
import avatar from '../../assets/images/avatar.jpeg';
import style from './header.module.scss';

const Header = () => (
  <div className={style.header}>
    <img src={avatar} alt='social cars avatar' className={style.avatar} />
    <div>
      <div className={style.dev}>The Practical Dev <span className={style.date}>@ThePracticalDev · Sep 10</span></div>
      <div className={style.learning}>Learning React? Start Small.</div>
      <div className={style.author}>{`{ author: `} <a href="#">@dceddia</a> {`}`} </div>
    </div>
  </div>
);

export default Header;
