# Volt. interface system

The implementation lives in `src/app/design-system.css`, `tour.css` and `workshop.css`; React components use the existing Motion and Lenis integration. This is the project's Next.js/JavaScript interface, with plain CSS rather than a second utility framework.

## Colour roles

| Role | Hex | Use |
|---|---|---|
| Dominant canvas, about 60% | `#FAFBFE` | Quiet page background |
| Supporting surfaces, about 30% | `#FFFFFF`, `#F2F4F9` | Reading cards and grouped content |
| Supporting dark structure | `#10182A` | Sidebar |
| Borders | `#D7DEEB` | Groups and component boundaries |
| Main text | `#172033` | Headings and reading |
| Secondary text | `#4B5870` | Metadata and supporting explanations |
| Accent, about 10% | `#4338CA` | Primary actions and active navigation |
| Accent hover | `#3730A3` | Primary hover state |
| Accent tint | `#EEEDFF` | Selected/active supporting background |

The proportions describe visual hierarchy, not a measured pixel quota. Meaningful status colours remain available for correct/incorrect answers. Text, icons and labels communicate status alongside colour.

## Typography and spacing

Locally bundled **Plus Jakarta Sans Variable**; Arial/sans-serif fallback. A 4/8-pixel spacing rhythm uses 8, 16, 24, 32, 40 and 48 pixels, with smaller optical adjustments for borders and icons. Heading scale: 32–52 px on the overview, 28–36 px in task cards, 23–28 px for sections. Lesson reading stays selectable at **19 or 22 px**, secondary reading at 17/20 px. Metadata has a 12-pixel floor. Reading line height is approximately 1.75–1.85 with a bounded line length.

## Interaction states

- Primary: white text on `#4338CA`; hover `#3730A3`; active scale 0.98.
- Secondary: dark text on white, visible border; hover uses a pale indigo surface.
- Keyboard focus: 3-pixel indigo outline with a 3-pixel offset; native dialog traps tour focus and Escape closes it.
- Pointer hover: 240 ms button transition and at most 1.02 scale; cards lift 4 px with a restrained elevation change. Hover motion applies to precise pointing devices.
- Disabled: inactive controls are visibly subdued and use actual `disabled` attributes.
- Target sizes: primary controls at least 44 px high; tour controls at least 44 × 44 px.

## Motion and performance

Existing `LearningMotion.js` uses Motion's viewport-triggered fade/18-pixel entrance and small stagger delays. Lenis provides the shared scrolling controller. Text stays still after entry: no parallax or hover-follow movement is added to paragraphs, answer fields or diagrams that must be measured.

`prefers-reduced-motion` disables smooth scrolling and decorative transitions; the same content and task controls remain available. Native scrolling remains available. Transparent blur is confined to the header; reading cards are opaque white. The task engine and its math/validation libraries load with the workshop route, while the tour component loads on request.

No conversion funnel, forced registration or autoplay is introduced. The primary action is learning, and the tour is opt-in. Completed reading or visiting a page never grants course XP.

## Libraries and editor support

- Motion and Lenis: existing motion/scrolling layers.
- mathjs: unit conversions, authored numerical checks and an arithmetic calculator whose accepted syntax is restricted before evaluation.
- Zod: validates task records and browser-local workshop state.
- `@fontsource-variable/plus-jakarta-sans`: self-hosted font assets.
- Existing Lucide icons, ESLint, Prettier and Playwright remain in use.

`.vscode/extensions.json` supplies recommendations for ESLint, Prettier and GitHub Actions. These are recommendations; the cloud shell cannot install extensions into an absent user editor. Sourced formula SVGs remain the presentation format requested by the user.

Font and new software license/notice files are included in `public/licenses`. Design-token contrast on white: primary text 16.27:1, secondary text 7.17:1, white on the primary indigo button 7.90:1. See the quality report for the actual browser checks and their limits.
