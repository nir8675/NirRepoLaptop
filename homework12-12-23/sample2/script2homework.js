function clickButton () {
        let mailChecker = document.querySelector(`#mailCheck`).value
        let passwordChecker = document.querySelector(`#PasswordCheck`).value
        console.log(mailChecker)
        console.log(passwordChecker)


if ( mailChecker === `idanmagl@gmail.com` && passwordChecker === `im1234$$`
) {
        window.location.href = `success.html`;
}
else {
        
        document.querySelector(`.wronginput`).innerHTML = "?טעות! אולי תשים את המשקפיים הפעם"

}

}

    function helpSection() {
    let helpStatus = document.querySelector('#helpPass').value;
    if (helpStatus === 'idanmagled@gmail.com') {
        document.querySelector('.hereThePassword').innerHTML = 'im1234$$';
        setTimeout(function () {
            document.querySelector('.hereThePassword').innerHTML = '';
        }, 4000);
    }
}
