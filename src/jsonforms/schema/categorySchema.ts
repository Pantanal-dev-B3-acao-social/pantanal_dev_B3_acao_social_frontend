export const CategorySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    visibility: {
      type: "string",
      enum: ["PUBLIC", "PRIVATE"],
    },
    categoryGroup: {
      "format": "categoryGroupForCategoryId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "category-group"
    },
  },
  required: ["name", "description", "visibility", "categoryGroup"],
};
