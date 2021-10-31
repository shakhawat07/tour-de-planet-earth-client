import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TourPackages from './components/TourPackages/TourPackages';
import TourPackageDetails from './components/TourPackageDetails/TourPackageDetails';
import TourCategories from './components/TourCategories/TourCategories';
import AddTourPackage from './components/AddTourPackage/AddTourPackage';
import MyOrders from './components/MyOrders/MyOrders'
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/tourPackages">
              <TourPackages></TourPackages>
            </Route>
            <PrivateRoute path="/tourPackage/:tourPackageId">
              <TourPackageDetails></TourPackageDetails>
            </PrivateRoute>
            <PrivateRoute path="/tourCategories">
              <TourCategories></TourCategories>
            </PrivateRoute>
            <PrivateRoute path="/addTourPackage">
              <AddTourPackage></AddTourPackage>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
