import { PresenceSchema } from "../jsonforms/schema/presenceSchema";
import uischema from "../jsonforms/uischemas/presenceUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  codigo: string;
  name: string;
  descricao: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Descrição",
  },
  {
    id: "presenceGroup.name",
    numeric: false,
    disablePadding: false,
    label: "Grupo",
  },
];

function Presence() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Categoria"
      uischema={uischema}
      schema={PresenceSchema}
      apiUrl={"/presence"}
    ></Crud>
  );
}

export default Presence;
