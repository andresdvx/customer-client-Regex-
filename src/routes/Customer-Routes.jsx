import { Routes as Router, Route } from "react-router-dom";
import CustomersPage from "../pages/customerPage/Customers-page";
import FormCustomer from "../pages/formCustomer/Form-Customer-Page";
import HomePage from "../pages/Home-Page";
import SignUpPage from "../pages/auth/Sign-Up-Page";
import SignInPage from "../pages/auth/Sign-In-Page";
import ProtectedRoutes from "../helpers/Protected-Routes";
function Routes() {
  return (
    <Router>
      <Route path="/"></Route>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
      <Route path="/sign-in" element={<SignInPage />}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/customers" element={<CustomersPage />}></Route>
        <Route path="/create" element={<FormCustomer />}></Route>
      </Route>
    </Router>
  );
}

export default Routes;
