import React from 'react';
import './ImageWithLabel.scss';

interface Props {
  imageUrl: string,
  altText: string | null,
  labelText: string
}

function ImageWithLabel({ imageUrl, altText, labelText }: Props) {
  return (
    <div className="label-image">
      <span>{labelText}</span>
      <img src={imageUrl} alt={`${altText}`} />
    </div>
  );
}

export default ImageWithLabel;
