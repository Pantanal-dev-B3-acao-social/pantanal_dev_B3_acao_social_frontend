import uischema from "../jsonforms/uischemas/personUiSchema.json";
import { personSchema } from "../jsonforms/schema/personSchema";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  nome: string;
  description: string;
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "dateBirth",
    numeric: false,
    disablePadding: false,
    label: "Data de Nascimento",
  },
  {
    id: "cpf",
    numeric: false,
    disablePadding: false,
    label: "CPF",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
];

function PersonLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Pessoa"
      uischema={uischema}
      schema={personSchema}
      apiUrl="/person"
    />
  );
}

export default PersonLayout;
