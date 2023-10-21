import uischema from "../jsonforms/uischemas/userUiSchema.json";
import { UserSchema } from "../jsonforms/schema/userSchema";
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
    id: "username",
    numeric: false,
    disablePadding: false,
    label: "Username",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "e-mail",
  },
  {
    id: "cpf",
    numeric: false,
    disablePadding: false,
    label: "CPF",
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
