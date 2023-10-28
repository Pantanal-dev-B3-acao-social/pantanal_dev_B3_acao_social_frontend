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
    approvedBy: {
      "format": "approvedBy",
      "type": "string",
      "nullable": false,
      "foreignRoute": "person"
    },
    approvedDate: {
      "type": "string",
      // "format": "date-time",
      "format": "custom-date-time",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d+$"
    },


  },
  required: ["person", "session", "approvedBy", "approvedDate"],
};
