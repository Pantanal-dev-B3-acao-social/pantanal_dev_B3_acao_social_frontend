import { ContractSchema } from "../jsonforms/schema/contractSchema";
import uischema from "../jsonforms/uischemas/contractUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  codigo: string;
  name: string;
  descricao: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Título",
  },
  {
    id: "company.name",
    numeric: false,
    disablePadding: false,
    label: "Empresa",
  },
  {
    id: "socialAction.name",
    numeric: false,
    disablePadding: false,
    label: "Ação Social",
  },
  {
    id: "ong.name",
    numeric: false,
    disablePadding: false,
    label: "Ong",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Descrição",
  },
  {
    id: "justification",
    numeric: false,
    disablePadding: false,
    label: "Justificação",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
];

function Contract() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Contrato"
      uischema={uischema}
      schema={ContractSchema}
      apiUrl={"/contract"}
    ></Crud>
  );
}

export default Contract;
