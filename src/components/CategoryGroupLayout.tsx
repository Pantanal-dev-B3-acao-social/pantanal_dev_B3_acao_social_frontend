import { CategoryGroupSchema } from "../schema/categoryGroupSchema";
import uischema from "../uischemas/categoryUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  id: number;
  codigo: string;
  nome: string;
  ativo: boolean;
}

const headCells: readonly HeadCell<Data>[] = [
  // {
  //   id: "id",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "ID",
  // },
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
];

function CategoryGroupLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Category"
      uischema={uischema}
      schema={CategoryGroupSchema}
      apiUrl={"/v1/category-group"}
    ></Crud>
  );
}

export default CategoryGroupLayout;
