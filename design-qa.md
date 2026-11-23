# ARAL R12 — design QA

final result: passed

## Source and implementation evidence
- Source visual truth: `/workspace/scratch/130122654c9e/generated_images/exec-e0ee8cd3-c48c-4b27-b4ef-614ef5cd2f05.png`, selected and approved by user; durable source Library id libfile_b2438c189c1c81918752433a518c1b7d.
- Implementation: `pages/contacts-employer-feedback-r12-preview.html#contacts-wholesale`.
- Browser-rendered screenshot: `/workspace/shared/aral-r12/implementation-desktop.jpg`.
- Combined full-view and readable focused comparison: `/workspace/shared/aral-r12/comparison.jpg` (approved source above, actual implementation below).
- Viewport: Chromium desktop ~1363 CSS px, screenshot density 1. Same blue contact surface, idle state, no browser chrome inside compared component.
- Source image 1774×887 px; source component crop x77/y171–1697/y791 = 1620×620 px. Normalized by width to 1180×452 px. Actual browser component crop 1180×469 px. No stretching of implementation or invented pixel equivalence.
- The comparison includes the complete component at a readable width, so numbers, labels, logo and controls are also directly inspectable without a separate magnification.
- Screenshot/comparison paths are session evidence, not committed binary repository assets.

## Comparison history
1. [P1] MAX SVG failed to render because duplicate fill attributes made invalid XML. Removed duplicate attribute, parsed all SVGs and confirmed all four images load in browser.
2. [P2] Identity was vertically centered too low; initial component was taller than the reference. Moved identity towards upper edge, matched logo scale and tightened vertical spacing.
3. [P2] Phone type too narrow relative to approved design. Adjusted font size, tracking and line rhythm. Recaptured and compared both surfaces together.
4. Final side-by-side normalized comparison: hierarchy, two numbers, two icon controls and separately lowered VK button match the approved structure. No remaining actionable P0/P1/P2 findings.

## Required fidelity surfaces
- Fonts/typography: retained existing site's system sans stack, bold white phone numbers and heading, pale-blue labels. Phone digit grouping and content exact. Minor font rasterization differences from generated mock are P3.
- Spacing/layout: left identity, right stacked phone rows, separator, paired compact icons and standalone lower VK button. Shared left edge for phone fields and controls. Component height differs by ~4% after normalizing width, accepted for live type and accessible native controls.
- Colors/tokens: deep navy to ARAL blue gradient, white controls, pale blue labels, rounded surface consistent with approved source. User-selected gradient retained explicitly.
- Images/assets: original supplied ARAL logo retained. WhatsApp/VK are library vectors; MAX uses library chat-circle matching the generic chat cue. No screenshot used as interactive UI. Existing source logo differs slightly in hue from generated logo; library VK uses current square brand mark rather than mock's standalone glyph, P3.
- Copy/content: «ARAL в России», «Общий номер», «Менеджер», +7 (495) 101-20-19, +7 (964) 640-12-35 and «ВКонтакте» exact. No invented MAX URL or visible explanatory prompt language.

## Interaction and responsive checks
- Phone hrefs: tel:+74951012019 and tel:+79646401235.
- WhatsApp: https://wa.me/79646401235; VK: https://vk.ru/spkoils.
- MAX button tested: «Номер MAX скопирован» live status. Fallback prints number if clipboard unavailable.
- Five iframe CSS viewport widths: 390/768/834/1024/1440. No page/block horizontal overflow; exactly two messenger icons; VK button below their row at all widths.
- Browser console errors checked: no site errors after SVG correction (extension-only errors excluded).
- Browser host terminal.local timed out; equivalent running preview returned by sites-preview at 127.0.0.1:4173 was opened and used for actual browser QA. No terminal-only substitute for visual verification.
- Chromium checked; physical iPad/Safari not tested.

## Implementation checklist
- [x] Approved content reproduced with live HTML.
- [x] Broken icon fixed and all image assets loaded.
- [x] Phone, messenger, keyboard names and copy status wired.
- [x] Adaptive behavior checked.
- [x] Source and final screenshot viewed together.

## Follow-up polish
- P3: font rasterization and source brand mark differ slightly from generated mock; supplied identity retained deliberately.
- Replace MAX copy action with actual link only when user provides one.
