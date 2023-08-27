import React from "react";
import { useParams } from "react-router-dom";
type Ipost = {
  body: string;
  id: number;
};
function ShowData() {
  // state for api
  const [show, setShow] = React.useState<Ipost[]>([]);
  const { id } = useParams();

  React.useEffect(() => {
    // the id in params put it her in the api
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      //هنا حطيناه في ارراي عشان نقدر نوصل لكل واحد
      .then((data) => setShow([data]));
  }, [id]);
  return (
    <div>
      {show.map((item) => (
        //وهنا طريقة الوصول والعرض
        <>{item.body}</>
      ))}
    </div>
  );
}

export default ShowData;
