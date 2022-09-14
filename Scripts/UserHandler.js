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
            username: "Terence Montecillo",
            password: "wow"
        }
    ]

    function loginFunction() {
        var username = document.getElementById("name").value;
        var password = document.getElementById("password").value;

        console.log(username, password)
        for (i = 0; i < userArray.length; i++) {
            if (username == userArray[i].username && password == userArray[i].password) {
                alert("Hello");
            } else {
                console.warn("Skipped")
            }
        }
    }

    var loginsubmit = document.getElementById("login_button")
    $(loginsubmit).click(function () {
        loginFunction()
    })

})