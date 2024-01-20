import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ScrollToTop>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = route.Layout || DefaultLayout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
