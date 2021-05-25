// @flow strict
import CMS from 'netlify-cms-app';
import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/post-preview';
import Amazon from './editor-components/amazon';

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('posts', PostPreview);
CMS.registerEditorComponent(Amazon);