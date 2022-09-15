$(document).ready(function() {

    var userArray = [{
            username: "admin",
            password: "crazyrapidboots"
        },
        {
            username: "user",
            password: "12345"
        },
        {
            username: "terence montecillo",
            password: "wow"
        }
    ]

    function loginFunction() {
        var username = document.getElementById("name").value.toLowerCase();
        var password = document.getElementById("password").value;

        var mod_username = username.toLowerCase()

        for (i = 0; i < userArray.length; i++) {
            if (username == userArray[i].username && password == userArray[i].password) {
                alert("Hello");
                break;
            } else {
                console.warn("Skipped")
                break;
            }
        }
    }

    var loginsubmit = document.getElementById("login_button")
    $(loginsubmit).click(function () {
        loginFunction()
    })

})