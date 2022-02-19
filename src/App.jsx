import "./App.css";
import Header from "./components/Header";
import PriceCard from "./components/PriceCard";
const App = () => {
  return (
    <>
      <Header />
      <main className="price-tables ">
        <PriceCard name='Free' priceOne={0} priceTwo={'00'} facilities={3}/>
        <PriceCard name='Professional' special={true} facilities={5} priceOne={19} priceTwo={90}/>
        <PriceCard name='Basic' priceOne={14} priceTwo={90} facilities={4} special={false}/>
      </main>
    </>
  );
};

export default App;
