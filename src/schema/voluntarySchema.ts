export const voluntarySchema = {
  "type": "object",
  "properties": {
    "person": { "type": "string" },
    "socialAction": { "type": "string" },
    "approvedBy": { "type": "string" },
    "approvedDate": { "type": "string" },
  },
  "required": ["person", "socialAction", "approvedBy", "approvedDate"]
};
