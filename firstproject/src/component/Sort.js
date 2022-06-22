function Sort() {

    const cars = ["Saab", "Volvo", "BMW"];

    function SortArray(){
    const z = cars.sort();
    return z;
    }
    return <div>{SortArray()}</div>;
   }
   
   export default Sort;
