import { useState } from "react";


const [mood, setMood] = useState('happy');



function MoodChanger() {

    const [mood, setMood] = useState("😄")

    return(
        <div className="MoodChanger componentBox">
            Current Mood: {mood}
            <br/>
            <button onClick={() => setMood('😴')}>
                Stay Up Late
                </button>     
            <button onClick={() => setMood('🤤')}>
                Skipped Lunch
                </button>
            <button onClick={() => setMood('😭')}>
                IDK
            </button>

   </div>
    )
}

export default Emoji