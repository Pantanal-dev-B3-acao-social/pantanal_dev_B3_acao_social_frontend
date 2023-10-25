export const CategorySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    visibility: {
      type: "string",
      enum: ["PUBLIC", "PRIVATE"],
    },
    categoryGroupId: {
      "format": "categoryGroupId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "category-group"
    },
  },
  required: ["name", "description", "visibility", "parentCategoryGroupEntity"],
};
