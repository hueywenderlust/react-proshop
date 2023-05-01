import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminUsersListScreen from './screens/AdminUsersListScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />

            <Route path='/product/:id' element={<ProductScreen />}  /> 
            <Route path='/cart/:id?' element={<CartScreen />}  /> 
            <Route path='/admin/userlist' element={<AdminUsersListScreen />}  /> 
            <Route path='/' element={<HomeScreen />} exact /> 


          </Routes>   
        </Container>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
