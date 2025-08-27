//Exercise 5

import { useState } from 'react';

export default function AddCatForm({onAddCat}) {
const [id, setid] = useState('')
const [name, setName] = useState('')
const [latinName, setlatinName] = useState('')
const [BigCatURL, setBigCatURL] = useState('')

// ++ add support for the synopsis field as well, here and below
const handleSubmit = (e) => {
e.preventDefault();
onAddCat({id: id, name: name, latinName: latinName, BigCatURL: BigCatURL})
}
return (
<div className="AddCatForm componentBox">
<form onSubmit={handleSubmit}>
<label>Cat ID:
<input name="id" value={id}
onChange={(e) => setid(e.target.value)} />
</label>
<label>Cat Name:
<input name="name" value={name}
onChange={(e) => setName(e.target.value)} />
</label>
<label>Latin Name:
<input name="latinName" value={latinName}
onChange={(e) => setlatinName(e.target.value)} />
</label>
<label>Big Cat URL:
    <input name="BigCatURL" value={BigCatURL}
    onChange={(e) => setBigCatURL(e.target.value)} />
</label>
<button>Add Cat</button>
</form>
</div>
)
}



