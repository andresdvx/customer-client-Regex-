import { useContext } from "react";
import NavBar from "../components/NavBar/Nav-Bar";
import { adminContext } from "../context/Admin-Context";
function HomePage() {
  const { admin } = useContext(adminContext);
  return (
    <div className="">
      <NavBar />
      Home
      {admin && JSON.stringify(admin)}
    </div>
  );
}

export default HomePage;
