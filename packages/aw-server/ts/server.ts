import {log4File, ExtensionContext} from '@wfh/plink';
import {setupHttpProxy} from '@wfh/assets-processer/dist/utils';

const log = log4File(__filename);

export function activate(ctx: ExtensionContext) {
  log.info('API proxy server starting');
  setupHttpProxy('/api', 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com');
}
