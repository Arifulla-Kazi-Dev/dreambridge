
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
    "route": "/dreambridge/academy"
  },
  {
    "renderMode": 2,
    "route": "/dreambridge/community"
  },
  {
    "renderMode": 2,
    "route": "/dreambridge/dream-plan"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2207, hash: '7fd59775fca92c5d1b9bc1c73e6f93ef74fecb9aff6b8f43749ca0dde7e138ae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: '04e20bc885fb74d26ebab1582e4b2de6a0d08f1a2edb729cfa21ceb8f575ea43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'vision/index.html': {size: 11496, hash: 'b17e6c79d32740e3721a5e0f7cf1f08bcf5bd0b72378dcda0c52b62754f0672b', text: () => import('./assets-chunks/vision_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6518, hash: '7d84b82a4089b3438df9429c363f4a911add88e4bad02697d4c4771d696d4b01', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'dream-form/index.html': {size: 13101, hash: '5098c90fd6e4361214ff6baac1e5dde6eb306d15a467872be9601733f70657f1', text: () => import('./assets-chunks/dream-form_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14590, hash: '4075b926a3a28d7635dbe736205bb1cdd204550978d649ae0c84b2473d9590a4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'academy/index.html': {size: 9628, hash: '70b1a32f807029e6911716860225fadd596eb832b7a0a5373a0fccf13e6708e3', text: () => import('./assets-chunks/academy_index_html.mjs').then(m => m.default)},
    'showcase/index.html': {size: 19793, hash: 'd603ee75064481d1f6b3a8af22639bea34dea79740323a6839a562e8fb177b6d', text: () => import('./assets-chunks/showcase_index_html.mjs').then(m => m.default)},
    'dream-plan/index.html': {size: 6429, hash: '3aeaab5ff2b50fc8fa72fb90da1fbc00fd7038545ff89c0d56a2ead69a3d2548', text: () => import('./assets-chunks/dream-plan_index_html.mjs').then(m => m.default)},
    'community/index.html': {size: 9321, hash: 'e80e2cdbe703c0954e4b653cdf221ffa5bc62598933c1d654dcbec1d62b8d5d8', text: () => import('./assets-chunks/community_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15105, hash: '79cd5fc0e2b23dcfaaec9ada7fd1a732dd207c670ca709e584160c629cf5c4d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DQY6OV7R.css': {size: 20432, hash: 'y5o8+9dMVFc', text: () => import('./assets-chunks/styles-DQY6OV7R_css.mjs').then(m => m.default)}
  },
};
