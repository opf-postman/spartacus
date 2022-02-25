import { MethodPropertyDeprecation } from '../../../../shared/utils/file-utils';
import {
  CLIK_EVENT,
  PROGRESS_BUTTON_COMPONENT,
  SPARTACUS_STOREFRONTLIB,
  TODO_SPARTACUS,
} from '../../../../shared/constants';

// projects/storefrontlib/shared/components/progress-button/progress-button.component.ts
export const PROGRESS_BUTTON_COMPONENT_MIGRATION: MethodPropertyDeprecation[] =
  [
    {
      class: PROGRESS_BUTTON_COMPONENT,
      importPath: SPARTACUS_STOREFRONTLIB,
      deprecatedNode: CLIK_EVENT,
      comment: `// ${TODO_SPARTACUS} Output '${CLIK_EVENT}' has been renamed to '${CLIK_EVENT}' (typo).`,
    },
  ];