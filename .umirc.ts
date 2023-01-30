import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'webAssembly',
  },
  routes: [
    {
      path: '/',
      redirect: '/webAssembly',
    },
    {
      name: 'webAssembly',
      path: '/webAssembly',
      component: './WebAssembly',
    },
  ],
  npmClient: 'yarn',
});
