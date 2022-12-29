import { Link } from "react-router-dom";

interface INavBarProps {
  additionalRoutes?: string[]
}
const NavBar = ({additionalRoutes = []}:INavBarProps) => {
  console.log(additionalRoutes)
  const defaultRoutes = [
    {
      path: "/",
      text: "Home"
    },
    {
      path: "/about",
      text: "About"
    },
    {
      path: "/contact",
      text: "Contact"
    }
  ];
  return (
    <div className="navbar">
      {[...defaultRoutes, ...additionalRoutes].map((route: any, idx: number) => (
        <Link key={idx} to={route.path}>{route.text}</Link>
      ))}
    </div>
  );
};
export default NavBar;
