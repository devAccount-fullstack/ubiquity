/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-counters": "var(--color-blaze)",
            "--tw-prose-bullets": "var(--color-blaze)",
            color: "inherit",
            h2: {
              fontWeight: "400",
            },
          },
        },
      }),
    },
  },
};
