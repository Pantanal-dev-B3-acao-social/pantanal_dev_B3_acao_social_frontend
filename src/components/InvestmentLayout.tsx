import uischema from "../uischemas/investmentUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";
import { investmentSchema } from "../schema/investmentSchema";

const headCells = [
  
  {
    id: 'value',
    numeric: false,
    disablePadding: false,
    label: 'Valor',
  },
  
  {
    id: 'motivation',
    numeric: false,
    disablePadding: false,
    label: 'Motivação',
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
  {
    id: 'company',
    numeric: false,
    disablePadding: false,
    label: 'Empresa',
  },
];

function InvestmentLayout() {
  return (
    <Crud
      headCells={headCells}
      title="Investimentos"
      uischema={uischema}
      schema={investmentSchema}
      apiUrl="/investment"  // Endpoint da API para empresas
    />
  );
}

export default InvestmentLayout;
