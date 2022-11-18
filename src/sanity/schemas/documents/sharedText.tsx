import {DocumentTextIcon} from '@sanity/icons';
import {defineField} from 'sanity';

export default defineField({
  name: 'sharedText',
  title: 'Shared Text',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'simpleBlockContent',
    }),
  ],
});
