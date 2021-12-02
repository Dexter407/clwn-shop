import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Directory from "./components/directory/directory.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  useParams,
  useResolvedPath,
  useLocation,
} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = (props) => {
  console.log(props);
  let navigate = useNavigate();

  return (
    <div>
      <h1>HATS Page</h1>
      <Routes></Routes>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/hats/1">Topic1</Link>
        <Link to="/hats/2">Topic2</Link>
        {/* <Link to={`${props.match.url}/1`}>Topic1</Link>
        <Link to={`${props.match.url}/2`}>Topic2</Link>
        <Link to={`${props.match.url}/3`}>Topic3</Link>
        <Link to={`${props.match.url}/4`}>Topic4</Link> */}
      </nav>
      <div>
        <button onClick={() => navigate("/")}>Click Here</button>
      </div>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  let params = useParams();
  return (
    <div>
      <h1>Topic Detail {params.topicId}</h1>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Directory />}></Route>
        <Route exact path="/shop" element={<ShopPage />}></Route>
        <Route exact path="/signin" element={<SignInAndSignUp />}></Route>
        <Route exact path="/hats" element={<HatsPage />}></Route>
        <Route path="hats/:topicId" element={<TopicDetail />} />
      </Routes>
    </div>
  );
}

export default App;
