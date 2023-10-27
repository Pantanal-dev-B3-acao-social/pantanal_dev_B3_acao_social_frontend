import uischema from "../jsonforms/uischemas/pcdPersonUiSchema.json";
import { Crud } from "./crud/Crud";
import { pcdPersonSchema } from "../jsonforms/schema/pcdPersonSchema";

interface Data extends Record<string, any> {
  id: string;
  valueMoney: number;
  approvedDate: Date;
}

const headCells = [
  {
    id: "person.name",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "pcd.name",
    numeric: false,
    disablePadding: false,
    label: "Condição",
  },
];

function PcdPersonLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Pessoa Com Deficiência"
      uischema={uischema}
      schema={pcdPersonSchema}
      apiUrl="/pcdPerson" // Endpoint da API para empresas
    />
  );
}

export default PcdPersonLayout;
