import { useSelector } from "react-redux";
import { selectUser } from "./authSlice";
import { Link } from "react-router-dom";

const Welcome = () => {
  const user = useSelector(selectUser);

  const welcome = user ? `Welcome ${user}` : `Welcome Guest`;

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>
      <Link to="/home">Home</Link>
    </section>

  )
  return content
}

export default Welcome;