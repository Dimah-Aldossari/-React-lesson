import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type Info = {
  id: string;
  userName: string;
};
function Read() {
  const [list, setList] = React.useState<Info[]>([]);
  React.useEffect(() => {
    console.log("render");

    axios
      .get("https://64ec45a2f9b2b70f2bfa0612.mockapi.io/logIn")
      .then((res) => {
        setList(res.data);
      });
  }, []);

  const deleteUser = (id: string) => {
    axios
      .delete(`https://64ec45a2f9b2b70f2bfa0612.mockapi.io/logIn/${id}`)
      .then(() => {
        setList(
          list.filter((del) => {
            return del.id !== id;
          })
        );
      });
    console.log(id);
  };

  return (
    <>
      {list.map((item) => {
        return (
          <>
            <p>{item.userName}</p>
            <button type="button" onClick={() => deleteUser(item.id)}>
              delete
            </button>
            <Link to="/UbdataUser">
              <button onClick={() => localStorage.setItem("id", item.id)}>
                Ubdate
              </button>
            </Link>
          </>
        );
      })}
    </>
  );
}

export default Read;
