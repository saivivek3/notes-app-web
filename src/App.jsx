import Actions from "./components/Actions";
import EachNotesDetails from "./components/EachNotesDetails";
import FullNotesDetails from "./components/FullNotesDetails";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex divide-x-2 divide-neutral-800 w-full ">
          <FullNotesDetails />
          <EachNotesDetails />
          <Actions />
        </main>
      </div>
    </div>
  );
}

export default App;
