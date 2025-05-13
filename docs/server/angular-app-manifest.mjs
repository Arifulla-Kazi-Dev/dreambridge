
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dreambridge/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dreambridge"
  },
  {
    "renderMode": 2,
    "route": "/dreambridge/vision"
  },
  {
    "renderMode": 2,
    "route": "/dreambridge/dream-form"
  },
  {
    "renderMode": 2,
    "route": "/dreambridge/about"
  },
  {
    "renderMode": 2,
    "route": "/dreambridge/contact"
  },
  {
    "renderMode": 2,
    "route": "/dreambridge/showcase"
  },
  {
    "renderMode": 2,
    "route": "/dreambridge/dream-plan"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2207, hash: '71e0808a6cb1d5239297c1c475f94778debb926043df11fd5eb600f84aef2574', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: 'f92b2698f9266fcf19bb0b16b855255f7b593a100082710a83e5137a99b2efc4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'vision/index.html': {size: 10810, hash: '6d02c1d0c7c9450f7fab5582bc9729b4f78cc89a2917d406afcd0c7f70cf4917', text: () => import('./assets-chunks/vision_index_html.mjs').then(m => m.default)},
    'dream-form/index.html': {size: 12388, hash: '47630395d7d800595d0269cebb5e782c5e304fff1392642d33617f0730ed4815', text: () => import('./assets-chunks/dream-form_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 13980, hash: '2d866dfd974392c92ceddaad65927bf2ad4d2d6d4831f3f51d6f0527f3bd6275', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 14419, hash: 'b81e9b85f12d1a0f43d5c8dca1eafef4856980eb34e929d93ec32dd0e1a2385a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'showcase/index.html': {size: 19143, hash: '36213a0c24584b46c0685a0dc2badabffd453b1612b0fa4b88f51420d3286128', text: () => import('./assets-chunks/showcase_index_html.mjs').then(m => m.default)},
    'dream-plan/index.html': {size: 5719, hash: 'fa2d256d6542f7b625d9a7d4bf00e5e5785c3060cc9b855d4ae5116ee9dae6c2', text: () => import('./assets-chunks/dream-plan_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5805, hash: 'b9fa1275f2293cf18d0a2afdf07dfe6944c9d51e00aef9a0fc25422fdb84a9b7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-TO5MD6AI.css': {size: 18600, hash: 'Y/EbRqzpjDk', text: () => import('./assets-chunks/styles-TO5MD6AI_css.mjs').then(m => m.default)}
  },
};
