import { useState } from "react";



function EmojiChanger() {

    const [emoji, setEmoji] = useState("😄")

    const handleWinLotto = () => {
    setEmoji("😄");
        
    };

    return(
        <div className="EmojiChanger componentBox">
            Current Emoji: {emoji}
            <br/>
            <button onClick={() => setEmoji('😴')}>
                Change Mood
                </button>     
            <button onClick={() => setEmoji('🤤')}>
                Change Mood Again!
                </button>
                <button onClick={handleWinLotto}>
                    Win Lotto
                </button>
   </div>
    )
}

export default EmojiChanger;