import uischema from "../jsonforms/uischemas/pcdUiSchema.json";
import { Crud } from "./crud/Crud";
import { pcdSchema } from "../jsonforms/schema/pcdSchema";

interface Data extends Record<string, any> {
  id: string;
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nome",
  },
  {
    id: "observation",
    numeric: false,
    disablePadding: false,
    label: "Observação",
  },
  {
    id: "code",
    numeric: false,
    disablePadding: false,
    label: "Código",
  },
  {
    id: "acronym",
    numeric: false,
    disablePadding: false,
    label: "Sigla",
  },


];

function PcdLayout() {
  return (
    <Crud<Data>
      headCells={headCells}
      title="Condição"
      uischema={uischema}
      schema={pcdSchema}
      apiUrl="/pcd" // Endpoint da API para empresas
    />
  );
}

export default PcdLayout;
