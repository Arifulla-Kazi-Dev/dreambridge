
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
    'index.csr.html': {size: 2207, hash: '31d0abdbd84c2dcc1249c9b668d6d04c2db98811a01f1076819c3c23e8393bcd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: 'c893ee16c05d69792a0d51e891fb7069994b62953f5d0831eac41fcac2c43bf2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'vision/index.html': {size: 10810, hash: 'afea007ad614bed64df569d4ebacf24b8a9e48a93d5950a8fc1aa2d028bca2c1', text: () => import('./assets-chunks/vision_index_html.mjs').then(m => m.default)},
    'dream-form/index.html': {size: 12388, hash: '7f341cd23cc4402ffeab5fc5109697f4beec7d80098f2e94cfcfa9d7bad3bbaf', text: () => import('./assets-chunks/dream-form_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14181, hash: '398d3da72990bba0d1c66654a1d45caf4c5df72fb99733546faac4b0719b2d55', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'showcase/index.html': {size: 19138, hash: 'f147b0e0a66c4942794005d71c4eab240a73c950e4f5b0f2a560ff38400adc6b', text: () => import('./assets-chunks/showcase_index_html.mjs').then(m => m.default)},
    'dream-plan/index.html': {size: 5719, hash: 'faa5f202db3cb82f375ea836beef06104f3116a84afd5f01b34300fe2a944890', text: () => import('./assets-chunks/dream-plan_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5805, hash: '5601d98ffba4214a31a1bb3c0704dfe3ace0057ddb3036dd042c3ce0ddc5a8a0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 14419, hash: '2477e8fe5a5d6129ca0db754cc9f9352a84577422e3e9ac423441a5c3506309e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TO5MD6AI.css': {size: 18600, hash: 'Y/EbRqzpjDk', text: () => import('./assets-chunks/styles-TO5MD6AI_css.mjs').then(m => m.default)}
  },
};
