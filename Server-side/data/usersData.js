//IMPORTANT: The password is not encrypted with bcrypt so many not work when login
const usersData = [{
        name: "john.dao",
        password: "Dao",
        userType: "admin",
        phoneNumber: 315464,
        email: "joo1@gmail.com",
        DOB: "13/13/13",
        pic:"hha"
    },
    {
        name: "Kelvin",
        password: "Dao",
        phoneNumber: 12312312,
        userType: "admin",
        email: "joo31@gmail.com",
        DOB: "13/13/13",
        pic:"hha"
    },
    {
        name: "Test",
        password: "test",
        phoneNumber: 12312312,
        userType: "admin",
        email: "hahaaaha@gmail.com",
        DOB: "13/13/13",
        pic:"hha"
    }
]

module.exports = usersData;