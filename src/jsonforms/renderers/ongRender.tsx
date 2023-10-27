import { rankWith, schemaMatches } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const isOng = schemaMatches((schema) => {
  return !isEmpty(schema) && schema.format === "ongId";
});

const ongTester = rankWith(5, isOng);

export const ongRender = {
  tester: ongTester,
  renderer: withJsonFormsControlProps((props) => {
    const [list, setList] = React.useState(true);
    const [api, setApi] = React.useState<GenericApi | null>(null);
    const [apiListData, setApiListData] = React.useState<any>([]);
    const apiUrl = "/ong";
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
      <FormControl style={{ width: '100%', marginTop: '10px' }} >
        <InputLabel htmlFor="social-action" style={{ marginTop: '10px' }}>
          Selecione uma Ong
        </InputLabel>
        <Select
          onChange={(event) => {
            props.handleChange("parentCategoryGroup", event.target.value);
          }}
          value={props.data ? (props.data.id ? props.data.id : props.data) : 'Escolha'}
          inputProps={{
            name: 'social-action',
            id: 'social-action',
          }}
          style={{ width: '100%' }}
        >
          <MenuItem value="">
            <em>Selecione um grupo</em>
          </MenuItem>
          {apiListData.map((item: any) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl >
    );
  }),
};