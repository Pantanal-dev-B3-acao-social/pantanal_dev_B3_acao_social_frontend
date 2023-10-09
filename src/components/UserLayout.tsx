import uischema from "../uischemas/userUiSchema.json";
import { UserSchema } from "../schema/userSchema";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  id: number;
  nome: string;
  email: string;
  cpf: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "nome",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "email",
  },
];

function UserLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Usuário"
      uischema={uischema}
      schema={UserSchema}
      apiUrl={"/usuario"}
    ></Crud>
  );
}

export default UserLayout;
