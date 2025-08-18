


// Specify the configuration items and data for the chart

function populate(json) {
console.log(json)
let categories = new Map()
json.forEach(
    item=> {
        let catCount = categories.get(item.category)
if(catCount>0){
categories.set(item.category, ++catCount)
}
else{
    categories.set(item.category, 1)
}

    }
)
console.log(categories)
options.xAxis.data = [...categories.keys()]
options.series[0].data = [...categories.values()]

}
fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((json) => populate(json))
.then((json) => myChart.setOption(options))

//console.log(json)


// use this JSON to find and set correct option data for the chart

let myChart = echarts.init(document.getElementById('main'));

// Display the chart
myChart.setOption(options);



// Initialize the echarts instance based on the prepared div
