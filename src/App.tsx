import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banco from "./components/Banco";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/NotFound";
import Usuario from "./components/Usuario";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/banco" element={<Banco />} />
                <Route path="/usuario" element={<Usuario />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
