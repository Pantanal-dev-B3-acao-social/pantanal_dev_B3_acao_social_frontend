
import { companySchema } from '../schema/companySchema';
import uischema from '../uischemas/companyUiSchema.json';  // Certifique-se de importar o arquivo correto
  // Certifique-se de importar o esquema correto
import { Crud } from './crud/Crud';
import { HeadCell } from './crud/headCell';

interface Data extends Record<string, any> {
  id: number;
  name: string;
  description: string;
  cnpj: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'ID',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Nome',
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Descrição',
  },
  {
    id: 'cnpj',
    numeric: false,
    disablePadding: false,
    label: 'CNPJ',
  },
];

function CompanyLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Empresa"
      uischema={uischema}
      schema={companySchema}
      apiUrl="/v1/empresa"
    />
  );
}

export default CompanyLayout;
