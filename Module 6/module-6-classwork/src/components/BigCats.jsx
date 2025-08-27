//Exercises 2, 4 and 5

import AddCatForm from './AddCatForm';
import SingleCat from './SingleCat'
import { useState } from 'react';

export default function BigCats() {
  const cats = [
    { id: '1', name: 'Cheetah', latinName: 'Acinonyx jubatus', BigCatURL: "https://media.istockphoto.com/id/1254530990/photo/cheetah-acinonyx-jubatus-adult-running-through-savannah.jpg?s=2048x2048&w=is&k=20&c=U7uq5WMql3aorcBEQ_hcN6jjmcsYeZj0jSq7l4Uq2G0=" },
    { id: '2', name: 'Cougar', latinName: 'Puma concolor', BigCatURL: "https://media.istockphoto.com/id/682954094/photo/mountain-lion.jpg?s=2048x2048&w=is&k=20&c=hZ0iJQzKCRgZmd0F5Ei3hH-CRYCLZX-6IEbmgteXiSM=" },
    { id: '3', name: 'Jaguar', latinName: 'Panthera onca', BigCatURL: "https://media.istockphoto.com/id/153730635/photo/photograph-of-a-stunning-jaguar-in-the-wild.jpg?s=2048x2048&w=is&k=20&c=iGDDz9Aa5ecNg6phTo_y7WD5H55elwJcvIe7jNEdfNA=" },
    { id: '4', name: 'Leopard', latinName: 'Panthera pardus', BigCatURL: "https://media.istockphoto.com/id/1314203068/photo/leopard.jpg?s=2048x2048&w=is&k=20&c=zHRm1lyeITCZBP02sFaGvqoF0D8w1ngBVYrs6R9oR_c=" },
    { id: '5', name: 'Lion', latinName: 'Panthera leo', BigCatURL: "https://media.istockphoto.com/id/1796374503/photo/the-lion-king.jpg?s=2048x2048&w=is&k=20&c=gynl-IH7JehDI1yIKLRww-y-OWFGyaEKKdwXAXKBUU0=" },
    { id: '6', name: 'Snow leopard', latinName: 'Panthera uncia', BigCatURL: "https://media.istockphoto.com/id/521375354/photo/snow-leopard-in-snow-storm-iii.jpg?s=2048x2048&w=is&k=20&c=Bx-gAdFb3uZeNJduCIOcKSdnYAfrpHTkS9IW-xKLVCo=" },
    { id: '7', name: 'Tiger', latinName: 'Panthera tigris', BigCatURL: "https://media.istockphoto.com/id/871661426/photo/tiger.jpg?s=2048x2048&w=is&k=20&c=_iI7sU5c7KY9U2hRtMe5QWN8plsCDxIt0qGmss7iC2Q=" },
  ];


const [currentCats, setCurrentCats] =
useState(cats);


// const catItems = currentCats.map(cat => (
// <cat
//  key={cat.id} // key prop is required for lists
// name={cat.name}
// latinName={cat.latinName}
// BigCatURL={cat.BigCatURL}
// Delete={Delete}
// />

// )
// );

const handleReverseCats = () => {
// first clone the original, so we don’t mutate it
let newCats = [...currentCats];
newCats.reverse(); // 2. modify the clone
setCurrentCats(newCats); // 3. set updated clone in state
}




const handleAddCat = (newCat) => {
newCat.id = currentCats.length + 1; // unreliable but succinct
setCurrentCats([...currentCats, newCat])
}

const handleDeleteCat = (idToDelete) => {
    setCurrentCats(prev => prev.filter(cat => cat.id !== idToDelete));
  };

const handleSortCats = () => {
let newCats = [...currentCats];
newCats.sort((cat1 , cat2) => cat1.name < cat2.name?-1:1);
//newCats.sort();
setCurrentCats(newCats);
}

const filterCats = () => {
  const newCats = currentCats.filter ((cat) => cat.latinName.startsWith("Panthera"))
  
  setCurrentCats(newCats);
}

const handleReset = () => {
  setCurrentCats(cats);
}



  
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);




  // const catItems = cats.map(cat => (
  //   // <li key={cat.id}>
  //     {/* {cat.name} ({cat.latinName}) */}
  //   //</li>
  
  // ));

 return (
   <div className="List">
      <ul>{currentCats.map(cat => (
<SingleCat 
key={cat.id} // key prop is required for lists
id= {cat.id}
name= {cat.name} 
latinName= {cat.latinName} 
BigCatURL= {cat.BigCatURL}
Delete={handleDeleteCat}
/>
    ))
}
</ul>
<button onClick={handleReverseCats}>Reverse </button>
<button onClick={handleSortCats}>Alphabetize</button>
<button onClick={filterCats}>Panthera</button>
<button onClick={handleReset}>Reset</button>
<AddCatForm onAddCat={handleAddCat}/>

   </div>
  );
}

