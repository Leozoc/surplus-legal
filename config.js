/**
 * Landing page configuration. Deployed, so public by construction.
 *
 * The PostHog key is a write-only ingest key that already ships inside the iOS
 * bundle; it cannot read anything back. Nothing else here is secret either.
 * The service role key and the vision provider's key live in the Edge Function
 * environment and must never appear in a file like this one.
 *
 * Source of truth: web/config.example.js in the Surplus repo.
 */
window.SURPLUS_CONFIG = {
  posthogKey: 'phc_oHZesxigxBVYpnqSAyjGefidz3vbXSupwXPLhmdoBbwg',
  posthogHost: 'https://eu.i.posthog.com',

  /**
   * Where "Join the beta" goes. EMPTY UNTIL THE TESTFLIGHT PUBLIC LINK EXISTS
   * — App Store Connect > TestFlight > external group > Public Link > Enable.
   * Empty renders the button disabled with an honest label rather than a dead
   * link. See SOP-07 for the launch-day swap to the App Store campaign link,
   * and log the swap date.
   */
  ctaUrl: '',

  legalBaseUrl: 'https://leozoc.github.io/surplus-legal',
};
