import { JsonSchema, UISchemaElement, ValidationMode } from "@jsonforms/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";
import AlertCustom, { Severity } from "./AlertCustom";
import DataTable from "./DataTable";
import DeleteDialog from "./DeleteDialog";
import JsonForm from "./JsonForm";
import "./crud.css";
import { HeadCell } from "./headCell";
import { NoAccounts } from "@mui/icons-material";

export function Crud<T extends Record<string, any>>({
  headCells,
  checkboxes,
  title,
  uischema,
  schema,
  apiUrl,
  hideDelete,
  hideUpdate,
  hideCreate,
}: CrudProps<T>) {
  const [list, setList] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [id, setId] = React.useState(-1);
  const [errors, setErrors] = React.useState<any>([]);
  const [apiListData, setApiListData] = React.useState<any>([]);
  const [formData, setFormData] = React.useState({});
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [messageAlert, setMessageAlert] = React.useState("");
  const [severityAlert, setSeverityAlert] = React.useState<Severity>(
    Severity.SUCCESS
  );
  const [api, setApi] = React.useState<GenericApi | null>(null);
  const [validationMode, setValidationMode] =
    React.useState<ValidationMode>("ValidateAndHide");

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

  React.useEffect(() => {
    if (!errors.length) {
      setValidationMode("ValidateAndHide");
    }
  }, [errors]);

  async function save() {

    if (errors?.length) {
      console.error(errors)
      setValidationMode("ValidateAndShow");
      return;
    }

    try {
      if (add) {
        // console.log(formData);
        const response = await api?.post?.(formData);
        if (response.status === 201) {
          back();
          showSuccess("Adicionado com sucesso.");
        } else {
          console.error(response);
        }
      } else if (edit) {
        const response = await api?.patch?.(id, formData);
        if (response.status === 200) {
          back();
          showSuccess("Editado com sucesso.");
        } else {
          console.error(response);
        }
      }
    } catch (error) {
      console.error(error);
      showError("Ocorreu um erro.");
    }
  }

  async function destroy() {
    try {
      const response = await api?.delete?.(id);
      if (response.status === 204) {
        setApiListData(apiListData?.filter((doc: any) => doc.id !== id));
        setList(true);
        handleCloseDelete();
        showSuccess("Deletado com sucesso.");
      }
    } catch (error) {
      console.error(error);
      showError("Ocorreu um erro.");
    }
  }

  function back() {
    setList(true);
    setView(false);
    setEdit(false);
    setAdd(false);
    setId(-1);
    setFormData({});
  }

  function select(id: number) {
    api?.get?.(id).then((data: any) => {
      setFormData(data);
    });
    setList(false);
    setEdit(false);
    setAdd(false);
    setView(true);
    setId(id);
  }

  function addView() {
    setList(false);
    setView(false);
    setEdit(false);
    setAdd(true);
  }

  function editView(id: number) {
    api?.get?.(id).then((data: any) => {
      setFormData(data);
    });
    setList(false);
    setView(false);
    setEdit(true);
    setId(id);
  }

  const handleOpenDelete = (id: number) => {
    setId(id);
    setOpenDialog(true);
  };

  const handleCloseDelete = () => {
    setOpenDialog(false);
    setTimeout(() => setId(-1), 100);
  };

  const handleCloseAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const showSuccess = (message: string) => {
    setMessageAlert(message);
    setSeverityAlert(Severity.SUCCESS);
    setOpenAlert(true);
  };

  const showError = (message: string) => {
    setMessageAlert(message);
    setSeverityAlert(Severity.ERROR);
    setOpenAlert(true);
  };

  return (
    <>
      {list && (
        <DataTable
          headCells={headCells}
          rows={apiListData}
          checkboxes={checkboxes}
          title={title}
          viewHandler={select}
          addHandler={addView}
          editHandler={editView}
          deleteHandler={handleOpenDelete}
          hideDelete={hideDelete}
          hideUpdate={hideUpdate}
          hideCreate={hideCreate}
        ></DataTable>
      )}
      {!list && (
        <>
          <JsonForm
            uischema={uischema}
            schema={schema}
            data={formData}
            onChange={({ errors, data }) => {
              if (edit || add) {
                setErrors(errors);
                if (Object.keys(data).length > 0) {
                  setFormData(data);
                }
              }
            }}
            readonly={view}
            api={api}
            validationMode={validationMode}
          ></JsonForm>
          <div className="container">
            <Button className="btn-back" onClick={back}>
              <ArrowBackIcon></ArrowBackIcon>
              Voltar
            </Button>
            {view && !hideUpdate && (
              <Button
                className="btn-edit"
                onClick={() => {
                  setView(!view);
                  setEdit(!edit);
                }}
              >
                <EditIcon></EditIcon>
                Editar
              </Button>
            )}
            {((edit && !hideUpdate) || (add && !hideCreate)) && (
              <Button className="btn-save" onClick={save}>
                <DoneIcon></DoneIcon>
                Salvar
              </Button>
            )}
          </div>
        </>
      )}

      <DeleteDialog
        openDialog={openDialog}
        body={
          <>
            <b>ID:</b> &nbsp; {id}. <br />
            <b>Nome:</b> &nbsp;
            {(apiListData as any)?.find((i: any) => i?.id === id)?.name ||
              "sem nome"}
            .
          </>
        }
        handleCloseDelete={handleCloseDelete}
        destroy={destroy}
      ></DeleteDialog>

      <AlertCustom
        open={openAlert}
        severity={severityAlert}
        message={messageAlert}
        handleClose={handleCloseAlert}
      ></AlertCustom>
    </>
  );
}

type CrudProps<T> = {
  headCells: readonly HeadCell<T>[];
  checkboxes?: boolean;
  title?: string;
  schema: JsonSchema;
  uischema: UISchemaElement;
  apiUrl: string;
  hideDelete?: boolean;
  hideUpdate?: boolean;
  hideCreate?: boolean;
};
