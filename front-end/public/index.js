//const ENV = "production";                                  //Changes Env Variable to production
const ENV = "dev";                                           //Changes Env Variable to dev

let ApiUrl = ENV == "dev" ? "http://localhost:5050" : "##";  //Ternary if env is "dev" apiURL requests are localhost 5050

fetch(`${ApiUrl}/api/Cars`)
    .then(response => response.json())
    .then(data => {
        data.rows.forEach(car => {
            console.log(data.rows)
            var carElement = document.createElement('li');
            carElement.innerHTML = `${car.model} - color ${car.color}`;
            // console.log(studentElement);
            carList.appendChild(carElement);
        });
    });