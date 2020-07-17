function activeMenu () {
    var container = document.querySelector(".header-nav");
        var links = container.getElementsByTagName("a");
        var current_page = window.location.href.split('/').pop();

        for (var i = 0; i < links.length; i++) {
            var current = links[i].getAttribute('href');
            if (current_page === current) {
                links[i].classList.add("active");
            }
        }
        
}

function visiterCounter() {
    var storedCount = localStorage.getItem('count') || 0;
    document.querySelector('.counter').innerHTML = storedCount;

    var x = setInterval(add, 1000);

    function add() {
        let oldCount = parseInt(document.querySelector(".counter").innerHTML);
        document.querySelector(".counter").innerHTML = oldCount + 1;
        localStorage.setItem('count', oldCount + 1);

        if (oldCount + 1 > 4000) {
            clearInterval(x);
        }
    }
}

window.onload = function() {
    activeMenu();
    visiterCounter();
}