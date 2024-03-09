import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import NavBar from "../../components/NavBar/Nav-Bar";
import { useContext, useRef } from "react";
import { customerContext } from "../../context/Customer-Context";
import "./form-customer.css";
function FormCustomer() {
  const { createCustomer, message } = useContext(customerContext);
  const msj = useRef(null);
  const formik = useFormik({
    initialValues: {
      idNumber: "",
      firstName: "",
      lastName: "",
      typeId: "",
      birthDate: "",
      email: "",
      telephone: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      await createCustomer(values).then((data) => console.log(data));
    },
  });

  const showToast = (message) => {
    msj.current = message;
    console.log(msj.current);
    if (msj.current) toast(msj.current, { duration: 1800 });
    msj.current = null;
    toast.dismiss();
  };

  return (
    <div className="display">
      <NavBar />
      <main className="main">
        <h2 className="text-2xl text-center mt-3 josefin-sans-font">
          Register Customer
        </h2>
        <form className="form" onSubmit={formik.handleSubmit}>
          <section id="form-1">
            <div>
              <label htmlFor="idNumber" className="josefin-sans-font  mb-1">
                Identification
              </label>
              <input
                type="text"
                name="idNumber"
                id="idNumber"
                onChange={formik.handleChange}
                value={formik.values.idNumber}
              />
            </div>
            <div>
              <label htmlFor="firstName" className="josefin-sans-font  mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="josefin-sans-font mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </div>
            <div>
              <label htmlFor="typeId" className="josefin-sans-font  mb-1">
                Type Id
              </label>
              <select
                name="typeId"
                id="typeId"
                onChange={formik.handleChange}
                value={formik.values.typeId}
              >
                <option value="TI">TI</option>
                <option value="CC">CC</option>
                <option value="RC">RC</option>
              </select>
            </div>
          </section>
          <section id="form-2">
            <div>
              <label htmlFor="email" className="josefin-sans-font mb-1">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div>
              <label htmlFor="telephone" className="josefin-sans-font mb-1">
                Telephone
              </label>
              <input
                type="text"
                name="telephone"
                id="telephone"
                onChange={formik.handleChange}
                value={formik.values.telephone}
              />
            </div>
            <div>
              <label htmlFor="birthDate" className="josefin-sans-font  mb-1">
                Birth Date
              </label>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                onChange={formik.handleChange}
                value={formik.values.birthDate}
              />
            </div>
            <div>
              <button
                type="submit"
                onDoubleClick={() => {
                  toast.dismiss();
                }}
                className="px-20 text-white py-1 bg-[#222323] rounded-[3px]"
              >
                Save
              </button>
            </div>
          </section>
        </form>
      </main>
      {showToast(message)}
      <Toaster position="bottom-right" className="absolute z-10" expand />
    </div>
  );
}

export default FormCustomer;
