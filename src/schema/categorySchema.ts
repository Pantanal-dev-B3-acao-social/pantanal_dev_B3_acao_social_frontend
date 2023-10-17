export const CategorySchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    code: { type: "string" },
    visibility: {
      type: "string",
      enum: ["PUBLIC", "PRIVATE"],
    },
  },
  required: ["name", "description", "code", "visibility", "categoryGroup"],
};
