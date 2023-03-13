import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/navbar/Navbars';
import AboutUs from './components/about us/AboutUs';
import Services from './components/services/Services';
import Team from './components/our team/Team';
import Project from './components/our projects/Project';
import Clients from './components/clients/Clients';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
         <Navbars />
         <AboutUs />
         <Services />
         <Team />
         <Project />
         <Clients />
         <Footer />
    </div>
  );
}

export default App;
