/**
 * importa automaticamente todos os "Custom Render" do diretorio src/jsonForms/renderers/*
 */
const requireComponent = require.context("./renderers", false);
export const customRenderes: any[] = requireComponent
  .keys()
  .flatMap((fileName) => Object.values(requireComponent(fileName)));