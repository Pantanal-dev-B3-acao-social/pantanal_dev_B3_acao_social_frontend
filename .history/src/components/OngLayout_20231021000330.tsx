import uischema from "../jsonforms/uischemas/ongUiSchema.json";
import { OngSchema } from "../jsonforms/schema/ongSchema";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  id: number;
  name: string;
  cnpj: string;
  status: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "cnpj",
    numeric: false,
    disablePadding: false,
    label: "Cnpj",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
];

function OngLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Ong"
      uischema={uischema}
      schema={OngSchema}
      apiUrl={"/ong"}
    ></Crud>
  );
}

export default OngLayout;
