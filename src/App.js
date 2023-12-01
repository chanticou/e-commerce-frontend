import { NavBar } from "./components/NavBar";
import { useState, useEffect } from "react";
import { ProductDetail } from "./components/ProductDetail/index";
import { Cart } from "./components/Cart/index";
import { Routes, Route } from "react-router-dom";
import { ContentProducts } from "./components/ContentProducts";
import { CarrouselImages } from "./components/Carrousel/index";
import { SignIn } from "./components/SignIn";
import { Banner } from "./components/Banner";
import { Dashboard } from "./components/Dashboard";
import { WhatsAppLink } from "./components/WhatsApp";
import { Footer } from "./components/Footer";
import { Spinner } from "./components/Spinner";
import { TicketDetail } from "./components/TicketDetail";
import { PaymentApproved } from "./components/PaymentApproved";
import { PaymentFailure } from "./components/PaymentFailure";
import { TechnicalSupport } from "./components/TechnicalSupport";
import { TermsAndConditions } from "./components/TermsAndConditions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [showSpinner, setShowSpinner] = useState(true); // Establecer inicialmente a true para mostrar el spinner primero

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSpinner ? (
        <Spinner />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CarrouselImages />
                  <Banner />
                  <ContentProducts />
                </>
              }
            />
            <Route
              path="/productDetail/:id_product"
              element={<ProductDetail />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ticketDetail" element={<TicketDetail />} />
            <Route path="/approved" element={<PaymentApproved />} />
            <Route path="/failure" element={<PaymentFailure />} />
            <Route path="/TechnicalSupport" element={<TechnicalSupport />} />
            {/* <Route
              path="/termsAndConditions"
              element={<TermsAndConditions />}
            /> */}
          </Routes>
          <WhatsAppLink />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
