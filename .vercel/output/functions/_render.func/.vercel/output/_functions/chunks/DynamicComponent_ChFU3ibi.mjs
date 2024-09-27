import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_BYLw_wTT.mjs';

const $$Astro = createAstro();
const $$DynamicComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DynamicComponent;
  const { timeout } = Astro2.props;
  await new Promise((resolve) => setTimeout(resolve, timeout));
  return renderTemplate`${maybeRenderHead()}<div>${(/* @__PURE__ */ new Date()).toISOString()}</div>;`;
}, "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/components/dynamic_component.astro", void 0);

const $$file = "/Users/zolboo/Workspace/GitHub/astro-server-islands-test/src/components/dynamic_component.astro";
const $$url = undefined;

export { $$DynamicComponent as default, $$file as file, $$url as url };
