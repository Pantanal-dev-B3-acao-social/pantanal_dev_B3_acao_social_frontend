export const CategoryGroupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    visibility: {
      type: "string",
      enum: ["PUBLIC_INTERNALLY", "PUBLIC_EXTERNALLY", "PRIVATE"],
    },

    // categoryGroup: {
    //   format: "categoryGroupId",
    // },
    categoryGroupId: {
      "format": "categoryGroupId",
      // "type": "object",
      "type": "string",
      "nullable": false,
      "foreignRoute": "category-group"
    },
  },
  required: ["name", "description" /* , "categoryGroup", "visibility" */],
};
