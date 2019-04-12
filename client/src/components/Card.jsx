import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import PropTypes from 'prop-types';


const Card = ({property}) => {
  const {imageIndex, imagePath, imageId} = property;
  return (
    <div id={[styles.active, imageIndex].join('')} className={`${styles.card} ${[styles.active, imageIndex].join('')}`}>
      <img src={imagePath} alt={imageId} height="412px"/>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;