import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import {Outlet} from 'react-router-dom';
import {LoadUser} from './store/Actions/UserActions';
import { getTasks } from "./store/Actions/TaskActions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadUser());
    dispatch(getTasks());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
