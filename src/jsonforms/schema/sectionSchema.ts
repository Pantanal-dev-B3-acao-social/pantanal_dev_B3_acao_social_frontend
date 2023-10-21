export const SectionSchema = {
  type: "object",
  properties: {
    description: { type: "string" },
    dateStartTime: { type: "string" },
    dateEndTime: { type: "string" },
    status: {
      type: "string",
      enum: ["Em Andamento", "Finalizada"],
    },
    visibility: {
      type: "string",
      enum: ["PUBLIC", "PRIVATE"],
    },
  },
  required: ["description"],
};
