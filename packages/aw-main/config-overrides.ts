import {ReactScriptsHandler} from '@wfh/cra-scripts/dist/types';
// import {config} from '@wfh/plink';

const handler: ReactScriptsHandler = {
  changeCraPaths(craPaths, env, cmdOpt) {
    // change CRA paths:

    // output directory will be dist/static/main
    // if (cmdOpt.buildType === 'app')
    //   craPaths.appBuild = craPaths.appBuild + '/aw-main';
    // Setting "craPaths.publicUrlOrPath" will override environment variable PUBLIC_URL
    // craPaths.publicUrlOrPath = '/aw-main/';
  },

  webpack(cfg, env, cmdOpt) {
    // Change Webpack configure "cfg"
  }
};

export default handler;
