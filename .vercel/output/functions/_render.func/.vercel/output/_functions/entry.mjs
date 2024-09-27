import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DTm9ID9Z.mjs';
import { manifest } from './manifest_C6Lbk8iJ.mjs';

const serverIslandMap = new Map([
	['DynamicComponent', () => import('./chunks/DynamicComponent_ChFU3ibi.mjs')],
]);;

const _page0 = () => import('./pages/index.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/index.astro", _page0],
    ["node_modules/.pnpm/astro@5.0.0-beta.2_rollup@4.22.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cdbd6560-528d-4a68-92cd-c5e51d2db065",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
