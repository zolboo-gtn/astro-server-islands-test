import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderHead, f as renderSlot, a as createAstro, g as renderComponent } from '../chunks/astro/server_BYLw_wTT.mjs';
import $$DynamicComponent from '../chunks/DynamicComponent_ChFU3ibi.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Loader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>Loading...</div>`;
}, "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/components/loader.astro", void 0);

const $$StaticComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>${(/* @__PURE__ */ new Date()).toISOString()}</div>;`;
}, "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/components/static_component.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "StaticComponent", $$StaticComponent, {})} ${renderComponent($$result2, "DynamicComponent", $$DynamicComponent, { "server:defer": true, "timeout": 1e3, "server:component-directive": "defer", "server:component-path": "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/components/dynamic_component.astro", "server:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`${renderComponent($$result3, "Loader", $$Loader, { "slot": "fallback" })}` })} ${renderComponent($$result2, "DynamicComponent", $$DynamicComponent, { "server:defer": true, "timeout": 2e3, "server:component-directive": "defer", "server:component-path": "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/components/dynamic_component.astro", "server:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`${renderComponent($$result3, "Loader", $$Loader, { "slot": "fallback" })}` })} </main> ` })}`;
}, "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/pages/index.astro", void 0);

const $$file = "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
