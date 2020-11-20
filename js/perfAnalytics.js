window.addEventListener("load", function (e) {
  //wait for load eventend
  setTimeout(function () {
    var pageNav = performance.getEntriesByType("navigation")[0];

    var ttfb = pageNav.responseStart - pageNav.requestStart;
    var fcp = performance.getEntriesByName("first-contentful-paint")[0]
      .startTime;
    var windowLoad = pageNav.loadEventEnd - pageNav.loadEventStart;
    var domLoad =
      pageNav.domContentLoadedEventEnd - pageNav.domContentLoadedEventStart;

    var resourcePerformance = [];
    var resourceTypes = ["css", "img", "script", "subdocument", "other"];
    performance.getEntriesByType("resource").forEach((r) => {
      if (resourceTypes.includes(r.initiatorType)) {
        resourcePerformance.push({
          type: r.initiatorType,
          name: r.name,
          time: r.responseEnd - r.responseStart,
        });
      }
    });

    console.log("ttfb", ttfb);
    console.log("fcp", fcp);
    console.log("windowLoad", windowLoad);
    console.log("domLoad", domLoad);
    console.log("resourcePerformance", resourcePerformance);

    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    var theUrl = "https://perf-analytics-app-api.herokuapp.com/perf-metrics";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(
      JSON.stringify({
        ttfb: ttfb,
        fcp: fcp,
        windowLoad: windowLoad,
        domLoad: domLoad,
        resourcePerformance: resourcePerformance,
        createdAt: new Date(),
      })
    );
  }, 0);
});
