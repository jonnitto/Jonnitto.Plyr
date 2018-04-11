(function() {
    var plyrFile = "/_Resources/Static/Packages/Jonnitto.Plyr/plyr.min.js";

    function backendInit(events) {
        if (!events) {
            events = ["NodeCreated"];
        }
        initPlyr();
        for (var i = 0; i < events.length; i++) {
            document.addEventListener("Neos." + events[i], initPlyr);
        }
    }

    if (typeof require != "undefined") {
        var files = ["https://player.vimeo.com/api/player.js", plyrFile];
        document.addEventListener("Neos.ContentModuleLoaded", function() {
            setTimeout(function() {
                require(files, function(Vimeo) {
                    window.Vimeo = { Player: Vimeo };
                    require(["Plyr"], function(Plyr) {
                        window.Plyr = Plyr;
                        backendInit(["PageLoaded", "NodeCreated"]);
                    });
                });
            }, 100);
        });
    } else {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.defer = true;
        script.setAttribute("src", plyrFile);
        script.onload = backendInit;
        document.head.appendChild(script);
    }
})();
