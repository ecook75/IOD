
let running;

fetch('http://localhost:3000/runningMethods/')
.then((response) => response.json())
.then((json) => populate(json));

        

function addCard(title, description, origin, fitness_level) {
            // clone the template
            const template = document.getElementById("running-template").content.cloneNode(true);

            // populate the template
            template.querySelector('.card-title').innerText = title;
            template.querySelector('.card-description').innerText = description;
            template.querySelector('.card-origin').innerText = origin;
            template.querySelector('.card-fitness_level').innerText = fitness_level;

            // include the populated template into the page
             document.querySelector('#card-list').appendChild(template);




        }

        function populate(json) {
            console.log(json)
        json.forEach(item => {
         addCard(item.title, item.description, item.origin, item.fitness_level);
        })
        }
        

        
        
    