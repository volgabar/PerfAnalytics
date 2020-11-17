// "use strict";

window.addEventListener("load", function (e) {
  setTimeout(function () {
    const pageNav = performance.getEntriesByType("navigation")[0];

    // const paintTimings = performance.getEntriesByType("paint");
    // const fmp = paintTimings.find(
    //   ({ name }) => name === "first-contentful-paint"
    // );
    // const fcp = fmp.startTime;

    const ttfb = pageNav.responseStart - pageNav.requestStart;
    // const fcp =
    //   performance.getEntriesByName("first-contentful-paint").length > 0
    //     ? performance.getEntriesByName("first-contentful-paint")[0].startTime
    //     : 0;
    const fcp = performance.getEntriesByName("first-contentful-paint")[0]
      .startTime;
    const windowLoad = pageNav.loadEventEnd - pageNav.loadEventStart;
    const domLoad =
      pageNav.domContentLoadedEventEnd - pageNav.domContentLoadedEventStart;

    let resourcePerformance = [];
    const resourceTypes = ["css", "img", "script", "subdocument", "other"];
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
  }, 0);
});
