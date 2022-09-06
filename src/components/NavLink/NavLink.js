import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { to, text, active } = props;

  return (
    <div>
      <Link to={to} className={active ? "text-purple-700" : "text-green-400"}>
        {text}
      </Link>
    </div>
  );
};

export default NavLink;
