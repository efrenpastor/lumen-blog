// @flow strict
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import AmazonComponent from '../../Amazon/Amazon';
import styles from './Content.module.scss';

const shortcodes = { AmazonComponent };

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']}>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </div>
  </div>
);

export default Content;
