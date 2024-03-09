import { BrowserRouter } from "react-router-dom";
import { CustomerContext } from "./context/Customer-Context";
import { AdminContext } from "./context/Admin-Context";
import Routes from "./routes/Customer-Routes";

function App() {
  return (
    <AdminContext>
      <CustomerContext>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CustomerContext>
    </AdminContext>
  );
}

export default App;
