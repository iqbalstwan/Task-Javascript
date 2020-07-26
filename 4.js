let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    hobby : "futsal",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

// Spread Operator
const newData = {...data}
newData.name= "Iqbal"
newData.email= "Iqbalstwan@yahoo.com"
newData.hobby= "Game"
console.log(newData)

//destructuring
let {street,city} = data.address;
console.log (data.address.street,city)
