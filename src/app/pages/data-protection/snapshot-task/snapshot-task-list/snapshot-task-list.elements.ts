import { marker as T } from '@biesbjerg/ngx-translate-extract-marker';
import { UiSearchableElement } from 'app/modules/global-search/interfaces/ui-searchable-element.interface';

export const snapshotTaskListElements = {
  hierarchy: [T('Data Protection'), T('Periodic Snapshot Tasks')],
  anchorRouterLink: ['/data-protection', 'snapshot'],
  elements: {
    tasks: {
      synonyms: [T('Data Protection'), T('Tasks')],
    },
    add: {
      hierarchy: [T('Add')],
      synonyms: [T('Add Periodic Snapshot Task')],
    },
  },
} satisfies UiSearchableElement;
