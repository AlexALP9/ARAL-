# Current Figma mapping

File: https://www.figma.com/design/xgN1ERA1pWbl2x8MvOiA5m

Desktop animation: 93:52 → static final 125:56 at 4.8 seconds.
Mobile animation: 98:54 → static final 125:406 at 4.8 seconds.
The terminal frames have no motion tracks or automatic return. Figma native timeline looping is a player setting not exposed by the API; the one-way final-frame navigation is the prototype workaround. Browser implementation independently terminates its RAF after one run. Figma camera uses sampled keys; browser uses a continuous formula. Pointer parallax/reduced motion are browser features.

Older 90:49 / 90:74 are historical design frames, not the current runtime.
