import DisplaySection from "../../components/DisplaySection";
import Form from "../../components/Form";
import Header from "../../components/Header";

const App = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Header />
      <main>
        <Form />
        <DisplaySection country="Benin" state="Littoral" city="Cotonou" />
      </main>
    </div>
  );
};

export default App;
