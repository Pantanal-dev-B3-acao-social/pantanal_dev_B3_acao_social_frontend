export const CategorySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    code: { type: "string" },
    visibility: {
      type: "string",
      enum: ["PUBLIC", "PRIVATE"], // Substitua pelos valores reais de VisibilityCategoryEnum
    },
    categoryGroup: {
      type: "object",
      properties: {
        // Defina o JSON Schema para a entidade CategoryGroupEntity aqui
      },
    },
    // Defina os JSON Schemas para as listas categorySocialActionTypeEntities e categorySocialActionLevelEntities, se necessário
  },
  required: ["name", "description", "code", "visibility", "categoryGroup"],
};
