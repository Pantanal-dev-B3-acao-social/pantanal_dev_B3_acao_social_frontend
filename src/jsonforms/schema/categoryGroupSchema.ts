export const CategoryGroupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    visibility: {
      type: "string",
      enum: ["PUBLIC_INTERNALLY", "PUBLIC_EXTERNALLY", "PRIVATE"],
    },
    categoryGroupId: {
      "format": "categoryGroupId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "category-group"
    },
  },
  required: ["name", "description", "visibility"],
};
