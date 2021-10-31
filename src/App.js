import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contex/AuthProvider";
import AddServices from "./pages/AddServices/AddServices";
import AllOrders from "./pages/AllOrders/AllOrders";
import Author from "./pages/Author/Author";
import Blogs from "./pages/Blogs/Blogs/Blogs";
import BookNow from "./pages/BookNow/BookNow";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivetRoute from "./pages/Login/PrivetRoute/PrivetRoute";
import ManegService from "./pages/ManegService/ManegService";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Footer from "./pages/Share/Footer/Footer";
import Header from "./pages/Share/Header/Header";
import ServiceDetails from "./ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blog">
              <Blogs></Blogs>
            </Route>
            <PrivetRoute path="/serviceDetails/:_id">
              <ServiceDetails></ServiceDetails>
            </PrivetRoute>
            <Route path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route path="/manegService">
              <ManegService></ManegService>
            </Route>
            <Route path="/allorders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/booking">
              <BookNow></BookNow>
            </Route>
            <Route path="/author">
              <Author></Author>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
