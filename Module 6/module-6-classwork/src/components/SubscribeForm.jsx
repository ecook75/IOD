import React, { useState } from 'react';
import { useFormInput } from '../hooks/UseFormInput';


// export default function SubscribeForm() {

// const [status, setStatus] = useState('');

// // similar state variables mapped to form inputs

// const [firstName, setFirstName] = useState('Mary');

// const [email, setEmail] = useState('mary@poppins.com');

// // similar handler functions
// const handleNameChange = (e) => setFirstName(e.target.value);
// const handleEmailChange = (e) => setEmail(e.target.value);
// function handleSubscribe() {
// setFirstName(''); setEmail('');
// setStatus('Thanks for subscribing!')
// }
// return (
// <div className="SubscribeForm componentBox">
// <label>First name: {/* form inputs with similar props
// */}
// <input value={firstName} onChange={handleNameChange}
// />
// </label>
// <label>Email: {/* form inputs with similar props */}
// <input value={email} onChange={handleEmailChange} />
// </label>
// <button onClick={handleSubscribe}>Subscribe</button>
// <div>{status}</div>
// </div>
// );
// }


export default function SubscribeForm() {

const [status, setStatus] = useState('');

// use our custom hook instead of useState directly
const [nameInputProps, resetName] = useFormInput('Mary');
const [emailInputProps, resetEmail] =
useFormInput('mary@pop.com');
function handleSubscribe() {
resetName(); resetEmail();
setStatus('Thanks for subscribing!')
}
return (
<div className="SubscribeForm componentBox">
<label>First name: <input {...nameInputProps} /></label>
<label>Email: <input {...emailInputProps} /></label>
<button onClick={handleSubscribe}>Subscribe</button>
<div>{status}</div>
</div>
);
}
// ++ Try adding another form input using the custom hook
// ++ Try creating another form component using the custom hook