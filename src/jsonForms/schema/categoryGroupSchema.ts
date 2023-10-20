export const CategoryGroupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    categoryGroup: {
      format: "categoryGroupId",
    },
  },
  required: ["name", "description", "categoryGroup"],
};
