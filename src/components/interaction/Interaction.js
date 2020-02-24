import React, { useState } from 'react';
import style from './interaction.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Interaction = () => {
  const [isSolidHeart, setIsSolidHeart] = useState(false);

  return <div className={style.interaction}>
    <FontAwesomeIcon icon={faComment} className={style.icon} />
    {isSolidHeart &&
      <FontAwesomeIcon
        icon={solidHeart}
        className={style.icon}
        onClick={() => setIsSolidHeart(!isSolidHeart)}
      />
    }
    {!isSolidHeart &&
    <FontAwesomeIcon
      icon={regularHeart}
      className={style.icon}
      onClick={() => setIsSolidHeart(!isSolidHeart)}
    />
    }
    <FontAwesomeIcon icon={faRetweet} className={style.icon} />
    <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
  </div>
};

export default Interaction;
