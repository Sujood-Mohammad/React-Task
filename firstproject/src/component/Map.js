function Map() {

    const cars = ["Saab", "Volvo", "BMW"];

    function MapArray(){
    const y = cars.map(car=>car.toUpperCase());
    return y;
    }
    return <div>{MapArray()}</div>;
   }
   
   export default Map;