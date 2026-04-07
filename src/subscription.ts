import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 296618044,
  name: 'gkd_subscription',
  version: 2,
  author: 'L1566',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/L1566/gkd_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
