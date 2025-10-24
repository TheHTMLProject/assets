(function () {
  var dnt = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack) === "1";
  var isDev = location.hostname === "localhost" || location.hostname.endsWith(".local");

  var scriptTag = document.currentScript;
  var MEAS_ID = scriptTag && scriptTag.getAttribute("data-ga-id");
  if (!MEAS_ID || dnt || isDev) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEAS_ID);
  document.head.appendChild(s);

  var consent = localStorage.getItem("thp-consent") || "granted";

  gtag("consent", "default", {
    ad_storage: consent,
    ad_user_data: consent,
    ad_personalization: consent,
    analytics_storage: consent
  });

  gtag("js", new Date());
  gtag("config", MEAS_ID, {
    transport_url: "https://www.google-analytics.com/g/collect",
    page_location: location.href
  });

  window.THPAnalytics = {
    setConsent: function (state) {
      localStorage.setItem("thp-consent", state);
      gtag("consent", "update", {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state
      });
    },
    event: function (name, params) {
      gtag("event", name, params || {});
    },
    pageview: function (path) {
      gtag("event", "page_view", { page_location: location.origin + (path || location.pathname) });
    }
  };
})();
