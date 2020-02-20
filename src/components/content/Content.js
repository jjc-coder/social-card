import React from 'react';
import style from './content.module.scss';
import profile from '../../assets/images/profile.png';

const Content = () => (
  <div className={style.content}>
    <div className={style.title}>
      Learning React? Start Small.
    </div>
    <div className={style.profile}>
      <div>Dave Ceddia</div>
      <img src={profile} alt="Social Card profile" />
    </div>
    <div className={style.detail}>
      <p>Learning React? Start Small.</p>
      <p>Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps.</p>
    </div>
  </div>
);

export default Content;
