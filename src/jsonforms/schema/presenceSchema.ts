export const PresenceSchema = {
  type: "object",
  properties: {
    person: {
      "format": "person",
      "type": "string",
      "nullable": false,
      "foreignRoute": "person"
    },
    session: {
      "format": "session",
      "type": "string",
      "nullable": false,
      "foreignRoute": "session"
    },
    engagementScore: { type: "number" },
    approvedBy: { type: "string" },
    approvedDate: { type: "string" },
    details: {
      type: "object",
      properties: {
        createdBy: {
          type: "string",
        },
        createdDate: {
          "type": "string",
          "format": "date-time",
          "ui:readonly": true,
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
  required: ["person", "session"],
};
