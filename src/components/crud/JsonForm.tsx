import { JsonFormsCore, JsonSchema, UISchemaElement } from "@jsonforms/core";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import { makeStyles } from "@mui/styles";
import { Fragment, useEffect, useState } from "react";
import { GenericApi } from "../../api/generic-api";

const useStyles = makeStyles({
  demoform: {
    margin: "auto",
    padding: "1rem",
  },
});

export interface JsonFormProps {
  uischema: UISchemaElement;
  schema: JsonSchema;
  data: any;
  onChange: (state: Pick<JsonFormsCore, "data" | "errors">) => void;
  readonly: boolean;
  api: GenericApi | null;
}

const JsonForm = ({
  uischema,
  schema,
  data,
  onChange,
  readonly,
  api,
}: JsonFormProps) => {
  const classes = useStyles();
  // const [schema, setSchema] = useState<JsonSchema>({});

  // useEffect(() => {
  //   api?.getSchema?.().then((schema) => {
  //     setSchema(schema);
  //   });
  // }, [api]);

  return (
    <Fragment>
      <div className={classes.demoform}>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={onChange}
          readonly={readonly}
        />
      </div>
    </Fragment>
  );
};

export default JsonForm;
