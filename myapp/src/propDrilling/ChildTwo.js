import ChildThree from "./ChildThree"
export default function ChildTwo(props) {
  console.log("Child two",props);
  
  return (
    <div>
        <p>This is your counting {props.count}</p>
        <ChildThree count={props.count} setCount={props.setCount} />
    </div>
  )
}