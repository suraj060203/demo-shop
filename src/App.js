import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  const ItmeName2 = "Tide"; // You can change this to any other name you want
  const response =[
  {
    itemName: "Nirma",
    itemDate: 20,
    itemMonth: "January",
    itemYear: 2001
  },
  {
    itemName: "Tide",
    itemDate: 23,
    itemMonth: "June",
    itemYear: 2009
  },
  {
    itemName: "Surf Excel",
    itemDate: 6,
    itemMonth: "July",
    itemYear: 2000
  }
  ];

  return (
    <div>
      <Card>
        <Item name={response[0].itemName}> Hello Ji! I'm your first item</Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        <Item name={ItmeName2}></Item>
        <ItemDate day="23" month="June" year="2009"></ItemDate>

        <Item name="Surf Excel"></Item>
        <ItemDate day="6" month="July" year="2000"></ItemDate>
        
        <div className="App">
          <h1>Hello Suraj!</h1>
        </div>
      </Card>
    </div>

  );
}

export default App;
