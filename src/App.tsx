import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/NotFound";
import UserLayout from "./components/UserLayout";
import CategoryGroupLayout from "./components/CategoryGroupLayout";
import InvestmentLayout from "./components/InvestmentLayout";


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
                <Route path="/usuario" element={<UserLayout />} />
                <Route path="/investimento" element={<InvestmentLayout />} />
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
