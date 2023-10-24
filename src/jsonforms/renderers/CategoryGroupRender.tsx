import { rankWith, schemaMatches } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";

const isCategoryGroup = schemaMatches((schema) => {
  return !isEmpty(schema) && schema.format === "categoryGroupId";
});

const categoryGroupTester = rankWith(5, isCategoryGroup);
export const categoryGroupRender = {
  tester: categoryGroupTester,
  renderer: withJsonFormsControlProps((props) => {
    // const { handleChange } = props.handleChange;
    // console.log(props);
    // console.log(handleChange);
    // const [selectedGroup, setSelectedGroup] = React.useState();
    // const handleChangeSelect = (event: any) => {
    //   setSelectedGroup(event.target.value);
    // };

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
    // console.log(selectedGroup);
    // console.log(apiListData);
    return (
      <>
        {apiListData && apiListData.length > 0 ? (
          <select
            // onChange={(value) => props.handleChange(props.path, value)}
            onChange={(value) => props.handleChange("group-category", value)}
            // onChange={handleChangeSelect}
            // onChange={handleChange}
            name="group-category"
            id="group-category"
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
