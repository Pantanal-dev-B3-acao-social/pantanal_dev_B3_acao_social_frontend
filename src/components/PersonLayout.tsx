import uischema from "../jsonForms/uischemas/personUiSchema.json";
import { personSchema } from "../jsonForms/schema/personSchema";
import { Crud } from "./crud/Crud";
import { HeadCell } from './crud/headCell';

const headCells = [

  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Nome',
  },
  {
    id: 'dateBirth',
    numeric: false,
    disablePadding: false,
    label: 'Data de Nascimento',
  },
  {
    id: 'cpf',
    numeric: false,
    disablePadding: false,
    label: 'CPF',
  },
];

function PersonLayout() {
  return (
    <Crud
      headCells={headCells}
      title="Pessoa"
      uischema={uischema}
      schema={personSchema}
      apiUrl="/person"  // Endpoint da API para pessoas
    />
  );
}

export default PersonLayout;
