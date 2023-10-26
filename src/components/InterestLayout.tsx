import uischema from "../jsonforms/uischemas/investmentUiSchema.json";
import { Crud } from "./crud/Crud";
import { interestSchema } from "../jsonforms/schema/interestSchema";

const headCells = [
  {
    id: "personId",
    numeric: false,
    disablePadding: false,
    label: "Pessoa",
  },
  {
    id: "categoryId",
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
      schema={interestSchema}
      apiUrl="/interest" // Endpoint da API para empresas
    />
  );
}

export default InterestLayout;
