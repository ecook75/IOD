// import { useState } from "react";



// function EmojiChanger() {

//     const [emoji, setEmoji] = useState("😄")

//     const handleWinLotto = () => {
//     setEmoji("😄");
        
//     };

//     return(
//         <div className="EmojiChanger componentBox">
//             Current Emoji: {emoji}
//             <br/>
//             <button onClick={() => setEmoji('😴')}>
//                 Change Mood
//                 </button>     
//             <button onClick={() => setEmoji('🤤')}>
//                 Change Mood Again!
//                 </button>
//                 <button onClick={handleWinLotto}>
//                     Win Lotto
//                 </button>
//    </div>
//     )
// }


import { EmojiContext } from '../context/EmojiProvider';
import { useState, useContext } from 'react';

function EmojiChanger() {
const {emoji, setEmoji, emojis } = useContext(EmojiContext)

return (
    <div className="Emoji componentBox">
        Laughing: {emoji}
        <br />
        <button onClick={() => setEmoji(emojis.sleepy.emoji)}>
            Sleepy
        </button>
        <button onClick={() => setEmoji(emojis.hungry.emoji)}>
            Hungry
        </button>
    </div>
)
}
//export default Emoji



export default EmojiChanger;