import {
  JsonFormsCore,
  JsonSchema,
  UISchemaElement,
  ValidationMode,
} from "@jsonforms/core";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import { makeStyles } from "@mui/styles";
import { Fragment, useEffect, useState } from "react";
import { GenericApi } from "../../api/generic-api";
import Loading from "./Loading";
import { customRenderes } from "../../jsonforms/renderers";

const useStyles = makeStyles({
  demoform: {
    margin: "auto",
    padding: "1rem",
  },
});

export interface JsonFormProps {
  schema: JsonSchema;
  uischema: UISchemaElement;
  data: any;
  onChange: (state: Pick<JsonFormsCore, "data" | "errors">) => void;
  readonly: boolean;
  api: GenericApi | null;
  validationMode: ValidationMode;
}

const JsonForm = ({
  schema,
  uischema,
  data,
  onChange,
  readonly,
  api,
  validationMode,
}: JsonFormProps) => {
  const classes = useStyles();
  const [load, setLoad] = useState(false);

  return (
    <Fragment>
      <div className={classes.demoform}>
        {load && <Loading isLoading={load} />}
        {!load && (
          <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={[...materialRenderers, ...customRenderes]}
            cells={materialCells}
            onChange={onChange}
            readonly={readonly}
            validationMode={validationMode}
          />
        )}
      </div>
    </Fragment>
  );
};

export default JsonForm;
