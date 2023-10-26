import uischema from "../jsonforms/uischemas/interestUiSchema.json";
import { Crud } from "./crud/Crud";
import { interestSchema } from "../jsonforms/schema/interestSchema";

const headCells = [
  {
    id: "person.name",
    numeric: false,
    disablePadding: false,
    label: "Pessoa",
  },
  {
    id: "category.name",
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
