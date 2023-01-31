import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./table"
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`http://localhost:8080/?query_string=${query}`);
      setData(response.data);
    }
    if(query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  return (
      <div className='app'>
        <input 
          type="text" 
          className='search' 
          placeholder='Search' 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <Table data={data}/>
      </div>
  );
}
export default App