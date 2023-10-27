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
    id: "person.name",
    numeric: false,
    disablePadding: false,
    label: "Pessoa",
  },
  {
    id: "session.id",
    numeric: false,
    disablePadding: false,
    label: "sessão",
  },
  {
    id: "approvedBy.name",
    numeric: false,
    disablePadding: false,
    label: "Aprovado por",
  },
  {
    id: "approvedDate",
    numeric: false,
    disablePadding: false,
    label: "Aprovado em",
  },

];

function Presence() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Presenças"
      uischema={uischema}
      schema={PresenceSchema}
      apiUrl={"/presence"}
    ></Crud>
  );
}

export default Presence;
