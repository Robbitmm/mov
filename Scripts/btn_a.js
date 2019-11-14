function db() {
    var frame = document.getElementById("movieFrame")
    var btn = document.getElementById("btn")
    var db = document.getElementById("button-dublado")
    var lg = document.getElementById("button-legendado")

    frame.src = "https://drive.google.com/file/d/1iJk7uEQvZYn2yXwo-qmtTQuPT9aM5TiI/preview?";
    frame.style.display = "block";

    lg.style.display = "block";
    db.style.display = "none";

    btn.classList.add("plaing");
}

function lg() {
    var frame = document.getElementById("movieFrame")
    var btn = document.getElementById("btn")
    var db = document.getElementById("button-dublado")
    var lg = document.getElementById("button-legendado")

    frame.src = "https://drive.google.com/file/d/1DUTkG3MOWwQPre00nGNCZtqAsA0qdgxB/preview?";
    frame.style.display = "block";

    db.style.display = "block";
    lg.style.display = "none";

    btn.classList.add("plaing");
    
}
