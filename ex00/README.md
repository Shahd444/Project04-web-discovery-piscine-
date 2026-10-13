# Personal Portfolio

This project is my personal portfolio for Project04, Exercise 00. It is
written from scratch with HTML5, CSS3, and JavaScript ES6+. No frameworks,
templates, or UI libraries are used.

## Project structure

```text
ex00/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── profile.jpg.jpeg
```

The page contains all required portfolio sections:

- Header and navigation bar
- Home introduction
- About Me section with a profile photo
- Skills grid
- Project showcase for Projects 00, 01, 02, and 03
- Hobbies
- Contact form
- Footer

## Theme switcher event lifecycle

1. The user clicks the `Change Theme` button in `index.html`.
2. The browser fires a `click` event for the button.
3. The event listener in `script.js` calls the `changeTheme` callback.
4. The callback toggles the `dark-theme` class on the `<body>` element with
   `classList.toggle()`.
5. CSS rules in `style.css` that target `body.dark-theme` are applied or
   removed, changing the page colors dynamically.

## Responsive design

The layout uses CSS Grid for the Skills section and CSS Flexbox for the
navigation, hobbies, and project cards. A media query at `max-width: 600px`
wraps navigation links, changes spacing and heading size, stacks project
cards, keeps form controls within the viewport, and makes the contact button
easy to tap on mobile devices.