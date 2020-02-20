import React from 'react';
import Header from './components/header/Header';
import style from './socialCard.module.scss';
import Content from "./components/content/Content";

const SocialCard = () => {
  return (
    <div className={style.container}>
      <div className={style.socialCard}>
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default SocialCard;
