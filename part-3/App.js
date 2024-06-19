const App = () => {
    return (
      <div>
        <Person
          name="Tim"
          age={45}
          hobbies={["drama", "watching tv", "drinking beer"]}
        />
        <Person 
            name="Sam" 
            age={21} 
            hobbies={["watching tv", "horror movies"]} />
        <Person
          name="Becca"
          age={7}
          hobbies={["skateboarding", "stickers"]}
        />
        <Person
          name="Jen"
          age={18}
          hobbies={["reading", "painting", "spending time with bf"]}
        />
      </div>
    );
  }
  