import uischema from "../uischemas/userUiSchema.json";
import { UserSchema } from "../schema/userSchema";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  enable: boolean;
  email: string;
  cpf: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "First Name",
  },
  {
    id: "lastName",
    numeric: false,
    disablePadding: false,
    label: "Last Name",
  },
  {
    id: "cpf",
    numeric: false,
    disablePadding: false,
    label: "CPF",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "e-mail",
  },
];

function UserLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Usuário"
      uischema={uischema}
      schema={UserSchema}
      apiUrl={"/user"}
    ></Crud>
  );
}

export default UserLayout;
