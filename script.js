document.addEventListener('DOMContentLoaded', function () {
    var dob = new Date("04/27/2008");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    document.getElementById('age').innerHTML = age
})



function openSocial(e) {
    if (e == 'instagram') {
        window.open("https://www.instagram.com/nbit.lnk/");
    } else if (e == 'github') {
        window.open("https://github.com/Grizzey")
    } else if (e == 'discord') {
        window.open("https://discord.com/users/489963091019169802")
    }
}

function openProjectCard(a) {
    try {
        if (a == 'windowsProject') {
            window.open("https://jabaitech.github.io/comprog1-java-windows");
        } else if (a == 'windows98Project') {
            window.open("https://jabaitech.github.io/comprog1-windows98")
        } else if (a == 'BLANK') {
            //BLANK
            alert('Coming Soon...');
        }
    } catch (err) {
        console.error("Error at:" + err);
    }
}
