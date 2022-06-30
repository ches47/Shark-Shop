import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const ARR = [
 { 
  title: 'Puma X Aka Boku Future Rider', 
  price: 120, 
  imageURl:"/img/sneakers/sneakers_1.jpg" },
 { title: 'Nike Yellow Blazer Mid Suede', 
   price: 180, 
   imageURl:"/img/sneakers/sneakers_2.jpg"},
 { title: 'Nike  Air Max 270 Maximum', 
   price: 200, 
   imageURl:"/img/sneakers/sneakers_3.jpg" },
 { title: 'Nike B Old schol Junior 360 Dali', 
   price: 220, 
   imageURl:"/img/sneakers/sneakers_4.jpg" },
];

function App() {
  return (
    <div className="wrapper clear"> 
      <Drawer />
      <Header /> 

       <div className="content p-40">
        <div className="d-flex align-center justify-between  mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.png" alt="search" />
          <input placeholder="Search..." />
        </div>
        </div>

       <div className="sneakers-blocks d-flex"> 
          

          {ARR.map((obj) => (
            <Card 
                title={obj.title}
                price={obj.price}
                imageURl={obj.imageURl}
                
            />
          ))}

          
        
       </div>
      </div> 

    </div>
  );
}

export default App;
