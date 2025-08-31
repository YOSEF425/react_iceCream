import { useState } from "react";
import '../style/flavors.css'


let extraStyle = "";
function getFlavorForStyle(flavor:string) {
  switch (flavor) {
    case "Chocolate Fudge":
                return 'chocolateStyle';
                
            
            case "Vanilla Bean":
                return 'vanillaStyle';
                

            case "Birthday-Cake":
                return 'birthdayStyle';
                

            case "Cookies and Cream":
                return 'cookiesStyle';
                

            case "Cookie Dough":
                return 'cookieDoughStyle'
                
            
            case "Cookie Monster":
                return 'cookieMonsterStyle'
                
            
            case "Mint-Chocolate Chip":
                return 'mintStyle'
                
    }
}


export default function Flavors(){
    const [flavors,setFlavors] = useState([
        {name: "Chocolate Fudge", scoops:10},
        {name: "Vanilla Bean", scoops:10},
        {name: "Birthday-Cake", scoops:10},
        {name: "Cookies and Cream", scoops:10},
        {name: "Cookie Dough", scoops:10},
        {name: "Cookie Monster", scoops:10},
        {name: "Mint-Chocolate Chip", scoops:10}
    ]);

  const subScoop = (index:number) => {
  setFlavors(prev => {
    const updated = [...prev];
    updated[index].scoops = Math.max(updated[index].scoops - 1, 0);
    return updated;
  });
};

    
    return(
      <div className="flavorGrid">
           {flavors.map((flavor, i) => (
            <div key={i} className={`singalFlavor ${getFlavorForStyle(flavor.name)}`}>
                <div>{flavor.name}</div>
                <div>{flavor.scoops < 1 ? 'Sold Out' : 'In Stock'}</div>
                <div>Scoops Left: {flavor.scoops}</div>
                <div><button onClick={() => subScoop(i)} className="selectButton">Select Flavor</button></div>
            </div>
           ))}
      </div>
    )
}