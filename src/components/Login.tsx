import { LoginSchema } from "../schema/loginSchema"
import uischema from "../uischemas/login.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any>{
  username: string,
  password: string
}

const headCells: HeadCell<Data>[] = [
  {
    id: "username",
    numeric: false,
    disablePadding:false,
    label: "Username"
  },
  {
    id: "password",
    numeric: false,
    disablePadding:false,
    label: "Password"
  }
];

function Login() {
  return (
    <Crud<Data>
      headCells={headCells}
      title= "Login"
      uischema={uischema}
      schema={LoginSchema}
      apiUrl={"/v1/auth/login"}
    ></Crud>
  );
}

export default Login;