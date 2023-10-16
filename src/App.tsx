import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/NotFound";
import UserLayout from "./components/UserLayout";
import CategoryGroupLayout from "./components/CategoryGroupLayout";
import CompanyLayout from "./components/CompanyLayout";
import Login from "./components/login/Login";
import SectionLayout from "./components/SectionLayout";

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
                <Route path="/login" element={<Login />} />
                <Route path="/usuario" element={<UserLayout />} />
                <Route path="/empresa" element={<CompanyLayout />} />
                <Route
                  path="/grupo-categoria"
                  element={<CategoryGroupLayout />}
                />
                <Route path="/section" element={<SectionLayout />} />
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
