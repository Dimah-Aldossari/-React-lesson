import React, { useEffect } from "react";
type ApiProps = {
  id: number;
  name: string;
  title: string;
};
function ApiBtn() {
  const [myApiBtn, setMyApiBtn] = React.useState<ApiProps[]>([]);
  const [list, setPost] = React.useState("");
  const [first, setfirst] = React.useState("mjhj");

  useEffect(() => {
    // اي شي ينحط هنا ؟ بكل ريندر للصفحه بيعرضه لنا
    console.log("useEffect Render");
    fetch(`https://jsonplaceholder.typicode.com/${list}`)
      .then((response) => response.json())
      .then((data) => setMyApiBtn(data));

    return () => {
      console.log("====================================");
      console.log("cleanup");
      console.log("====================================");
    };
    // نوقف الرندر حق البيانات اللي في اليوز افكت عن طريق اقواس الاراي
    // اللي داخل الاراي اذا نبيه فعلا يصير له رندر مع كل تغيير للقيمه المحدده
  }, [list]);

  return (
    <div>
      <>
        <button onClick={() => setPost("posts")}>post</button>
        <button onClick={() => setPost("comments")}>comment</button>
        <button onClick={() => setPost("users")}>users</button>
      </>
      <br />
      {myApiBtn.map((item) => {
        return (
          <div key={item.id}>
            <li> {item.name}</li>
            <li> {item.title}</li>
          </div>
        );
      })}

      <br></br>

      <br></br>
      <button
        onClick={() => {
          setfirst("yytty");
        }}
      >
        name
      </button>
      {first}
    </div>
  );
}

export default ApiBtn;
