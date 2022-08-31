import { useState } from "react";
import DisplaySection from "../../components/DisplaySection";
import Form from "../../components/Form";
import Header from "../../components/Header";

const App = () => {
  const [formValues, setFormValues] = useState({
    country: "",
    state: "",
    city: "",
  });
  return (
    <div className="h-screen grid place-content-center">
      <Header />
      <main>
        <Form setFormValues={setFormValues} />
        <DisplaySection country={formValues.country} state={formValues.state} city={formValues.city} />
      </main>
    </div>
  );
};

export default App;
