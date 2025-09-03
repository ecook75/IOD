// theme options with specific colour values

import React from "react";

export const emojis = {
sleepy: { emoji: '😴'},
hungry: { emoji: '🤤'},

 };
export const EmojiContext = React.createContext({
    emoji: emojis.sleepy.emoji,
    setEmoji: () => {},
laughing: false,
})

// named export for this context (to be used via useContext elsewhere)
export default function EmojiProvider(props) {
    const [emoji, setEmoji] = React.useState('😄');


// provider wrapper. uses its own state to track which theme is in use
// use it in App.jsx like <MyThemeProvider>...</MyThemeProvider>


 // helper boolean to tell if we’re currently in dark mode
 const sleepyMode = emoji.background === emojis.sleepy.face;
 return (
 <EmojiContext.Provider value={{emoji, setEmoji, emojis}}>
 {props.children}
 </EmojiContext.Provider>
 );
}

// ++ Try to use this context to style some existing components
// ++ Try to add a component with a button/checkbox to switch themes