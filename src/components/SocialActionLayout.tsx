import { SocialActionSchema } from "../jsonforms/schema/socialActionSchema";
import uischema from "../jsonforms/uischemas/socialActionUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  id: string;
  codigo: string;
  nome: string;
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
    id: "ong.name",
    numeric: false,
    disablePadding: false,
    label: "Ong",
  },
];

function SocialAction() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Ação Social"
      uischema={uischema}
      schema={SocialActionSchema}
      apiUrl={"/social"}
    ></Crud>
  );
}

export default SocialAction;
