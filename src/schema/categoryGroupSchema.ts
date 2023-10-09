export const CategoryGroupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    code: { type: "string" },
    categoryGroup: {
      type: "object",
      properties: {},
    },
  },
  required: ["name", "description", "code", "visibility", "categoryGroup"],
};
