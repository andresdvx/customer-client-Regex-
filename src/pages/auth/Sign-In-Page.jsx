import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { adminContext } from "../../context/Admin-Context";
import NavBar from "../../components/NavBar/Nav-Bar";

function SignInPage() {
  const { signIn } = useContext(adminContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: async (values) => {
      await signIn(values).then((data) => {
        console.log(data);
        if (data.status == 200) {
          navigate("/customers");
        }
      });
    },
  });

  return (
    <div className="display">
      <NavBar />
      <main className="main">
        <h2 className="text-2xl text-center mt-3 josefin-sans-font">Sign up</h2>
        <form className="form" id="form" onSubmit={formik.handleSubmit}>
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
            className="px-20 text-white py-1 bg-[#222323] rounded-[3px] mx-auto mb-10"
          >
            Save
          </button>
        </div>
      </main>
    </div>
  );
}

export default SignInPage;
