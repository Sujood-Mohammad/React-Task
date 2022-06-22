
function Filter() {
    const cars = ["Saab", "Volvo", "BMW"];

 function filterArray(){
 const x = cars.filter(cars=>cars.length>4);
 return x;
 }
 return <div>{filterArray()}</div>;
}

export default Filter;