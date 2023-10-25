/**
 * importa automaticamente todos os "Custom Render" do diretorio src/jsonForms/renderers/*
 */
// const requireComponent = require.context("./renderers", false);
// export const customRenderers: any[] = requireComponent
//   .keys()
//   .flatMap((fileName) => Object.values(requireComponent(fileName)));

const requireComponent = require.context("./renderers", false);
export const customRenderers: any[] = requireComponent
  .keys()
  .filter((fileName) => fileName.includes(".tsx"))
  .flatMap((fileName: any) => Object.values(requireComponent(fileName)));

// import { categoryGroupRender } from "./renderers/CategoryGroupRender";
// export const customRenderes: any[] = [categoryGroupRender];
