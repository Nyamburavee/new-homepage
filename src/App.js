import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Headlines from './Components/Headlines';


function App() {
  const New = [
    {headline: 'Hydrogen VS Electric Cars', info: 'Will hydrogen fueled cars ever catch up to EVs?' },
    {headline: 'The Downside of AI Artistry',  info: 'What are the possible adverse effects of on-demand AI image generation?'},
    {headline: 'Is VC Funding Drying Up', info: 'Private funding by VC firms is dowm 50% YOY.We take a look at what that means.'}
  ]

  const  headlines = [
    {image: 'image-retro-pcs.jpg', number: 1, title:'Reviving Retro PCs', info: 'What happens when old pcs are given modern upgrades?'},
    {image: 'image-top-laptops.jpg', number: 2, title:'Top Ten Laptops of 2022', info: 'Our various picks for various needs and budgets.'},
    {image: 'image-gaming-growth.jpg', number: 3, title:'The Growth of Gaming', info: 'How the pandemic has sparked new opportunities.'}

  ] 


  return (
    <div className="m-6 md:mx-28 bg-offWhite">
      
      <Navbar />
      <Main 
        news={New}
      />
      <Headlines
         headlines= {headlines}

      />
      
      


        

    </div>
  );
}

export default App;
