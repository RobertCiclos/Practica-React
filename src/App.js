import Miguel from "./component/Miguel";
import Robert from "./component/Robert";
import Ivan from "./component/Ivan";
function App() {
  return (
    <div className="App">
      <section className="bg-slate-600">
        <Robert />
      </section>
      <section>
        <Ivan/>
      </section>
      
      <section>
        <Miguel />
      </section>
      <section>
        <Natalia/>
      </section>
      <section>
        Robert
      </section>
    </div>
  );
}

export default App;
