const requireComponent = require.context("./renderers", false);
export const customRenderes: any[] = requireComponent
  .keys()
  .flatMap((fileName) => Object.values(requireComponent(fileName)));
