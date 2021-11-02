function App() {
  return (
    <div>
      <Person
        name="Justinian"
        age={18}
        hobbies={["Politics", "Economics", "Policy"]}
      />
      <Person 
        name="IanStewart" 
        age={19} 
        hobbies={["Math", "Physics"]} />
      <Person
        name="Muhammad"
        age={10}
        hobbies={["Praying", "Brushing Teeth"]}
      />
      <Person
        name="Aimee"
        age={17.5}
        hobbies={["Smiling", "Swimming", "Photo Taking"]}
      />
    </div>
  );
}