import { useFormik } from "formik";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import NavBar from "../../components/NavBar/Nav-Bar";
import { adminContext } from "../../context/Admin-Context";
import "./signUp.css";
function SignUpPage() {
  const { signUp, message } = useContext(adminContext);
  const navigate = useNavigate();
  const msj = useRef(null);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      user: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await signUp(values).then((data) => {
        if (data.status == 201) {
          navigate("/customers");
        }
      });
    },
  });

  const showToast = (message) => {
    msj.current = message;
    if (msj.current) toast(msj.current, { duration: 1800 });
    msj.current = null;
    toast.dismiss();
  };

  return (
    <div className="display">
      <NavBar />
      <main className="main">
        <h2 className="text-2xl text-center mt-3 josefin-sans-font">Sign up</h2>
        <form className="form" id="form" onSubmit={formik.handleSubmit}>
          <section id="form-1">
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
          </section>
          <section id="form-2">
            <div>
              <label htmlFor="user" className="josefin-sans-font mb-1">
                User
              </label>
              <input
                type="text"
                name="user"
                id="user"
                onChange={formik.handleChange}
                value={formik.values.user}
              />
            </div>
            <div>
              <label htmlFor="Password" className="josefin-sans-font mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
          </section>
        </form>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            form="form"
            onDoubleClick={() => {
              toast.dismiss();
            }}
            className="px-20 text-white py-1 bg-[#222323] rounded-[3px] mx-auto mb-10"
          >
            Save
          </button>
        </div>
      </main>
      {showToast(message)}
      <Toaster position="bottom-right" className="absolute z-10" />
    </div>
  );
}

export default SignUpPage;
