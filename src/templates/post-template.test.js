// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import PostTemplate from './post-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import mdx from '../../jest/__fixtures__/mdx';
import type { RenderCallback } from '../types';

describe('PostTemplate', () => {
  const props = {
    data: {
      ...mdx
    }
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<PostTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
