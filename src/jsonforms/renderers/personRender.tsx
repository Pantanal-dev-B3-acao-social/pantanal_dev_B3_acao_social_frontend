import { rankWith, schemaMatches } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";

const isPerson = schemaMatches((schema) => {
  return !isEmpty(schema) && schema.format === "personId";
});

const personTester = rankWith(5, isPerson);

export const PersonRender = {
  tester: personTester,
  renderer: withJsonFormsControlProps((props) => {
    const [list, setList] = React.useState(true);
    const [api, setApi] = React.useState<GenericApi | null>(null);
    const [apiListData, setApiListData] = React.useState<any>([]);
    const apiUrl = "/person";
    React.useEffect(() => {
      if (apiUrl && !api) {
        const apiInstance = makeApi(apiUrl);
        setApi(apiInstance as any);
      }
    }, [apiUrl, api]);

    React.useEffect(() => {
      if (list) {
        console.log("oi");
        api?.getAll?.().then((data: any) => {
          setApiListData(data);
        });
      }
    }, [api, list]);
    return (
      <>
        {apiListData && apiListData.length > 0 ? (
          <select
            onChange={(event) => props.handleChange("Person", event.target.value)}
            name="person"
            id="person"
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
