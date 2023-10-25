import uischema from "../jsonforms/uischemas/investmentUiSchema.json";
import { Crud } from "./crud/Crud";
import { investmentSchema } from "../jsonforms/schema/investmentSchema";

const headCells = [
  {
    id: "valueMoney",
    numeric: false,
    disablePadding: false,
    label: "Valor",
  },
  {
    id: "socialActionId",
    numeric: false,
    disablePadding: false,
    label: "Ação social",
  },
  {
    id: "motivation",
    numeric: false,
    disablePadding: false,
    label: "Motivação",
  },
  // TODO: com bug Objects are not valid as a React child (found: object with keys {version, id, userId, name, dateBirth, status, cpf, createdBy, createdDate, lastModifiedBy, lastModifiedDate, deletedDate, deletedBy}). If you meant to render a collection of children, use an array instead. at throwOnInvalidObjectType
  // {
  //   id: "approvedBy",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Aprovado Por",
  // },
  {
    id: "approvedDate",
    numeric: false,
    disablePadding: false,
    label: "Data de Aprovação",
  },
  {
    id: "companyId",
    numeric: false,
    disablePadding: false,
    label: "Empresa",
  },
];

function InvestmentLayout() {
  return (
    <Crud
      headCells={headCells}
      title="Investimentos"
      uischema={uischema}
      schema={investmentSchema}
      apiUrl="/investment" // Endpoint da API para empresas
    />
  );
}

export default InvestmentLayout;
