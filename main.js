var SECOND_PER_YEAR = 31556926;

function showAge() {
    var birthday = document.getElementById('birthday').value;
    var age = (Date.now() - Date.parse(birthday)) / SECOND_PER_YEAR / 1000;

    var showAgeArea = document.getElementById('showAgeArea');
    showAgeArea.innerHTML = age.toFixed(2);
}