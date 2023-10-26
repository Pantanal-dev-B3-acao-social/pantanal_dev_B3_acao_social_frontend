export const SectionSchema = {
  type: "object",
  properties: {
    description: { type: "string" },
    engagementScore: { type: "number" },
    dateStartTime: {
      type: "string",
      // "format": "date-time",
    },
    dateEndTime: {
      type: "string",
      // "format": "date-time" // 2023-10-24T17:17:47.218981841
    },
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
  required: ["description", "engagementScore", "status", "visibility", "socialAction"],
};
