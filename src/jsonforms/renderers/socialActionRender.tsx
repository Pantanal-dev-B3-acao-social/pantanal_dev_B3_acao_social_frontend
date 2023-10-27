import { rankWith, schemaMatches } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import isEmpty from "lodash/isEmpty";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const isSocialAction = schemaMatches((schema) => {
  return !isEmpty(schema) && schema.format === "socialActionId";
});

const socialActionTester = rankWith(5, isSocialAction);

export const socialActionRender = {
  tester: socialActionTester,
  renderer: withJsonFormsControlProps((props) => {
    const [list, setList] = React.useState(true);
    const [api, setApi] = React.useState<GenericApi | null>(null);
    const [apiListData, setApiListData] = React.useState<any>([]);
    const apiUrl = "/social";

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
    console.log(props)
    return (
      <FormControl style={{ width: '100%' }} >
        <InputLabel htmlFor="social-action" style={{ marginTop: '10px' }}>
          Selecione uma Ação Social
        </InputLabel>
        <Select
          onChange={(event) => {
            const selectedValue = event.target.value;
            props.handleChange("socialAction", selectedValue);
          }}
          // value={props.data && props.data.id ? props.data.id : ""}
          value={props.data ? (props.data.id ? props.data.id : props.data) : 'Escolha'}
          inputProps={{
            name: 'social-action',
            id: 'social-action',
          }}
          style={{ width: '100%' }}
        >
          <MenuItem value="">
            <em>Selecione uma Ação Social</em>
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
