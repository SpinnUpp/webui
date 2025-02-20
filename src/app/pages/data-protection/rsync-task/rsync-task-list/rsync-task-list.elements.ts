import { marker as T } from '@biesbjerg/ngx-translate-extract-marker';
import { UiSearchableElement } from 'app/modules/global-search/interfaces/ui-searchable-element.interface';

export const rsyncTaskListElements = {
  hierarchy: [T('Data Protection'), T('Rsync Tasks')],
  anchorRouterLink: ['/data-protection', 'rsync'],
  elements: {
    tasks: {
      synonyms: [T('Data Protection'), T('Tasks')],
    },
    add: {
      hierarchy: [T('Add')],
      synonyms: [T('Add Rsync Task')],
    },
  },
} satisfies UiSearchableElement;
