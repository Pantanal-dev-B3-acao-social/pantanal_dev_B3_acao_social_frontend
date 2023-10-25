import uischema from "../jsonforms/uischemas/investmentUiSchema.json";
import { Crud } from "./crud/Crud";
import { investmentSchema } from "../jsonforms/schema/investmentSchema";

const headCells = [
  {
    id: "person",
    numeric: false,
    disablePadding: false,
    label: "Pessoa",
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Categoria",
  },
];

function InterestLayout() {
  return (
    <Crud
      headCells={headCells}
      title="Interesse"
      uischema={uischema}
      schema={investmentSchema}
      apiUrl="/interest" // Endpoint da API para empresas
    />
  );
}

export default InterestLayout;
