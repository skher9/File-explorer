import './App.css';
import { useState } from "react";
import Traverse from './components/Traverse';
import explorer from "./data/FolderData";
import Folder from "./components/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const {insert} = Traverse();

  const handleInsert = (folderId, item, isFolder) => {
    const finalTree = insert(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsert={handleInsert} explorer={explorerData} />
    </div>
  );
}

export default App;
