import { rankWith, schemaMatches } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const isCategoryGroup = schemaMatches((schema) => {
  return !isEmpty(schema) && schema.format === "categoryGroupForCategoryId";
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
    return (
      <FormControl style={{ width: '100%' }} >
        <InputLabel htmlFor="social-action" style={{ marginTop: '10px' }}>
          Selecione um Grupo de Categoria
        </InputLabel>
        {/* {apiListData && apiListData.length > 0 ? ( */}
        <Select
          onChange={(event) => {
            props.handleChange("categoryGroup", event.target.value);
          }}
          name="group-category"
          id="group-category"
          value={props.data ? (props.data.id ? props.data.id : props.data) : 'Escolha'}
        >
          <MenuItem value="">
            <em>Selecione uma opção</em>
          </MenuItem>
          {apiListData.map((item: any) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }),
};
