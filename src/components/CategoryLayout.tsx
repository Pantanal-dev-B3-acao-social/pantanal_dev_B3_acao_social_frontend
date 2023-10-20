import { CategorySchema } from "../schema/categorySchema";
import uischema from "../uischemas/categoryUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  codigo: string;
  name: string;
  descricao: string;
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
    id: "code",
    numeric: false,
    disablePadding: false,
    label: "Código",
  },
];

function Category() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Categoria"
      uischema={uischema}
      schema={CategorySchema}
      apiUrl={"/category"}
    ></Crud>
  );
}

export default Category;
