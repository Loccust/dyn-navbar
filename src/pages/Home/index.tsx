import { useState } from "react";
import NavBar from "../../components/Navbar";

const Home = () => {

    const [additionalRoutes, setAdditionalRoutes] = useState<string[]>([]);
    const [newRoute, setNewRoute] = useState("");

  return (
    <>
      <NavBar additionalRoutes={additionalRoutes}/>
      <input value={newRoute} onChange={(e) => setNewRoute(e.target.value)}></input>
      <button onClick={() => setAdditionalRoutes([...additionalRoutes, newRoute])}>Add Route</button>
    </>
  );
};
export default Home;
