import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homePage/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/layout/NotFound";
import UserLayout from "./components/UserLayout";
import VoluntaryLayout from "./components/VoluntaryLayout";
import InvestmentLayout from "./components/InvestmentLayout";
import CompanyLayout from "./components/CompanyLayout";
import PersonLayout from "./components/PersonLayout";
import CategoryGroupLayout from "./components/CategoryGroupLayout";
import OngLayout from "./components/OngLayout";
import CategoryLayout from "./components/CategoryLayout";
import SocialActionLayout from "./components/SocialActionLayout";
import SectionLayout from "./components/SectionLayout";
import Login from "./components/login/Login";
import InterestLayout from "./components/InterestLayout";
import ContractLayout from "./components/ContractLayout";
import PresenceLayout from "./components/PresenceLayout";
import { useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                {isAuthenticated ? (
                  <>
                    <Route path="/usuario" element={<UserLayout />} />
                    <Route path="/voluntario" element={<VoluntaryLayout />} />
                    <Route path="/investimento" element={<InvestmentLayout />} />
                    <Route path="/empresa" element={<CompanyLayout />} />
                    <Route path="/pessoa" element={<PersonLayout />} />
                    <Route path="/grupo-categoria" element={<CategoryGroupLayout />} />
                    <Route path="/categoria" element={<CategoryLayout />} />
                    <Route path="/ong" element={<OngLayout />} />
                    <Route path="/interest" element={<InterestLayout />} />
                    <Route path="/acao-social" element={<SocialActionLayout />} />
                    <Route path="/presenca" element={<PresenceLayout />} />
                    <Route path="/sessao" element={<SectionLayout />} />
                    <Route path="/contract" element={<ContractLayout />} />
                  </>
                ) : null}
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
