export const CategoryGroupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    categoryGroup: {
      format: "categoryGroupId",
      // type: "string",
    },
  },
  required: ["name", "description", "categoryGroup"],
};
