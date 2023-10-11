import { SectionSchema } from "../schema/sectionSchema";
import uischema from "../uischemas/sectionUiSchema.json";
import { Crud } from "./crud/Crud";
import { HeadCell } from "./crud/headCell";

interface Data extends Record<string, any> {
  id: number;
  nome: string;
  descricao: string;
  dateStartTime: string;
  dateEndTime: string;
  status: boolean;
  visibility: boolean;
}

const headCells: readonly HeadCell<Data>[] = [
  {
    id: "descricao",
    numeric: false,
    disablePadding: false,
    label: "Descrição",
  },
  {
    id: "dateStartTime",
    numeric: false,
    disablePadding: false,
    label: "DataInício",
  },
  {
    id: "dateEndTime",
    numeric: false,
    disablePadding: false,
    label: "DataFinal",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
];

function Section() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Sessão"
      uischema={uischema}
      schema={SectionSchema}
      apiUrl={"/v1/session"}
    ></Crud>
  );
}

export default Section;
