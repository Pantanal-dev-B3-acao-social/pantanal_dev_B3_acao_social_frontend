export const PresenceSchema = {
  type: "object",
  properties: {
    person: {
      "format": "personId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "person"
    },
    session: {
      "format": "sessionId",
      "type": "string",
      "nullable": false,
      "foreignRoute": "session"
    },
    engagementScore: { type: "number", "ui:readonly": true, },
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
