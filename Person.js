function Person(props) {
  let voteText = props.age >= 18 ? "Please Go Vote!" : "you must be 18";

  let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {props.name.slice(0, 6)}</li>
        <li>Age: {props.age}</li>
        <li>Hobbies:</li>
        <ul>
          {hobbies}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}