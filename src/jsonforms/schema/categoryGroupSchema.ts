export const CategoryGroupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    // visibility: {
    //   type: "string",
    //   enum: ["PUBLIC_INTERNALLY", "PUBLIC_EXTERNALLY", "PRIVATE"],
    // },
    // categoryGroup: {
    //   format: "categoryGroupId", /** mesmo nameId do CategoryGroupRender */
    // },
  },
  required: ["name", "description" /* , "categoryGroupId" , "visibility" */],
};
