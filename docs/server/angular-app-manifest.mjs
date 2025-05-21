
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
    "route": "/dreambridge/home"
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
    'index.csr.html': {size: 2207, hash: '045a43e3cca6718e08dc5d7bcf97ba9f8feddb20bc3fda8b282725833c45a5ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: 'a66dac2fdea5bb5e3e3ee783547714df2f8acfe7d2e0b6839ed8b9a936e8ee24', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12305, hash: '5a8024a10ec4167850890656097a3aa8129d99fdad34a797d3b41449fde8712a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15472, hash: '3ba46bbdc5aeaa9118f39013019c01042c6be3439a32f1ba25fa12df0c0621df', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6916, hash: '2be6bf174e317aa296e5e2863900ed62ee78c0ce58acee984309972d400e229a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'vision/index.html': {size: 11863, hash: '173a587d55331ffa3fbdb1ca548c14810f1818bfb8eaf3f8cd48a55a542c594f', text: () => import('./assets-chunks/vision_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14870, hash: 'e19a7b1827b35ff0cda7d677327418f7fbb0e8e5258aaa51ded845276f6e3177', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'showcase/index.html': {size: 20073, hash: '0eed5ca593fd1ff3db9e882b8469edc4c8fa18ceee5c67271b58804066f06925', text: () => import('./assets-chunks/showcase_index_html.mjs').then(m => m.default)},
    'dream-plan/index.html': {size: 6841, hash: 'cf74c5feca535e25246f4a3c1249534e66fb6e42ff6593ce989c6c4c6b78b0a1', text: () => import('./assets-chunks/dream-plan_index_html.mjs').then(m => m.default)},
    'community/index.html': {size: 9719, hash: '5653386b6d06f7746c13fe8c521bf29ae734b78e39bd7367ab3ac5b5f0d83ede', text: () => import('./assets-chunks/community_index_html.mjs').then(m => m.default)},
    'academy/index.html': {size: 10026, hash: '34f60fed7704bb0f54afeae3afffdf882ad2fade914f8adaa88cb7cd785ade2f', text: () => import('./assets-chunks/academy_index_html.mjs').then(m => m.default)},
    'dream-form/index.html': {size: 13470, hash: '6c1c784995d4d4226ecd720cba00358b43067b2aa11c724caa33a98e1f70ed88', text: () => import('./assets-chunks/dream-form_index_html.mjs').then(m => m.default)},
    'styles-UBDAGLO7.css': {size: 21284, hash: '5R/tIBV8jIM', text: () => import('./assets-chunks/styles-UBDAGLO7_css.mjs').then(m => m.default)}
  },
};
