import {CliExtension} from '@wfh/plink/wfh/dist';
import {plinkEnv} from '@wfh/plink';
import {fork} from 'child_process';
import Path from 'path';

const cliExt: CliExtension = (program) => {
  program.command('aw:dev-start')
  .description('Start @wfh/cra-scripts dev server and API proxy server')
  // .option('-f, --file <spec>', 'sample option')
  .action(async () => {
    fork(Path.resolve(plinkEnv.rootDir, 'server-space/app.js'), ['-c', 'conf/devServerProxy.ts'], {
      cwd: Path.join(plinkEnv.rootDir, 'server-space')
    });
    fork(require.resolve('@wfh/plink/wfh/dist/cmd-bootstrap'),
      'cra-start --prop @wfh/cra-scripts.openBrowser=http://localhost:14334 aw-main'.split(/\s+/), {
      cwd: Path.join(plinkEnv.rootDir, 'cra-space')
    });
  });

  program.command('aw:demo')
  .description('Start a server for hosting existing production assets')
  .action(() => {

    fork(Path.resolve(plinkEnv.rootDir, 'server-space/app.js'), ['--prop', 'port=14334'], {
      cwd: Path.join(plinkEnv.rootDir, 'server-space')
    });
    fork(require.resolve('@wfh/plink/wfh/dist/cmd-bootstrap'), [
      'cra-open', 'http://localhost:14334'
    ], {
      cwd: Path.join(plinkEnv.rootDir, 'cra-space')
    });
  });

  // TODO: Add more sub command here
};

export default cliExt;
