export const CategoryGroupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    visibility: {
      type: "string",
      enum: ["PUBLIC_INTERNALLY", "PUBLIC_EXTERNALLY", "PRIVATE"],
    },
    parentCategoryGroupId: {
      "format": "parentCategoryGroupId",
      "type": "string",
      "nullable": true,
      "foreignRoute": "category-group"
    },
  },
  required: ["name", "description", "visibility"],
};
