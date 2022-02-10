if (typeof (w) === "undefined") {
    w = new Worker("workers.js");
}

w.onmessage = (e) => {
    console.log(e);
    document.getElementById("result").innerHTML = e.data;
}