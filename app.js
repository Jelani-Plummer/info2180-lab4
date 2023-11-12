window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('SearchBtn').addEventListener('click', function() {
        var req = new XMLHttpRequest();
        req.open('GET', 'superheroes.php', true);
        req.send();
        req.onload = function(){
            alert(req.responseText);
        };
    });
});