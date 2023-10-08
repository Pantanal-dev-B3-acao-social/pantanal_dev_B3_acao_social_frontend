import uischema from '../uischemas/usuario.json';
import { Crud } from "./crud/Crud";
import { HeadCell } from './crud/headCell';

interface Data extends Record<string, any> {
  id: number;
  nome: string;
  email: string;
  cpf: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'ID',
  },
  {
    id: 'nome',
    numeric: false,
    disablePadding: false,
    label: 'Nome',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'email',
  },
];

function Usuario() {
  return (
    <Crud<Data>
      headCells={headCells}
      title='Usuário'
      uischema={uischema}
      apiUrl={'/usuario'}
    ></Crud>
  )
}

export default Usuario;
