import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/NotFound";
import UserLayout from "./components/UserLayout";
import CategoryGroupLayout from "./components/CategoryGroupLayout";
import VoluntaryLayout from "./components/VoluntaryLayout";
import CompanyLayout from "./components/CompanyLayout";
import Login from "./components/login/Login";

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
                <Route path="/login" element={<Login />}/>
                <Route path="/usuario" element={<UserLayout />} />
                <Route path="/voluntario" element={<VoluntaryLayout />} />
                <Route path="/empresa" element={<CompanyLayout />} />
                <Route
                  path="/grupo-categoria"
                  element={<CategoryGroupLayout />}
                />
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
