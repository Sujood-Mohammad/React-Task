import Nav from './components/Nav';
import Card from './components/Card';
function App(){
  
  
  return (
    <div>
  <Nav/>
  <div class="container mt-5">
    <div class="row">
  <Card name = 'Sujoud'/>
  <Card name = 'Mohammad'/>
  <Card name = 'Ameer'/>
  <Card name = 'Sara'/>
  </div>
  </div>
    </div>
  );
};
export default App;