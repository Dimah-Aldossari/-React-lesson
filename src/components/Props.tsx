import { btnName } from "../Type";

function Props(props: btnName) {
  return (
    <div>
      <button style={{ backgroundColor: "black", color: "white" }}>
        {props.name}
      </button>
    </div>
  );
}

export default Props;
