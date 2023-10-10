import uischema from "../uischemas/ongUiSchema.json";
import { OngSchema } from "../schema/ongSchema";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  id: number;
  nome: string;
  cnpj: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "nome",
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
