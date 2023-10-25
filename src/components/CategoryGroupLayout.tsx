import { CategoryGroupSchema } from "../jsonforms/schema/categoryGroupSchema";
import uischema from "../jsonforms/uischemas/categoryGroupUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  nome: string;
  description: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Descrição",
  },
  {
    id: "parentCategoryGroupId",
    numeric: false,
    disablePadding: false,
    label: "Grupo",
  },
];

function CategoryGroupLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Grupo de categoria"
      uischema={uischema}
      schema={CategoryGroupSchema}
      apiUrl={"/category-group"}
    ></Crud>
  );
}

export default CategoryGroupLayout;
