import { rankWith, schemaMatches } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";

const isCategoryGroup = schemaMatches((schema) => {
  return !isEmpty(schema) && schema.format === "parentCategoryGroupId";
});

const categoryGroupTester = rankWith(5, isCategoryGroup);

export const categoryGroupRender = {
  tester: categoryGroupTester,
  renderer: withJsonFormsControlProps((props) => {
    const [list, setList] = React.useState(true);
    const [api, setApi] = React.useState<GenericApi | null>(null);
    const [apiListData, setApiListData] = React.useState<any>([]);
    const apiUrl = "/category-group";
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

    console.log(props.data)
    // React.useEffect(() => {
    //   console.log(props.data ? (props.data.id ? props.data.id : props.data) : 'Escolha')
    //   if (props.data) {
    //     props.handleChange("parentCategoryGroup", props.data ? (props.data.id ? props.data.id : props.data) : 'Escolha');
    //   }
    // }, []);

    return (
      <>
        {apiListData && apiListData.length > 0 ? (
          <select
            onChange={(event) => {
              console.log(event.target.value);
              // console.log(props)
              props.handleChange("parentCategoryGroup", event.target.value);
            }}
            name="group-category"    // quero ver oque ele ta colocando aqui como valor inicial, antes nao dava esse erro, nao faz sentido esse
            value={props.data ? (props.data.id ? props.data.id : props.data) : 'Escolha'}
          >
            <option value="">Selecione uma opção</option>
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
