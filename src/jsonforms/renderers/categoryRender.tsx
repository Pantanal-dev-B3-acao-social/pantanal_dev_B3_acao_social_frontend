import { rankWith, schemaMatches } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";

const isCategory = schemaMatches((schema) => {
  return !isEmpty(schema) && schema.format === "categoryId";
});

const categoryTester = rankWith(5, isCategory);

export const categoryRender = {
  tester: categoryTester,
  renderer: withJsonFormsControlProps((props) => {
    const [list, setList] = React.useState(true);
    const [api, setApi] = React.useState<GenericApi | null>(null);
    const [apiListData, setApiListData] = React.useState<any>([]);
    const apiUrl = "/category";
    React.useEffect(() => {
      if (apiUrl && !api) {
        const apiInstance = makeApi(apiUrl);
        setApi(apiInstance as any);
      }
    }, [apiUrl, api]);

    React.useEffect(() => {
      if (list) {
        api?.getAll?.().then((data: any) => {
          setApiListData(data);
        });
      }
    }, [api, list]);
    return (
      <>
        {apiListData && apiListData.length > 0 ? (
          <select
            onChange={(event) => props.handleChange("category", event.target.value)}
            name="category"
            id="category"
            value={props.data}
          >
            {apiListData.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        ) : (
          <p>Nenhum dado disponível.</p>
        )}
      </>
    );
  }),
};
