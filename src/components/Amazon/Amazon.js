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
    <div style={{border: '2px solid #dadada', padding: '40px', borderRadius: '3px', display: 'grid', gridTemplateColumns: '1fr 2fr', gridColumnGap: '20px'}}>
      <div style={{paddingRight: '20px', borderRight: '3px solid #DADADA'}}>
        <a href={url} rel="noopener noreferrer nofollow" target="_blank">
          <img src={image} alt={name} />
        </a>
      </div>
      <div>
        <a style={{textDecoration: 'none', color: '#222', fontWeight: '600', fontSize: '20px'}} href={url} rel="noopener noreferrer nofollow" target="_blank">{name}</a>
        <div>
          <span>{price}</span>
          <a href={url} rel="noopener noreferrer nofollow" target="_blank">Comprar en Amazon</a>
        </div>
      </div>
    </div>
  );
};

export default AmazonComponent;
