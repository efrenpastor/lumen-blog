// @flow strict
import React from 'react';
//import styles from './Amazon.module.scss';
import type { Amazon } from '../../types';

type Props = {
  product: Amazon
};

const AmazonComponent = ({ product }: Props) => {
  const {
    name, image, price, url
  } = product;

  return (
    // <div className={styles['product']}>
    <div style={{border: '2px solid #dadada', padding: '15px', borderRadius: '3px'}}>
      <div>
        <a href={url} rel="noopener noreferrer nofollow" target="_blank">
          <img src={image} alt={name} />
        </a>
      </div>
      <div>
        <a href={url} rel="noopener noreferrer nofollow" target="_blank">{name}</a>
        <div>
          <span>{price}</span>
          <a href={url} rel="noopener noreferrer nofollow" target="_blank">{url}</a>
        </div>
      </div>
    </div>
  );
};

export default AmazonComponent;
