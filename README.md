# Frontend Mentor - Grid landing page solution

This is my solution to the [Grid landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/grid-landing-page). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Open and close the navigation menu at any screen size

### Links

- Solution URL: [GitHub repository](https://github.com/e5lama5hraf/bridge-collective-landing)
- Live Site URL: [GitHub Pages](https://e5lama5hraf.github.io/bridge-collective-landing/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid and Flexbox
- Mobile-first workflow
- BEM-style class naming
- Vanilla JavaScript

### What I learned

**1. Mobile-first media queries.** The base CSS targets mobile, and `min-width` queries only add the differences for larger screens. This avoids the "gap" screens that break when you use `max-width` for a single device size.

```css
.stats { grid-template-columns: 1fr; }

@media (min-width: 768px) {
    .stats { grid-template-columns: 1fr 1fr; }
}
```

**2. Semantic and accessible HTML.** The menu toggle is a real `<button>` with `aria-expanded` and `aria-controls`, and the menu links are `<a>` elements inside a `<nav>`, so everything works with the keyboard.

```html
<button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu">
    <img src="assets/images/icon-menu.svg" alt="">
</button>
```

**3. One function owns the menu state.** JavaScript only toggles classes and attributes, and CSS decides how the menu looks. The menu also closes with the overlay, a link click, or the Escape key.

```js
function setMenu(open) {
    menu.classList.toggle("is-open", open);
    overlay.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
}
```

**4. Hairline dividers with sibling and `:nth-child` selectors.** `.stat + .stat` draws lines between stacked cards on mobile, and `:nth-child(n + 3)` / `:nth-child(even)` draw the cross in the 2x2 grid.

**5. Avoiding layout hacks.** I replaced `<br>` tags with `max-width`, fixed heights with `min-height` and padding, and long selectors with short BEM classes.

### Continued development

- Trap keyboard focus inside the menu while it is open
- Count the stat numbers up on page load (respecting `prefers-reduced-motion`)
- Load the stats from a JSON file instead of hardcoding them in the HTML

### Useful resources

- [MDN - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) - Helped me understand mobile-first breakpoints.
- [MDN - ARIA: aria-expanded](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) - Explains how to communicate the open/closed state of the menu.
- [BEM naming](https://getbem.com/naming/) - A simple way to name classes so the structure is clear.

## Author

- Eslam Ashraf - GitHub [@e5lama5hraf](https://github.com/e5lama5hraf)
