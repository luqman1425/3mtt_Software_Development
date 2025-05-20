import { useState, useEffect } from "react";
import ListComponent from "./ListComponent";
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data from the resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Debug: App is rendering</h1> {/* <-- Add this */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <ListComponent
          items={data}
          renderItem={(item) => (
            <div>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          )}
          emptyMessage="No posts found."
        />
      )}
    </div>
  );
}

export default App;