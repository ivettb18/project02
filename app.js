const orders = [
    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukorica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/13302778/pexels-photo-13302778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        id: 2,
        pizza: "4 sajtos",
        extra: "Mozzarella",
        ital: "Pepsi",
        ar: 1900,
        kep: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        id: 3,
        pizza: "Pepperoni",
        extra: "Jalapeno",
        ital: "-",
        ar: 1900,
        kep: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        id: 4,
        pizza: "Margharita",
        extra: "-",
        ital: "Sprite zero",
        ar: 1600,
        kep: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        id: 5,
        pizza: "Songoku",
        extra: "Cheddar, Extra gomba",
        ital: "Heineken x2",
        ar: 3200,
        kep: "https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },

    {
        id: 6,
        pizza: "Fitness pizza",
        extra: "-",
        ital: "Mentes víz",
        ar: 1500,
        kep: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
]

const result = document.querySelector(".result");

let output = "";
orders.map((order)=>{

    output += `

        <div class='order'>
            <div>
                <img src='${order.kep} alt='pizza' /> 
            </div>

            <h3>${order.pizza}</h3>
            <hr>
            <h4>Ár: ${order.ar} </h4>
            <p>Extra: ${order.extra}</p>
            <p>Ital: ${order.ital}</p>
        </div>

    `;

})

result.innerHTML = output;



