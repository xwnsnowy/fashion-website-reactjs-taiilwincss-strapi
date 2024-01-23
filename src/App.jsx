import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

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
