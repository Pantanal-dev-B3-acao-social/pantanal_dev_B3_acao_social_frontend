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
    details: {
      type: "object",
      properties: {
        createdBy: {
          type: "string",
        },
        createdDate: {
          "type": "string",
          "format": "date-time", "ui:readonly": true,
          "options": {
            "ui:readonly": true
          }
        },
        lastModifiedBy: { type: "string", "ui:readonly": true },
        lastModifiedDate: {
          "type": "string",
          "format": "date-time", "ui:readonly": true
        },
      }
    }
  },
  required: ["name", "description", "visibility"],
  propertiesReadOnly: ["details"],
};

