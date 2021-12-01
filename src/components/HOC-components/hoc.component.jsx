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

export function withRouter( Child ) {
  return ( props ) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Child { ...props } navigate={ navigate } location={ location } />;
  }
}

