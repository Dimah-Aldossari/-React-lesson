interface Iinformation {
  name: string;
  exp: number;
  avaliable: boolean;
}

function Conditional(props: Iinformation) {
  return (
    <div>
      {props.name} && {props.exp} &&{" "}
      <p className={`${props.avaliable ? "avaliable" : "test"}`}>
        {props.avaliable ? "avaliable" : "Notavaliable"}
      </p>
    </div>
  );
}

export default Conditional;
