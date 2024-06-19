
const Hobbies = (props) =>{
const hobbyList = hobbies.map(h => <li>{hobby}</li>);
const MAX_NAME_LENGTH_TO_SHOW = 6;
return (
  <div>
    <p>Here is some info:</p>
    <ul>
      <li>Name: {props.name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
      <li>Age: {props.age} </li>
      <ul>
        Hobbies:
        {props.hobbies}
      </ul>
    </ul>
    <h3>{reply}</h3>
  </div>
);
}