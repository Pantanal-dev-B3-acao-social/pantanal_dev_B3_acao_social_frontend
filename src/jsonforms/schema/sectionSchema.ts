export const SectionSchema = {
  type: "object",
  properties: {
    description: { type: "string" },
    engagementScore: { type: "number" },
    dateStartTime: { type: "string" },
    dateEndTime: { type: "string" },
    status: {
      type: "string",
      enum: ["OCCURRING", "PENDING", "OPEN", "CLOSED"],
    },
    visibility: {
      type: "string",
      enum: ["PUBLIC_INTERNALLY", "PUBLIC_EXTERNALLY", "PRIVATE"],
    },
    socialAction: {
      "format": "socialActionId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "social"
    },
  },
  required: ["description", "engagementScore", "status", "visibility"],
};
