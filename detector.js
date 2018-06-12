window.onload = () => {

    let hostname = window.location.hostname;
    var scripts = document.getElementsByTagName("script");

    for(var i = 0; i < scripts.length; i++) {
        src = scripts[i].src;
        if(scripts[i].src) {
            if(!src.includes(hostname)) {
                console.log("WARNING! External connection to script found!");
                console.log(i, scripts[i].src);
            }
        }
      }

}