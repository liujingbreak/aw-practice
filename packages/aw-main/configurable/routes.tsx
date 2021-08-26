import React from 'react';
import loadable from '@loadable/component';
import {ShowTopLoading} from '@wfh/doc-ui-common/client/components/ShowTopLoading';
import {AnimatableRoutesProps} from '@wfh/doc-ui-common/client/animation/AnimatableRoutes';

// const LazyDocComponent = loadable(async () => {
//   return (await import('../feature/article/ArticalePage')).ArticalePage;
// }, {fallback: <ShowTopLoading/>});

const LazyLandingComponent = loadable(async () => {
  return (await import('../pages/Landing')).default;
}, {fallback: <ShowTopLoading/>});

// const SurfaceDemo = loadable(async () => {
//   return (await import('../feature/demo/SurfaceBackgroundDemo')).SurfaceBackgroundDemo;
// });

export const routes: AnimatableRoutesProps['routes'] = [
  {path: '/', children: <LazyLandingComponent/>}
  // {path: '/doc/:mdKey', children: <LazyDocComponent/>}
];

export const defaultRedirect = '/';
