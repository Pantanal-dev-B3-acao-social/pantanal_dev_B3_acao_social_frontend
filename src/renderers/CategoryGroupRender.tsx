import { rankWith, schemaMatches } from "@jsonforms/core";
import { withJsonFormsControlProps, withJsonFormsRendererProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";

const isCategoryGroup = schemaMatches((schema) => {
  return !isEmpty(schema) && schema.format === "categoryGroupId";
});

const categoryGroupTester = rankWith(5, isCategoryGroup);
export const categoryGroupRender = {
  tester: categoryGroupTester,
  // renderer: withJsonFormsRendererProps(() => {
  renderer: withJsonFormsControlProps(() => {
    return (
      <>
        <select name="" id="">
          <option value="">aaaaaa</option>
          <option value="">bbbbbb</option>
        </select>
      </>
    );
  }),
};
