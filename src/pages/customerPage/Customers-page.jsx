import { useContext, useEffect, useState } from "react";
import { customerContext } from "../../context/Customer-Context";
import NavBar from "../../components/NavBar/Nav-Bar";
import CustomerCard from "../../components/CustomerCard/Customer-Card";
function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const { getCustomers } = useContext(customerContext);
  useEffect(() => {
    getCustomers().then((customer) => {
      setCustomers(customer.data);
    });
  }, []);
  return (
    <div>
      <NavBar />
      {JSON.stringify(customers)}
      {/* {customers &&
        customers.map((customer) => {
          return <CustomerCard key={customer.id} customer={customer} />;
        })} */}
    </div>
  );
}

export default CustomersPage;
