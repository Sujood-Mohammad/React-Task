import React,{ useState } from "react";

function Person(){
    const [person,setPerson] = useState(
        {
            name:"Sujoud",
            heroName:"Moqabalat ",
            age: "26",
            favFood: "Dawali",
            favAnimal: "Cat"
        }
    );
    const updatePerson = ()=>{
       setPerson(pre=>{
        return {...pre,favFood: "Mansaf"}
       });
    }
      return (
    <>
      <h1>My Name is {person.name} a.k.a {person.heroName}</h1>
      <p>
        my age is {person.age} my favFood is {person.favFood} and my favAnimal is {person.favAnimal}.
      </p>
      <button type="button"onClick={updatePerson}>favFood</button>
    </>
  )
}
export default Person;