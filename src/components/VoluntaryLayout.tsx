import uischema from "../uischemas/voluntaryUiSchema.json";
import { voluntarySchema } from "../schema/voluntarySchema";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

const headCells = [
  {
    id: 'person',
    numeric: false,
    disablePadding: false,
    label: 'Pessoa',
  },
  {
    id: 'socialAction',
    numeric: false,
    disablePadding: false,
    label: 'Ação Social',
  },
  {
    id: 'approvedBy',
    numeric: false,
    disablePadding: false,
    label: 'Aprovado Por',
  },
  {
    id: 'approvedDate',
    numeric: false,
    disablePadding: false,
    label: 'Data de Aprovação',
  },
];

function VoluntaryLayout() {
  return (
    <Crud
      headCells={headCells}
      title="Voluntários"
      uischema={uischema}
      schema={voluntarySchema}
      apiUrl="/voluntary" // Endpoint da API para voluntários
    />
  );
}

export default VoluntaryLayout;
