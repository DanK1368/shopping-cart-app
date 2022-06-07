import "./Home.scss";
import { Link } from "react-router-dom";
import Transitions from "../../components/Transition";

function Home() {
  return (
    <Transitions>
      <main className="main">
        <div className="main__container">
          <h1>Welcome to the T-shirt Store</h1>
          <Link to="products">
            <button className="main__btn">Check Out Our Store</button>
          </Link>
        </div>
      </main>
    </Transitions>
  );
}
export default Home;
