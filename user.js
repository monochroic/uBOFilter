user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [[FF79+]
user_pref("browser.search.update", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [FF58+]
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
user_pref("browser.ping-centre.telemetry", false);
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.available", false); // [FF57+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.send_pings", false); // [DEFAULT: false]
user_pref("browser.send_pings.require_same_host", true); // defense-in-depth
user_pref("network.dns.disableIPv6", true);
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF]
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.formfill.enable", false);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.enable", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.chrome.site_icons", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.version.enable-deprecated", false);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.family_safety.mode", 0);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.mixed_content.block_active_content", true); // [DEFAULT: true]
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.referer.hideOnionSource", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("plugin.state.flash", 0);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.eme.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true); // [FF51+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // [FF70+]
user_pref("webgl.disabled", true);
user_pref("webgl.enable-webgl2", false);
user_pref("webgl.disable-fail-if-major-performance-caveat", true); // [DEFAULT: true FF86+]
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("dom.disable_window_move_resize", true);
user_pref("browser.link.open_newwindow", 3); // 1=most recent window or tab 2=new window, 3=new tab
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.allow_cut_copy", false);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.vibrator.enabled", false);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.wasm", false);
user_pref("dom.targetBlankNoOpener.enabled", true); // [DEFAULT: true FF79+]
user_pref("media.navigator.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("accessibility.force_disabled", 1);
user_pref("beacon.enabled", false);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
user_pref("middlemouse.contentLoadURL", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("network.IDN_show_punycode", true);
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false]
user_pref("permissions.delegation.enabled", false);
user_pref("privacy.window.name.update.enabled", true); // [DEFAULT: true FF86+]
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
user_pref("security.csp.enable", true); // [DEFAULT: true]
user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "custom");
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // [FF58+]
user_pref("browser.cache.offline.storage.enable", false); // [FF71+] [DEFAULT: false FF84+]
user_pref("dom.storage.next_gen", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF]
user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
user_pref("browser.startup.blankWindow", false);
user_pref("ui.prefersReducedMotion", 1); // [HIDDEN PREF]