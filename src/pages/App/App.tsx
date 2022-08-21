import { useState } from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";

const App = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
};

export default App;
