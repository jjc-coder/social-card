import React from 'react';
import Header from './components/header/Header';
import style from './socialCard.module.scss';

const SocialCard = () => {
  return (
    <div className={style.container}>
      <div className={style.socialCard}>
        <Header />
      </div>
    </div>
  );
};

export default SocialCard;
