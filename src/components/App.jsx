import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {

  return (
    <div className="page">
      <h1>Phonebook</h1>

      <div className="layout">
        <div className="left">
          <ContactForm />
        </div>

        <div className="right">
              <SearchBox />
              <ContactList />
        </div>
      </div>
    </div>
  );

}

export default App;
