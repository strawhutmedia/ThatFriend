/* Purchase-page behaviour for /getnow and its single-storefront variants.
 *
 * EDIT STOREFRONTS BELOW — it is the only place purchase URLs live, and it
 * is shared by all three pages, so one edit updates every ad destination.
 */
(function () {
  'use strict';

  // ==================================================================
  // EDIT HERE — the only place purchase links live.
  //
  // Set `url` for each storefront as it goes live. Anything still null
  // renders as "coming soon" instead of a dead button.
  //
  // Exactly ONE entry should have primary: true. That is the single
  // dominant call to action — four equal buttons is choice paralysis
  // and gives us nothing to optimise against.
  // ==================================================================

  var STOREFRONTS = [
    { key: 'appletv',  label: 'Apple TV',          price: '',  url: null, primary: true  },
    { key: 'amazon',   label: 'Prime Video',       price: '',  url: null, primary: false },
    { key: 'fandango', label: 'Fandango at Home',  price: '',  url: null, primary: false },
    { key: 'googletv', label: 'Google TV',         price: '',  url: null, primary: false }
  ];

  // Vimeo ID for the trailer, or null to show the poster instead.
  var TRAILER = null;

  // ------------------------------------------------------------------
  // Carry ad attribution through to the storefront.
  //
  // We cannot see what happens inside Apple or Amazon — no pixel, no
  // postback. Appending our params is the most we can do, and the
  // outbound event below is what we actually measure.
  // ------------------------------------------------------------------

  var PASS_THROUGH = ['utm_source','utm_medium','utm_campaign','utm_term',
                      'utm_content','gclid','gbraid','wbraid','fbclid'];

  function inboundParams() {
    var out = {};
    try {
      var q = new URLSearchParams(window.location.search);
      PASS_THROUGH.forEach(function (k) {
        var v = q.get(k);
        if (v) out[k] = v;
      });
    } catch (e) { /* very old browser — attribution is best-effort */ }
    return out;
  }

  var INBOUND = inboundParams();

  function decorate(url) {
    var keys = Object.keys(INBOUND);
    if (!keys.length) return url;
    try {
      var u = new URL(url);
      keys.forEach(function (k) { u.searchParams.set(k, INBOUND[k]); });
      return u.toString();
    } catch (e) { return url; }
  }

  // ------------------------------------------------------------------
  // The conversion we can actually count: a storefront handoff.
  // Fires before navigation, on Google and Meta.
  // ------------------------------------------------------------------

  function trackHandoff(store) {
    var payload = {
      storefront: store.key,
      storefront_label: store.label,
      is_primary: !!store.primary,
      utm_source: INBOUND.utm_source || '',
      utm_campaign: INBOUND.utm_campaign || '',
      has_gclid: !!INBOUND.gclid
    };
    try { if (window.gtag) gtag('event', 'storefront_handoff', payload); } catch (e) {}
    try { if (window.fbq) fbq('trackCustom', 'StorefrontHandoff', payload); } catch (e) {}
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: 'storefront_handoff' }, payload));
    } catch (e) {}
  }

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------

  function makeLink(store, cls) {
    var a = document.createElement('a');
    a.className = cls;
    a.href = decorate(store.url);
    a.target = '_blank';
    a.rel = 'noopener';
    a.addEventListener('click', function () { trackHandoff(store); });
    return a;
  }

  var primaryHost = document.getElementById('buyPrimary');
  var othersHost  = document.getElementById('buyOthers');

  // window.TF_ONLY is set by the single-storefront pages. When present we
  // show that one storefront only — same page, same tracking, one choice.
  var only = (typeof window.TF_ONLY === 'string') ? window.TF_ONLY : null;

  var live = STOREFRONTS.filter(function (s) {
    if (!s.url) return false;
    return only ? s.key === only : true;
  });

  if (!live.length) {
    primaryHost.innerHTML =
      '<div class="pending">Rent or buy links go live on release day. ' +
      'This page is an ad destination, so the URL will not change.</div>';
  } else {
    var primary = only ? live[0]
      : (live.filter(function (s) { return s.primary; })[0] || live[0]);

    var pa = makeLink(primary, 'primary');
    pa.textContent = 'Watch on ' + primary.label;
    primaryHost.appendChild(pa);

    var note = document.createElement('p');
    note.className = 'primary-note';
    note.textContent = 'Rent or buy' + (primary.price ? ' · from ' + primary.price : '');
    primaryHost.appendChild(note);

    live.forEach(function (s) {
      if (s === primary) return;
      var a = makeLink(s, 'other');
      var name = document.createElement('span');
      name.textContent = s.label;
      a.appendChild(name);
      if (s.price) {
        var p = document.createElement('span');
        p.className = 'price';
        p.textContent = s.price;
        a.appendChild(p);
      }
      othersHost.appendChild(a);
    });
  }

  // Trailer, or poster as the fallback so the slot is never blank.
  var slot = document.getElementById('trailerSlot');
  if (TRAILER) {
    var f = document.createElement('iframe');
    f.src = 'https://player.vimeo.com/video/' + TRAILER + '?title=0&byline=0&portrait=0';
    f.title = 'That Friend — official trailer';
    f.allow = 'autoplay; fullscreen; picture-in-picture';
    f.setAttribute('allowfullscreen', '');
    slot.appendChild(f);
  } else {
    slot.style.paddingTop = '0';
    var img = document.createElement('img');
    img.className = 'poster';
    img.src = 'assets/poster.jpg';
    img.alt = 'That Friend — poster';
    slot.appendChild(img);
  }

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
