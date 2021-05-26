// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import TagsListTemplate from './tags-list-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMdx from '../../jest/__fixtures__/all-mdx';
import type { RenderCallback } from '../types';

describe('TagsListTemplate', () => {
  const props = {
    ...siteMetadata,
    ...allMdx
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(props)
      ),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<TagsListTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
