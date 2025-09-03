import { useState, useEffect } from 'react';
import { useData } from '../hooks/UseData';
import EmojiChanger from './Emoji';
import { Box } from '@mui/system';


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];


export default function BitcoinRates() {
    

const [bitcoinP, setbitcoinP] = useState(null);
const [currency, setCurrency] = useState(currencies[0]);

const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}` + `currency`+ currency);



const activity = data ? data.activity : 'not found';

// //fetch URL:https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
// useEffect(() => {

// fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)

// .then(response => response.json())
// .then(json => {
//     console.log(json.bitcoin[currency.toLowerCase()])
//     setbitcoinP(json.bitcoin[currency.toLowerCase()])
// });
// }, [currency]);


// https://mui.com/system/getting-started/the-sx-prop/ has good tips
// Camel-case the CSS properties
// Some properties like margin and padding have special syntax
// ++ Experiment with the sx prop in some existing MUI components


const options = currencies.map(curr => <option value={curr}
key={curr}>{curr}</option>);

return (
<div className="BitcoinRates componentBox">
<h3>Bitcoin Exchange Rate</h3>
<label>Choose currency:
<select value={currency} onChange={e =>
setCurrency(e.target.value)}>
{options}
</select>
</label>
{bitcoinP}
<EmojiChanger/>
</div>
)
}

