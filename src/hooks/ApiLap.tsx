import React from "react";
import { Link } from "react-router-dom";

type Ipost = {
  title: string;
  id: number;
};
function ApiLap() {
  const [first, setfirst] = React.useState<Ipost[]>([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setfirst(data));
  }, []);

  return (
    <div>
      {first.map((item) => (
        <div key={item.id}>
          <li>
            <Link to={`/ShowData/${item.id}`}>
              <p>
                {item.id}- {item.title}
              </p>
            </Link>
          </li>
          {/* <li> {item.id}</li> */}
        </div>
      ))}
    </div>
  );
}

export default ApiLap;
