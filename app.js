window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('SearchBtn').addEventListener('click', function() {
        var field = document.getElementById("SearchFld");
        var req = new XMLHttpRequest();
        if(field.value == ""){
            req.open('GET', 'superheroes.php', true);
            req.send();
            req.onload = function(){
                alert(req.responseText);
            }
        } else {
            var input = field.value;
            req.open('GET', 'superheroes.php?q=' + encodeURIComponent(input), true);
            req.send();
            req.onload = function(){
                //output hero information
            }
        }
    });
});