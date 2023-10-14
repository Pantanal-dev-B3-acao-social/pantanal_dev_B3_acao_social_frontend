import { JsonSchema, UISchemaElement } from "@jsonforms/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { GenericApi, makeApi } from "../../api/generic-api";
import DataTable   from "./DataTable";
import JsonForm from "./JsonForm";
import "./crud.css";
import { HeadCell } from "./headCell";

export function Crud<T extends Record<string, any>>({
  headCells,
  checkboxes,
  title,
  uischema,
  schema,
  apiUrl,
  hideDelete,
}: CrudProps<T>) {
  const [list, setList] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [view, setView] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [id, setId] = React.useState(-1);
  const [apiData, setApiData] = React.useState(null);
  const [apiListData, setApiListData] = React.useState<any>([]);
  const [formData, setFormData] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [api, setApi] = React.useState<GenericApi | null>(null);

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
    if ((view || edit) && id !== -1) {
      api?.get?.(id).then((data: any) => {
        setApiData(data);
      });
    }
  }, [api, view, edit, id]);

  async function save() {
    if (add) {
      const response = await api?.post?.(formData);
      if (response.status === 201) {
        setList(true);
      }
    } else if (edit) {
      const response = await api?.put?.(id, formData);
      if (response.status === 200) {
        setList(true);
      }
    }
  }

  async function destroy() {
  const response = await api?.delete?.(id);
  console.log('Response from API:', response);
  if (response.status === 200) {
    setApiListData(apiListData?.filter((doc: any) => doc.id !== id));
    setList(true);
    handleCloseDelete();
  }
}


  function back() {
    setList(true);
    setView(false);
    setEdit(false);
    setId(-1);
    setFormData(null);
    setApiData(null);
  }

  function select(id: number) {
    setList(false);
    setView(true);
    setEdit(false);
    setId(id);
  }

  function addView() {
    setList(false);
    setView(false);
    setEdit(false);
    setAdd(true);
  }

  function editView(id: number) {
    setList(false);
    setView(false);
    setEdit(true);
    setId(id);
  }

  const handleOpenDelete = (id: number) => {
  const fileName = (apiListData as any)?.find((i: any) => i?.id === id)?.name;
  setId(id);
  setOpen(true);
};

  const handleCloseDelete = () => {
    setOpen(false);
    setTimeout(() => setId(-1), 100);
  };

  return (
    <>
      {list && (
        <DataTable
          headCells={headCells}
          rows={apiListData}
          checkboxes={checkboxes}
          title={title}
          selectHandler={select}
          addHandler={addView}
          editHandler={editView}
          deleteHandler={handleOpenDelete}
          hideDelete={hideDelete}
        ></DataTable>
      )}
      {!list && (
        <>
          <JsonForm
            uischema={uischema}
            schema={schema}
            data={apiData}
            onChange={({ errors, data }) => setFormData(data)}
            readonly={view}
            api={api}
          ></JsonForm>
          <div className="container">
            <Button className="btn-back" onClick={back}>
              <ArrowBackIcon></ArrowBackIcon>
              Voltar
            </Button>
            {view && (
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
            <Button className="btn-save" onClick={save}>
              <DoneIcon></DoneIcon>
              Salvar
            </Button>
          </div>
        </>
      )}
      <Dialog
        open={open}
        keepMounted
        onClose={handleCloseDelete}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Deseja realmente apagar este item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Nome: {(apiListData as any)?.find((i: any) => i?.id === id)?.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button className="btn-cancel-delete" onClick={handleCloseDelete}>
            Cancelar
          </Button>
          <Button className="btn-confirm-delete" onClick={destroy}>
            Sim, tenho certeza
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

type CrudProps<T> = {
  headCells: readonly HeadCell<T>[];
  checkboxes?: boolean;
  title?: string;
  uischema: UISchemaElement;
  schema: JsonSchema;
  apiUrl: string;
  hideDelete?: boolean;
};