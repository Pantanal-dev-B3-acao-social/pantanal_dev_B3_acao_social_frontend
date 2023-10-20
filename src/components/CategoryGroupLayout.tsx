import { CategoryGroupSchema } from "../jsonForms/schema/categoryGroupSchema";
import uischema from "../jsonForms/uischemas/categoryGroupUiSchema.json";
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
    id: "categoryGroup",
    numeric: false,
    disablePadding: false,
    label: "Grupo",
  },
];

function CategoryGroupLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Category"
      uischema={uischema}
      schema={CategoryGroupSchema}
      apiUrl={"/category-group"}
    ></Crud>
  );
}

export default CategoryGroupLayout;
