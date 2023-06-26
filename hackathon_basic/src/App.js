import logo from './logo.svg';
import './App.css';
import ContactForm from './Components/ContactForm';
import ContactInfoComp from './Components/ContactInfoComp';

function App() {
  return (
    <div style={{ display: "flex", justifyContent:"center" }}>
      <ContactInfoComp />
      <ContactForm />
    </div>
  );
}

export default App;
