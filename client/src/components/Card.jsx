import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import PropTypes from 'prop-types';

// const ActiveSlideStyle = styled.div`
//   transform: ${props => `translateX(-${props.currentIndex * (100 / props.properties.length)}%)`};
//   `;

const Card = ({property}) => {
  const {imageIndex, imagePath, imageId} = property;
  return (
    <div id={[styles.card, imageIndex].join('')} className={styles.card}>
      <img src={imagePath} alt={imageId} height="412px"/>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;