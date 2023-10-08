import uischema from '../uischemas/banco.json';
import { Crud } from "./crud/Crud";
import { HeadCell } from './crud/headCell';

interface Data extends Record<string, any> {
  id: number;
  codigo: string;
  nome: string;
  ativo: boolean;
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
    id: 'codigo',
    numeric: false,
    disablePadding: false,
    label: 'Código',
  },
];

function Banco() {
  return (
    <Crud<Data>
      headCells={headCells}
      title='Banco'
      uischema={uischema}
      apiUrl={'/banco'}
    ></Crud>
  )
}

export default Banco;
