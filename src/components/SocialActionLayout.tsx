import { SocialActionSchema } from "../schema/socialActionSchema";
import uischema from "../uischemas/socialActionUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  id: number;
  codigo: string;
  nome: string;
  descricao: string;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "nome",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "descricao",
    numeric: false,
    disablePadding: false,
    label: "Descrição",
  },
];

function SocialAction() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Ação Social"
      uischema={uischema}
      schema={SocialActionSchema}
      apiUrl={"/socialAction"}
    ></Crud>
  );
}

export default SocialAction;
