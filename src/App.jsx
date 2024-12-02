function List(props) {
  return (
    // <>
    //   {!props.animals ? (
    //     <div>Loading...</div>
    //   ) : props.animals.length > 0 ? (
    //       <ul>
    //         {props.animals.map((animal) => {
    //           return <li key={animal}>{animal}</li>
    //         })}
    //       </ul>
    //   ): (
    //     <div>There are no animals in the list!</div>
    //   )}
    // </>
    <>
    {!props.animals && <div>Loading...</div>}
    {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
    {props.animals && props.animals.length > 0 && <ul>{props.animals.map((animal) => {
      return <li key={animal}>{animal}</li>
    })}</ul>}
    </>
  )
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App