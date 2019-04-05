import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Card = ({property}) => {
  const {imageIndex, imagePath, imageId} = property;
  return (
    <div id={`card-${imageIndex}`} className="card">
      <img src={imagePath} alt={imageId} height="412px"/>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;