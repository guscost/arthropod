// Append global tailwind stylesheet
(function () {
    const globalStyles = document.createElement("style");
    globalStyles.type = "text/tailwindcss";
    globalStyles.innerHTML = `/* Global CSS, tailwind theme, shadcn */
@import url("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap");

@import "tailwindcss";

:root {
  --font-geist-sans: "Geist", sans-serif;
  --font-geist-mono: "Geist Mono", monospace;
}

/**
 * TailwindCSS v4.0 compatible replacement for \`tailwindcss-animate\`.
 *
 * @author Luca Bosin <https://github.com/Wombosvideo>
 * @license MIT
 */

:root {
  /* @property declarations for animation variables, to prevent inheritance */
  @property --tw-animation-delay {
    syntax: "*";
    inherits: false;
    initial-value: 0s;
  }

  @property --tw-animation-direction {
    syntax: "*";
    inherits: false;
    initial-value: normal;
  }

  @property --tw-animation-duration {
    syntax: "*";
    inherits: false;
    /* does not have an initial value in order for the \`--tw-duration\` variable to work */
  }

  @property --tw-animation-fill-mode {
    syntax: "*";
    inherits: false;
    initial-value: none;
  }

  @property --tw-animation-iteration-count {
    syntax: "*";
    inherits: false;
    initial-value: 1;
  }

  @property --tw-enter-opacity {
    syntax: "*";
    inherits: false;
    initial-value: 1;
  }

  @property --tw-enter-rotate {
    syntax: "*";
    inherits: false;
    initial-value: 0;
  }

  @property --tw-enter-scale {
    syntax: "*";
    inherits: false;
    initial-value: 1;
  }

  @property --tw-enter-translate-x {
    syntax: "*";
    inherits: false;
    initial-value: 0;
  }

  @property --tw-enter-translate-y {
    syntax: "*";
    inherits: false;
    initial-value: 0;
  }

  @property --tw-exit-opacity {
    syntax: "*";
    inherits: false;
    initial-value: 1;
  }

  @property --tw-exit-rotate {
    syntax: "*";
    inherits: false;
    initial-value: 0;
  }

  @property --tw-exit-scale {
    syntax: "*";
    inherits: false;
    initial-value: 1;
  }

  @property --tw-exit-translate-x {
    syntax: "*";
    inherits: false;
    initial-value: 0;
  }

  @property --tw-exit-translate-y {
    syntax: "*";
    inherits: false;
    initial-value: 0;
  }
}

@theme inline {
  /* Predefined values */

  --animation-delay-0: 0s;
  --animation-delay-75: 75ms;
  --animation-delay-100: 0.1s;
  --animation-delay-150: 0.15s;
  --animation-delay-200: 0.2s;
  --animation-delay-300: 0.3s;
  --animation-delay-500: 0.5s;
  --animation-delay-700: 0.7s;
  --animation-delay-1000: 1s;

  --animation-repeat-0: 0;
  --animation-repeat-1: 1;
  --animation-repeat-infinite: infinite;

  --animation-direction-normal: normal;
  --animation-direction-reverse: reverse;
  --animation-direction-alternate: alternate;
  --animation-direction-alternate-reverse: alternate-reverse;

  --animation-fill-mode-none: none;
  --animation-fill-mode-forwards: forwards;
  --animation-fill-mode-backwards: backwards;
  --animation-fill-mode-both: both;

  --percentage-0: 0;
  --percentage-5: 0.05;
  --percentage-10: 0.1;
  --percentage-15: 0.15;
  --percentage-20: 0.2;
  --percentage-25: 0.25;
  --percentage-30: 0.3;
  --percentage-35: 0.35;
  --percentage-40: 0.4;
  --percentage-45: 0.45;
  --percentage-50: 0.5;
  --percentage-55: 0.55;
  --percentage-60: 0.6;
  --percentage-65: 0.65;
  --percentage-70: 0.7;
  --percentage-75: 0.75;
  --percentage-80: 0.8;
  --percentage-85: 0.85;
  --percentage-90: 0.9;
  --percentage-95: 0.95;
  --percentage-100: 1;
  --percentage-translate-full: 1;

  /* Animations and keyframes */

  --animate-in: enter var(--tw-animation-duration, var(--tw-duration, 150ms)) var(--tw-ease, ease)
    var(--tw-animation-delay, 0s) var(--tw-animation-iteration-count, 1)
    var(--tw-animation-direction, normal) var(--tw-animation-fill-mode, none);
  --animate-out: exit var(--tw-animation-duration, var(--tw-duration, 150ms)) var(--tw-ease, ease)
    var(--tw-animation-delay, 0s) var(--tw-animation-iteration-count, 1)
    var(--tw-animation-direction, normal) var(--tw-animation-fill-mode, none);

  @keyframes enter {
    from {
      opacity: var(--tw-enter-opacity, 1);
      transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0)
        scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1))
        rotate(var(--tw-enter-rotate, 0));
    }
  }

  @keyframes exit {
    to {
      opacity: var(--tw-exit-opacity, 1);
      transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0)
        scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1))
        rotate(var(--tw-exit-rotate, 0));
    }
  }

  /*
  * Radix, Bits UI and Reka UI utilize CSS variables to define the height of Accordion and Collapsible
  * content during open/close animations. The \`--radix/bits/reka-accordion-content-height\` variables
  * control the height of Accordion content, while \`collapsible\` variables are used for Collapsibles.
  *
  * The fallback value \`auto\` is used here, but it depends on the \`interpolate-size: allow-keywords\`
  * property, which currently has limited browser support. For more details, see: 
  * <https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size>
  */

  --animate-accordion-down: accordion-down var(--tw-animation-duration, var(--tw-duration, 200ms))
    ease-out;
  --animate-accordion-up: accordion-up var(--tw-animation-duration, var(--tw-duration, 200ms))
    ease-out;
  --animate-collapsible-down: collapsible-down
    var(--tw-animation-duration, var(--tw-duration, 200ms)) ease-out;
  --animate-collapsible-up: collapsible-up var(--tw-animation-duration, var(--tw-duration, 200ms))
    ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(
        --radix-accordion-content-height,
        var(
          --bits-accordion-content-height,
          var(--reka-accordion-content-height, var(--kb-accordion-content-height, auto))
        )
      );
    }
  }

  @keyframes accordion-up {
    from {
      height: var(
        --radix-accordion-content-height,
        var(
          --bits-accordion-content-height,
          var(--reka-accordion-content-height, var(--kb-accordion-content-height, auto))
        )
      );
    }
    to {
      height: 0;
    }
  }

  @keyframes collapsible-down {
    from {
      height: 0;
    }
    to {
      height: var(
        --radix-collapsible-content-height,
        var(
          --bits-collapsible-content-height,
          var(--reka-collapsible-content-height, var(--kb-collapsible-content-height, auto))
        )
      );
    }
  }

  @keyframes collapsible-up {
    from {
      height: var(
        --radix-collapsible-content-height,
        var(
          --bits-collapsible-content-height,
          var(--reka-collapsible-content-height, var(--kb-collapsible-content-height, auto))
        )
      );
    }
    to {
      height: 0;
    }
  }

  --animate-caret-blink: caret-blink 1.25s ease-out infinite;

  @keyframes caret-blink {
    0%,
    70%,
    100% {
      opacity: 1;
    }
    20%,
    50% {
      opacity: 0;
    }
  }
}

/* Utility classes */

@utility animation-duration-* {
  --tw-animation-duration: calc(--value(number) * 1ms);
  --tw-animation-duration: --value(--animation-duration- *, [duration], "initial", [ *]);
  animation-duration: calc(--value(number) * 1ms);
  animation-duration: --value(--animation-duration- *, [duration], "initial", [ *]);
}

@utility delay-* {
  animation-delay: calc(--value(number) * 1ms);
  animation-delay: --value(--animation-delay- *, [duration], "initial", [ *]);
  --tw-animation-delay: calc(--value(number) * 1ms);
  --tw-animation-delay: --value(--animation-delay- *, [duration], "initial", [ *]);
}

@utility repeat-* {
  animation-iteration-count: --value(--animation-repeat- *, number, "initial", [ *]);
  --tw-animation-iteration-count: --value(--animation-repeat- *, number, "initial", [ *]);
}

@utility direction-* {
  animation-direction: --value(--animation-direction- *, "initial", [ *]);
  --tw-animation-direction: --value(--animation-direction- *, "initial", [ *]);
}

@utility fill-mode-* {
  animation-fill-mode: --value(--animation-fill-mode- *, "initial", [ *]);
  --tw-animation-fill-mode: --value(--animation-fill-mode- *, "initial", [ *]);
}

@utility running {
  animation-play-state: running;
}
@utility paused {
  animation-play-state: paused;
}
@utility play-state-* {
  animation-play-state: --value("initial", [ *]);
}

@utility fade-in {
  --tw-enter-opacity: 0;
}
@utility fade-in-* {
  --tw-enter-opacity: calc(--value(number) / 100);
  --tw-enter-opacity: --value(--percentage- *, [ *]);
}

@utility fade-out {
  --tw-exit-opacity: 0;
}
@utility fade-out-* {
  --tw-exit-opacity: calc(--value(number) / 100);
  --tw-exit-opacity: --value(--percentage- *, [ *]);
}

@utility zoom-in {
  --tw-enter-scale: 0;
}
@utility zoom-in-* {
  --tw-enter-scale: calc(--value(number) * 1%);
  --tw-enter-scale: calc(--value(ratio));
  --tw-enter-scale: --value(--percentage- *, [ *]);
}
@utility -zoom-in-* {
  --tw-enter-scale: calc(--value(number) * -1%);
  --tw-enter-scale: calc(--value(ratio) * -1);
  --tw-enter-scale: --value(--percentage- *, [ *]);
}

@utility zoom-out {
  --tw-exit-scale: 0;
}
@utility zoom-out-* {
  --tw-exit-scale: calc(--value(number) * 1%);
  --tw-exit-scale: calc(--value(ratio));
  --tw-exit-scale: --value(--percentage- *, [ *]);
}
@utility -zoom-out-* {
  --tw-exit-scale: calc(--value(number) * -1%);
  --tw-exit-scale: calc(--value(ratio) * -1);
  --tw-exit-scale: --value(--percentage- *, [ *]);
}

@utility spin-in {
  --tw-enter-rotate: 30deg;
}
@utility spin-in-* {
  --tw-enter-rotate: calc(--value(number) * 1deg);
  --tw-enter-rotate: calc(--value(ratio) * 360deg);
  --tw-enter-rotate: --value(--rotate- *, [ *]);
}
@utility -spin-in {
  --tw-enter-rotate: -30deg;
}
@utility -spin-in-* {
  --tw-enter-rotate: calc(--value(number) * -1deg);
  --tw-enter-rotate: calc(--value(ratio) * -360deg);
  --tw-enter-rotate: --value(--rotate- *, [ *]);
}

@utility spin-out {
  --tw-exit-rotate: 30deg;
}
@utility spin-out-* {
  --tw-exit-rotate: calc(--value(number) * 1deg);
  --tw-exit-rotate: calc(--value(ratio) * 360deg);
  --tw-exit-rotate: --value(--rotate- *, [ *]);
}
@utility -spin-out {
  --tw-exit-rotate: -30deg;
}
@utility -spin-out-* {
  --tw-exit-rotate: calc(--value(number) * -1deg);
  --tw-exit-rotate: calc(--value(ratio) * -360deg);
  --tw-exit-rotate: --value(--rotate- *, [ *]);
}

@utility slide-in-from-top {
  --tw-enter-translate-y: -100%;
}
@utility slide-in-from-top-* {
  --tw-enter-translate-y: calc(--value(integer) * var(--spacing) * -1);
  --tw-enter-translate-y: calc(--value(--percentage- *, --percentage-translate- *) * -100%);
  --tw-enter-translate-y: calc(--value(ratio) * -100%);
  --tw-enter-translate-y: calc(--value(--translate- *, [percentage], [length]) * -1);
}
@utility slide-in-from-bottom {
  --tw-enter-translate-y: 100%;
}
@utility slide-in-from-bottom-* {
  --tw-enter-translate-y: calc(--value(integer) * var(--spacing));
  --tw-enter-translate-y: calc(--value(--percentage- *, --percentage-translate- *) * 100%);
  --tw-enter-translate-y: calc(--value(ratio) * 100%);
  --tw-enter-translate-y: --value(--translate- *, [percentage], [length]);
}
@utility slide-in-from-left {
  --tw-enter-translate-x: -100%;
}
@utility slide-in-from-left-* {
  --tw-enter-translate-x: calc(--value(integer) * var(--spacing) * -1);
  --tw-enter-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * -100%);
  --tw-enter-translate-x: calc(--value(ratio) * 100%);
  --tw-enter-translate-x: calc(--value(--translate- *, [percentage], [length]) * -1);
}
@utility slide-in-from-right {
  --tw-enter-translate-x: 100%;
}
@utility slide-in-from-right-* {
  --tw-enter-translate-x: calc(--value(integer) * var(--spacing));
  --tw-enter-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * 100%);
  --tw-enter-translate-x: calc(--value(ratio) * 100%);
  --tw-enter-translate-x: --value(--translate- *, [percentage], [length]);
}
@utility slide-in-from-start {
  &:dir(ltr) {
    --tw-enter-translate-x: -100%;
  }
  &:dir(rtl) {
    --tw-enter-translate-x: 100%;
  }
}
@utility slide-in-from-start-* {
  &:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) {
    --tw-enter-translate-x: calc(--value(integer) * var(--spacing) * -1);
    --tw-enter-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * -100%);
    --tw-enter-translate-x: calc(--value(ratio) * -100%);
    --tw-enter-translate-x: calc(--value(--translate- *, [percentage], [length]) * -1);
  }
  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    --tw-enter-translate-x: calc(--value(integer) * var(--spacing));
    --tw-enter-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * 100%);
    --tw-enter-translate-x: calc(--value(ratio) * 100%);
    --tw-enter-translate-x: --value(--translate- *, [percentage], [length]);
  }
}
@utility slide-in-from-end {
  &:dir(ltr) {
    --tw-enter-translate-x: 100%;
  }
  &:dir(rtl) {
    --tw-enter-translate-x: -100%;
  }
}
@utility slide-in-from-end-* {
  &:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) {
    --tw-enter-translate-x: calc(--value(integer) * var(--spacing));
    --tw-enter-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * 100%);
    --tw-enter-translate-x: calc(--value(ratio) * 100%);
    --tw-enter-translate-x: --value(--translate- *, [percentage], [length]);
  }
  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    --tw-enter-translate-x: calc(--value(integer) * var(--spacing) * -1);
    --tw-enter-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * -100%);
    --tw-enter-translate-x: calc(--value(ratio) * -100%);
    --tw-enter-translate-x: calc(--value(--translate- *, [percentage], [length]) * -1);
  }
}

@utility slide-out-to-top {
  --tw-exit-translate-y: -100%;
}
@utility slide-out-to-top-* {
  --tw-exit-translate-y: calc(--value(integer) * var(--spacing) * -1);
  --tw-exit-translate-y: calc(--value(--percentage- *, --percentage-translate- *) * -100%);
  --tw-exit-translate-y: calc(--value(ratio) * 100%);
  --tw-exit-translate-y: calc(--value(--translate- *, [percentage], [length]) * -1);
}
@utility slide-out-to-bottom {
  --tw-exit-translate-y: 100%;
}
@utility slide-out-to-bottom-* {
  --tw-exit-translate-y: calc(--value(integer) * var(--spacing));
  --tw-exit-translate-y: calc(--value(--percentage- *, --percentage-translate- *) * 100%);
  --tw-exit-translate-y: calc(--value(ratio) * 100%);
  --tw-exit-translate-y: --value(--translate- *, [percentage], [length]);
}
@utility slide-out-to-left {
  --tw-exit-translate-x: -100%;
}
@utility slide-out-to-left-* {
  --tw-exit-translate-x: calc(--value(integer) * var(--spacing) * -1);
  --tw-exit-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * -100%);
  --tw-exit-translate-x: calc(--value(ratio) * 100%);
  --tw-exit-translate-x: calc(--value(--translate- *, [percentage], [length]) * -1);
}
@utility slide-out-to-right {
  --tw-exit-translate-x: 100%;
}
@utility slide-out-to-right-* {
  --tw-exit-translate-x: calc(--value(integer) * var(--spacing));
  --tw-exit-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * 100%);
  --tw-exit-translate-x: calc(--value(ratio) * 100%);
  --tw-exit-translate-x: --value(--translate- *, [percentage], [length]);
}
@utility slide-out-to-start {
  &:dir(ltr) {
    --tw-exit-translate-x: -100%;
  }
  &:dir(rtl) {
    --tw-exit-translate-x: 100%;
  }
}
@utility slide-out-to-start-* {
  &:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) {
    --tw-exit-translate-x: calc(--value(integer) * var(--spacing) * -1);
    --tw-exit-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * -100%);
    --tw-exit-translate-x: calc(--value(ratio) * -100%);
    --tw-exit-translate-x: calc(--value(--translate- *, [percentage], [length]) * -1);
  }
  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    --tw-exit-translate-x: calc(--value(integer) * var(--spacing));
    --tw-exit-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * 100%);
    --tw-exit-translate-x: calc(--value(ratio) * 100%);
    --tw-exit-translate-x: --value(--translate- *, [percentage], [length]);
  }
}
@utility slide-out-to-end {
  &:dir(ltr) {
    --tw-exit-translate-x: 100%;
  }
  &:dir(rtl) {
    --tw-exit-translate-x: -100%;
  }
}
@utility slide-out-to-end-* {
  &:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) {
    --tw-exit-translate-x: calc(--value(integer) * var(--spacing));
    --tw-exit-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * 100%);
    --tw-exit-translate-x: calc(--value(ratio) * 100%);
    --tw-exit-translate-x: --value(--translate- *, [percentage], [length]);
  }
  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    --tw-exit-translate-x: calc(--value(integer) * var(--spacing) * -1);
    --tw-exit-translate-x: calc(--value(--percentage- *, --percentage-translate- *) * -100%);
    --tw-exit-translate-x: calc(--value(ratio) * -100%);
    --tw-exit-translate-x: calc(--value(--translate- *, [percentage], [length]) * -1);
  }
}

/**
 * \`shadcn\` globals
 */

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/**
 * \`arthropod\` customizations
 */

button {
  cursor: pointer;
}

html {
  touch-action: manipulation;
}
`;
    document.head.appendChild(globalStyles);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwckIxQixDQUFDO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVuZCBnbG9iYWwgdGFpbHdpbmQgc3R5bGVzaGVldFxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGdsb2JhbFN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBnbG9iYWxTdHlsZXMudHlwZSA9IFwidGV4dC90YWlsd2luZGNzc1wiO1xyXG4gIGdsb2JhbFN0eWxlcy5pbm5lckhUTUwgPSBgLyogR2xvYmFsIENTUywgdGFpbHdpbmQgdGhlbWUsIHNoYWRjbiAqL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2Vpc3Q6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZWlzdCtNb25vOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuQGltcG9ydCBcInRhaWx3aW5kY3NzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgLS1mb250LWdlaXN0LXNhbnM6IFwiR2Vpc3RcIiwgc2Fucy1zZXJpZjtcclxuICAtLWZvbnQtZ2Vpc3QtbW9ubzogXCJHZWlzdCBNb25vXCIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRhaWx3aW5kQ1NTIHY0LjAgY29tcGF0aWJsZSByZXBsYWNlbWVudCBmb3IgXFxgdGFpbHdpbmRjc3MtYW5pbWF0ZVxcYC5cclxuICpcclxuICogQGF1dGhvciBMdWNhIEJvc2luIDxodHRwczovL2dpdGh1Yi5jb20vV29tYm9zdmlkZW8+XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKi9cclxuXHJcbjpyb290IHtcclxuICAvKiBAcHJvcGVydHkgZGVjbGFyYXRpb25zIGZvciBhbmltYXRpb24gdmFyaWFibGVzLCB0byBwcmV2ZW50IGluaGVyaXRhbmNlICovXHJcbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWRlbGF5IHtcclxuICAgIHN5bnRheDogXCIqXCI7XHJcbiAgICBpbmhlcml0czogZmFsc2U7XHJcbiAgICBpbml0aWFsLXZhbHVlOiAwcztcclxuICB9XHJcblxyXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24ge1xyXG4gICAgc3ludGF4OiBcIipcIjtcclxuICAgIGluaGVyaXRzOiBmYWxzZTtcclxuICAgIGluaXRpYWwtdmFsdWU6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiB7XHJcbiAgICBzeW50YXg6IFwiKlwiO1xyXG4gICAgaW5oZXJpdHM6IGZhbHNlO1xyXG4gICAgLyogZG9lcyBub3QgaGF2ZSBhbiBpbml0aWFsIHZhbHVlIGluIG9yZGVyIGZvciB0aGUgXFxgLS10dy1kdXJhdGlvblxcYCB2YXJpYWJsZSB0byB3b3JrICovXHJcbiAgfVxyXG5cclxuICBAcHJvcGVydHkgLS10dy1hbmltYXRpb24tZmlsbC1tb2RlIHtcclxuICAgIHN5bnRheDogXCIqXCI7XHJcbiAgICBpbmhlcml0czogZmFsc2U7XHJcbiAgICBpbml0aWFsLXZhbHVlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCB7XHJcbiAgICBzeW50YXg6IFwiKlwiO1xyXG4gICAgaW5oZXJpdHM6IGZhbHNlO1xyXG4gICAgaW5pdGlhbC12YWx1ZTogMTtcclxuICB9XHJcblxyXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLW9wYWNpdHkge1xyXG4gICAgc3ludGF4OiBcIipcIjtcclxuICAgIGluaGVyaXRzOiBmYWxzZTtcclxuICAgIGluaXRpYWwtdmFsdWU6IDE7XHJcbiAgfVxyXG5cclxuICBAcHJvcGVydHkgLS10dy1lbnRlci1yb3RhdGUge1xyXG4gICAgc3ludGF4OiBcIipcIjtcclxuICAgIGluaGVyaXRzOiBmYWxzZTtcclxuICAgIGluaXRpYWwtdmFsdWU6IDA7XHJcbiAgfVxyXG5cclxuICBAcHJvcGVydHkgLS10dy1lbnRlci1zY2FsZSB7XHJcbiAgICBzeW50YXg6IFwiKlwiO1xyXG4gICAgaW5oZXJpdHM6IGZhbHNlO1xyXG4gICAgaW5pdGlhbC12YWx1ZTogMTtcclxuICB9XHJcblxyXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLXRyYW5zbGF0ZS14IHtcclxuICAgIHN5bnRheDogXCIqXCI7XHJcbiAgICBpbmhlcml0czogZmFsc2U7XHJcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xyXG4gIH1cclxuXHJcbiAgQHByb3BlcnR5IC0tdHctZW50ZXItdHJhbnNsYXRlLXkge1xyXG4gICAgc3ludGF4OiBcIipcIjtcclxuICAgIGluaGVyaXRzOiBmYWxzZTtcclxuICAgIGluaXRpYWwtdmFsdWU6IDA7XHJcbiAgfVxyXG5cclxuICBAcHJvcGVydHkgLS10dy1leGl0LW9wYWNpdHkge1xyXG4gICAgc3ludGF4OiBcIipcIjtcclxuICAgIGluaGVyaXRzOiBmYWxzZTtcclxuICAgIGluaXRpYWwtdmFsdWU6IDE7XHJcbiAgfVxyXG5cclxuICBAcHJvcGVydHkgLS10dy1leGl0LXJvdGF0ZSB7XHJcbiAgICBzeW50YXg6IFwiKlwiO1xyXG4gICAgaW5oZXJpdHM6IGZhbHNlO1xyXG4gICAgaW5pdGlhbC12YWx1ZTogMDtcclxuICB9XHJcblxyXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtc2NhbGUge1xyXG4gICAgc3ludGF4OiBcIipcIjtcclxuICAgIGluaGVyaXRzOiBmYWxzZTtcclxuICAgIGluaXRpYWwtdmFsdWU6IDE7XHJcbiAgfVxyXG5cclxuICBAcHJvcGVydHkgLS10dy1leGl0LXRyYW5zbGF0ZS14IHtcclxuICAgIHN5bnRheDogXCIqXCI7XHJcbiAgICBpbmhlcml0czogZmFsc2U7XHJcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xyXG4gIH1cclxuXHJcbiAgQHByb3BlcnR5IC0tdHctZXhpdC10cmFuc2xhdGUteSB7XHJcbiAgICBzeW50YXg6IFwiKlwiO1xyXG4gICAgaW5oZXJpdHM6IGZhbHNlO1xyXG4gICAgaW5pdGlhbC12YWx1ZTogMDtcclxuICB9XHJcbn1cclxuXHJcbkB0aGVtZSBpbmxpbmUge1xyXG4gIC8qIFByZWRlZmluZWQgdmFsdWVzICovXHJcblxyXG4gIC0tYW5pbWF0aW9uLWRlbGF5LTA6IDBzO1xyXG4gIC0tYW5pbWF0aW9uLWRlbGF5LTc1OiA3NW1zO1xyXG4gIC0tYW5pbWF0aW9uLWRlbGF5LTEwMDogMC4xcztcclxuICAtLWFuaW1hdGlvbi1kZWxheS0xNTA6IDAuMTVzO1xyXG4gIC0tYW5pbWF0aW9uLWRlbGF5LTIwMDogMC4ycztcclxuICAtLWFuaW1hdGlvbi1kZWxheS0zMDA6IDAuM3M7XHJcbiAgLS1hbmltYXRpb24tZGVsYXktNTAwOiAwLjVzO1xyXG4gIC0tYW5pbWF0aW9uLWRlbGF5LTcwMDogMC43cztcclxuICAtLWFuaW1hdGlvbi1kZWxheS0xMDAwOiAxcztcclxuXHJcbiAgLS1hbmltYXRpb24tcmVwZWF0LTA6IDA7XHJcbiAgLS1hbmltYXRpb24tcmVwZWF0LTE6IDE7XHJcbiAgLS1hbmltYXRpb24tcmVwZWF0LWluZmluaXRlOiBpbmZpbml0ZTtcclxuXHJcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLW5vcm1hbDogbm9ybWFsO1xyXG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1yZXZlcnNlOiByZXZlcnNlO1xyXG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1hbHRlcm5hdGU6IGFsdGVybmF0ZTtcclxuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tYWx0ZXJuYXRlLXJldmVyc2U6IGFsdGVybmF0ZS1yZXZlcnNlO1xyXG5cclxuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtbm9uZTogbm9uZTtcclxuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtZm9yd2FyZHM6IGZvcndhcmRzO1xyXG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1iYWNrd2FyZHM6IGJhY2t3YXJkcztcclxuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtYm90aDogYm90aDtcclxuXHJcbiAgLS1wZXJjZW50YWdlLTA6IDA7XHJcbiAgLS1wZXJjZW50YWdlLTU6IDAuMDU7XHJcbiAgLS1wZXJjZW50YWdlLTEwOiAwLjE7XHJcbiAgLS1wZXJjZW50YWdlLTE1OiAwLjE1O1xyXG4gIC0tcGVyY2VudGFnZS0yMDogMC4yO1xyXG4gIC0tcGVyY2VudGFnZS0yNTogMC4yNTtcclxuICAtLXBlcmNlbnRhZ2UtMzA6IDAuMztcclxuICAtLXBlcmNlbnRhZ2UtMzU6IDAuMzU7XHJcbiAgLS1wZXJjZW50YWdlLTQwOiAwLjQ7XHJcbiAgLS1wZXJjZW50YWdlLTQ1OiAwLjQ1O1xyXG4gIC0tcGVyY2VudGFnZS01MDogMC41O1xyXG4gIC0tcGVyY2VudGFnZS01NTogMC41NTtcclxuICAtLXBlcmNlbnRhZ2UtNjA6IDAuNjtcclxuICAtLXBlcmNlbnRhZ2UtNjU6IDAuNjU7XHJcbiAgLS1wZXJjZW50YWdlLTcwOiAwLjc7XHJcbiAgLS1wZXJjZW50YWdlLTc1OiAwLjc1O1xyXG4gIC0tcGVyY2VudGFnZS04MDogMC44O1xyXG4gIC0tcGVyY2VudGFnZS04NTogMC44NTtcclxuICAtLXBlcmNlbnRhZ2UtOTA6IDAuOTtcclxuICAtLXBlcmNlbnRhZ2UtOTU6IDAuOTU7XHJcbiAgLS1wZXJjZW50YWdlLTEwMDogMTtcclxuICAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLWZ1bGw6IDE7XHJcblxyXG4gIC8qIEFuaW1hdGlvbnMgYW5kIGtleWZyYW1lcyAqL1xyXG5cclxuICAtLWFuaW1hdGUtaW46IGVudGVyIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDE1MG1zKSkgdmFyKC0tdHctZWFzZSwgZWFzZSlcclxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kZWxheSwgMHMpIHZhcigtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIDEpXHJcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xyXG4gIC0tYW5pbWF0ZS1vdXQ6IGV4aXQgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMTUwbXMpKSB2YXIoLS10dy1lYXNlLCBlYXNlKVxyXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcclxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCkgdmFyKC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSwgbm9uZSk7XHJcblxyXG4gIEBrZXlmcmFtZXMgZW50ZXIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IHZhcigtLXR3LWVudGVyLW9wYWNpdHksIDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS14LCAwKSwgdmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXksIDApLCAwKVxyXG4gICAgICAgIHNjYWxlM2QodmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSksIHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSlcclxuICAgICAgICByb3RhdGUodmFyKC0tdHctZW50ZXItcm90YXRlLCAwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGV4aXQge1xyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiB2YXIoLS10dy1leGl0LW9wYWNpdHksIDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXgsIDApLCB2YXIoLS10dy1leGl0LXRyYW5zbGF0ZS15LCAwKSwgMClcclxuICAgICAgICBzY2FsZTNkKHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpLCB2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSkpXHJcbiAgICAgICAgcm90YXRlKHZhcigtLXR3LWV4aXQtcm90YXRlLCAwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICogUmFkaXgsIEJpdHMgVUkgYW5kIFJla2EgVUkgdXRpbGl6ZSBDU1MgdmFyaWFibGVzIHRvIGRlZmluZSB0aGUgaGVpZ2h0IG9mIEFjY29yZGlvbiBhbmQgQ29sbGFwc2libGVcclxuICAqIGNvbnRlbnQgZHVyaW5nIG9wZW4vY2xvc2UgYW5pbWF0aW9ucy4gVGhlIFxcYC0tcmFkaXgvYml0cy9yZWthLWFjY29yZGlvbi1jb250ZW50LWhlaWdodFxcYCB2YXJpYWJsZXNcclxuICAqIGNvbnRyb2wgdGhlIGhlaWdodCBvZiBBY2NvcmRpb24gY29udGVudCwgd2hpbGUgXFxgY29sbGFwc2libGVcXGAgdmFyaWFibGVzIGFyZSB1c2VkIGZvciBDb2xsYXBzaWJsZXMuXHJcbiAgKlxyXG4gICogVGhlIGZhbGxiYWNrIHZhbHVlIFxcYGF1dG9cXGAgaXMgdXNlZCBoZXJlLCBidXQgaXQgZGVwZW5kcyBvbiB0aGUgXFxgaW50ZXJwb2xhdGUtc2l6ZTogYWxsb3cta2V5d29yZHNcXGBcclxuICAqIHByb3BlcnR5LCB3aGljaCBjdXJyZW50bHkgaGFzIGxpbWl0ZWQgYnJvd3NlciBzdXBwb3J0LiBGb3IgbW9yZSBkZXRhaWxzLCBzZWU6IFxyXG4gICogPGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbnRlcnBvbGF0ZS1zaXplPlxyXG4gICovXHJcblxyXG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tZG93bjogYWNjb3JkaW9uLWRvd24gdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKVxyXG4gICAgZWFzZS1vdXQ7XHJcbiAgLS1hbmltYXRlLWFjY29yZGlvbi11cDogYWNjb3JkaW9uLXVwIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSlcclxuICAgIGVhc2Utb3V0O1xyXG4gIC0tYW5pbWF0ZS1jb2xsYXBzaWJsZS1kb3duOiBjb2xsYXBzaWJsZS1kb3duXHJcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykpIGVhc2Utb3V0O1xyXG4gIC0tYW5pbWF0ZS1jb2xsYXBzaWJsZS11cDogY29sbGFwc2libGUtdXAgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKVxyXG4gICAgZWFzZS1vdXQ7XHJcblxyXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLWRvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgaGVpZ2h0OiB2YXIoXHJcbiAgICAgICAgLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXHJcbiAgICAgICAgdmFyKFxyXG4gICAgICAgICAgLS1iaXRzLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcclxuICAgICAgICAgIHZhcigtLXJla2EtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIGF1dG8pKVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLXVwIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBoZWlnaHQ6IHZhcihcclxuICAgICAgICAtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcclxuICAgICAgICB2YXIoXHJcbiAgICAgICAgICAtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxyXG4gICAgICAgICAgdmFyKC0tcmVrYS1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIHZhcigtLWtiLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgYXV0bykpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGNvbGxhcHNpYmxlLWRvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgaGVpZ2h0OiB2YXIoXHJcbiAgICAgICAgLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcclxuICAgICAgICB2YXIoXHJcbiAgICAgICAgICAtLWJpdHMtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXHJcbiAgICAgICAgICB2YXIoLS1yZWthLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgYXV0bykpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBjb2xsYXBzaWJsZS11cCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgaGVpZ2h0OiB2YXIoXHJcbiAgICAgICAgLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcclxuICAgICAgICB2YXIoXHJcbiAgICAgICAgICAtLWJpdHMtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXHJcbiAgICAgICAgICB2YXIoLS1yZWthLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgYXV0bykpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAtLWFuaW1hdGUtY2FyZXQtYmxpbms6IGNhcmV0LWJsaW5rIDEuMjVzIGVhc2Utb3V0IGluZmluaXRlO1xyXG5cclxuICBAa2V5ZnJhbWVzIGNhcmV0LWJsaW5rIHtcclxuICAgIDAlLFxyXG4gICAgNzAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAyMCUsXHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogVXRpbGl0eSBjbGFzc2VzICovXHJcblxyXG5AdXRpbGl0eSBhbmltYXRpb24tZHVyYXRpb24tKiB7XHJcbiAgLS10dy1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcclxuICAtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kdXJhdGlvbi0gKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsgKl0pO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kdXJhdGlvbi0gKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsgKl0pO1xyXG59XHJcblxyXG5AdXRpbGl0eSBkZWxheS0qIHtcclxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0tdmFsdWUoLS1hbmltYXRpb24tZGVsYXktICosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbICpdKTtcclxuICAtLXR3LWFuaW1hdGlvbi1kZWxheTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xyXG4gIC0tdHctYW5pbWF0aW9uLWRlbGF5OiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRlbGF5LSAqLCBbZHVyYXRpb25dLCBcImluaXRpYWxcIiwgWyAqXSk7XHJcbn1cclxuXHJcbkB1dGlsaXR5IHJlcGVhdC0qIHtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAtLXZhbHVlKC0tYW5pbWF0aW9uLXJlcGVhdC0gKiwgbnVtYmVyLCBcImluaXRpYWxcIiwgWyAqXSk7XHJcbiAgLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAtLXZhbHVlKC0tYW5pbWF0aW9uLXJlcGVhdC0gKiwgbnVtYmVyLCBcImluaXRpYWxcIiwgWyAqXSk7XHJcbn1cclxuXHJcbkB1dGlsaXR5IGRpcmVjdGlvbi0qIHtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRpcmVjdGlvbi0gKiwgXCJpbml0aWFsXCIsIFsgKl0pO1xyXG4gIC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kaXJlY3Rpb24tICosIFwiaW5pdGlhbFwiLCBbICpdKTtcclxufVxyXG5cclxuQHV0aWxpdHkgZmlsbC1tb2RlLSoge1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IC0tdmFsdWUoLS1hbmltYXRpb24tZmlsbC1tb2RlLSAqLCBcImluaXRpYWxcIiwgWyAqXSk7XHJcbiAgLS10dy1hbmltYXRpb24tZmlsbC1tb2RlOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWZpbGwtbW9kZS0gKiwgXCJpbml0aWFsXCIsIFsgKl0pO1xyXG59XHJcblxyXG5AdXRpbGl0eSBydW5uaW5nIHtcclxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxufVxyXG5AdXRpbGl0eSBwYXVzZWQge1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuQHV0aWxpdHkgcGxheS1zdGF0ZS0qIHtcclxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogLS12YWx1ZShcImluaXRpYWxcIiwgWyAqXSk7XHJcbn1cclxuXHJcbkB1dGlsaXR5IGZhZGUtaW4ge1xyXG4gIC0tdHctZW50ZXItb3BhY2l0eTogMDtcclxufVxyXG5AdXRpbGl0eSBmYWRlLWluLSoge1xyXG4gIC0tdHctZW50ZXItb3BhY2l0eTogY2FsYygtLXZhbHVlKG51bWJlcikgLyAxMDApO1xyXG4gIC0tdHctZW50ZXItb3BhY2l0eTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xyXG59XHJcblxyXG5AdXRpbGl0eSBmYWRlLW91dCB7XHJcbiAgLS10dy1leGl0LW9wYWNpdHk6IDA7XHJcbn1cclxuQHV0aWxpdHkgZmFkZS1vdXQtKiB7XHJcbiAgLS10dy1leGl0LW9wYWNpdHk6IGNhbGMoLS12YWx1ZShudW1iZXIpIC8gMTAwKTtcclxuICAtLXR3LWV4aXQtb3BhY2l0eTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xyXG59XHJcblxyXG5AdXRpbGl0eSB6b29tLWluIHtcclxuICAtLXR3LWVudGVyLXNjYWxlOiAwO1xyXG59XHJcbkB1dGlsaXR5IHpvb20taW4tKiB7XHJcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxJSk7XHJcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSk7XHJcbiAgLS10dy1lbnRlci1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xyXG59XHJcbkB1dGlsaXR5IC16b29tLWluLSoge1xyXG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogLTElKTtcclxuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEpO1xyXG4gIC0tdHctZW50ZXItc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcclxufVxyXG5cclxuQHV0aWxpdHkgem9vbS1vdXQge1xyXG4gIC0tdHctZXhpdC1zY2FsZTogMDtcclxufVxyXG5AdXRpbGl0eSB6b29tLW91dC0qIHtcclxuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMSUpO1xyXG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSk7XHJcbiAgLS10dy1leGl0LXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgWyAqXSk7XHJcbn1cclxuQHV0aWxpdHkgLXpvb20tb3V0LSoge1xyXG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAtMSUpO1xyXG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xKTtcclxuICAtLXR3LWV4aXQtc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcclxufVxyXG5cclxuQHV0aWxpdHkgc3Bpbi1pbiB7XHJcbiAgLS10dy1lbnRlci1yb3RhdGU6IDMwZGVnO1xyXG59XHJcbkB1dGlsaXR5IHNwaW4taW4tKiB7XHJcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMWRlZyk7XHJcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAzNjBkZWcpO1xyXG4gIC0tdHctZW50ZXItcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSAqLCBbICpdKTtcclxufVxyXG5AdXRpbGl0eSAtc3Bpbi1pbiB7XHJcbiAgLS10dy1lbnRlci1yb3RhdGU6IC0zMGRlZztcclxufVxyXG5AdXRpbGl0eSAtc3Bpbi1pbi0qIHtcclxuICAtLXR3LWVudGVyLXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAtMWRlZyk7XHJcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMzYwZGVnKTtcclxuICAtLXR3LWVudGVyLXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0gKiwgWyAqXSk7XHJcbn1cclxuXHJcbkB1dGlsaXR5IHNwaW4tb3V0IHtcclxuICAtLXR3LWV4aXQtcm90YXRlOiAzMGRlZztcclxufVxyXG5AdXRpbGl0eSBzcGluLW91dC0qIHtcclxuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFkZWcpO1xyXG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAzNjBkZWcpO1xyXG4gIC0tdHctZXhpdC1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtICosIFsgKl0pO1xyXG59XHJcbkB1dGlsaXR5IC1zcGluLW91dCB7XHJcbiAgLS10dy1leGl0LXJvdGF0ZTogLTMwZGVnO1xyXG59XHJcbkB1dGlsaXR5IC1zcGluLW91dC0qIHtcclxuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xZGVnKTtcclxuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTM2MGRlZyk7XHJcbiAgLS10dy1leGl0LXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0gKiwgWyAqXSk7XHJcbn1cclxuXHJcbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tdG9wIHtcclxuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAtMTAwJTtcclxufVxyXG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXRvcC0qIHtcclxuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcclxuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcclxuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xyXG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1ib3R0b20ge1xyXG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IDEwMCU7XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1ib3R0b20tKiB7XHJcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xyXG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XHJcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xyXG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xyXG59XHJcbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tbGVmdCB7XHJcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLTEwMCU7XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1sZWZ0LSoge1xyXG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xyXG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xyXG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcclxuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xyXG59XHJcbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tcmlnaHQge1xyXG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IDEwMCU7XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1yaWdodC0qIHtcclxuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XHJcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcclxuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XHJcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1zdGFydCB7XHJcbiAgJjpkaXIobHRyKSB7XHJcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtMTAwJTtcclxuICB9XHJcbiAgJjpkaXIocnRsKSB7XHJcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAxMDAlO1xyXG4gIH1cclxufVxyXG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXN0YXJ0LSoge1xyXG4gICY6d2hlcmUoOmRpcihsdHIpLCBbZGlyPVwibHRyXCJdLCBbZGlyPVwibHRyXCJdICopIHtcclxuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xyXG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XHJcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xyXG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcclxuICB9XHJcbiAgJjp3aGVyZSg6ZGlyKHJ0bCksIFtkaXI9XCJydGxcIl0sIFtkaXI9XCJydGxcIl0gKikge1xyXG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xyXG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcclxuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcclxuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xyXG4gIH1cclxufVxyXG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWVuZCB7XHJcbiAgJjpkaXIobHRyKSB7XHJcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAxMDAlO1xyXG4gIH1cclxuICAmOmRpcihydGwpIHtcclxuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0xMDAlO1xyXG4gIH1cclxufVxyXG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWVuZC0qIHtcclxuICAmOndoZXJlKDpkaXIobHRyKSwgW2Rpcj1cImx0clwiXSwgW2Rpcj1cImx0clwiXSAqKSB7XHJcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XHJcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xyXG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xyXG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XHJcbiAgfVxyXG4gICY6d2hlcmUoOmRpcihydGwpLCBbZGlyPVwicnRsXCJdLCBbZGlyPVwicnRsXCJdICopIHtcclxuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xyXG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XHJcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xyXG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcclxuICB9XHJcbn1cclxuXHJcbkB1dGlsaXR5IHNsaWRlLW91dC10by10b3Age1xyXG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogLTEwMCU7XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXRvcC0qIHtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xyXG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XHJcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XHJcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xyXG59XHJcbkB1dGlsaXR5IHNsaWRlLW91dC10by1ib3R0b20ge1xyXG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogMTAwJTtcclxufVxyXG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tYm90dG9tLSoge1xyXG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xyXG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xyXG59XHJcbkB1dGlsaXR5IHNsaWRlLW91dC10by1sZWZ0IHtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xyXG59XHJcbkB1dGlsaXR5IHNsaWRlLW91dC10by1sZWZ0LSoge1xyXG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XHJcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXJpZ2h0IHtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXJpZ2h0LSoge1xyXG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xyXG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcclxuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xyXG59XHJcbkB1dGlsaXR5IHNsaWRlLW91dC10by1zdGFydCB7XHJcbiAgJjpkaXIobHRyKSB7XHJcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xyXG4gIH1cclxuICAmOmRpcihydGwpIHtcclxuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogMTAwJTtcclxuICB9XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXN0YXJ0LSoge1xyXG4gICY6d2hlcmUoOmRpcihsdHIpLCBbZGlyPVwibHRyXCJdLCBbZGlyPVwibHRyXCJdICopIHtcclxuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XHJcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xyXG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xyXG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xyXG4gIH1cclxuICAmOndoZXJlKDpkaXIocnRsKSwgW2Rpcj1cInJ0bFwiXSwgW2Rpcj1cInJ0bFwiXSAqKSB7XHJcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcclxuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcclxuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xyXG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcclxuICB9XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWVuZCB7XHJcbiAgJjpkaXIobHRyKSB7XHJcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XHJcbiAgfVxyXG4gICY6ZGlyKHJ0bCkge1xyXG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtMTAwJTtcclxuICB9XHJcbn1cclxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWVuZC0qIHtcclxuICAmOndoZXJlKDpkaXIobHRyKSwgW2Rpcj1cImx0clwiXSwgW2Rpcj1cImx0clwiXSAqKSB7XHJcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcclxuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcclxuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xyXG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcclxuICB9XHJcbiAgJjp3aGVyZSg6ZGlyKHJ0bCksIFtkaXI9XCJydGxcIl0sIFtkaXI9XCJydGxcIl0gKikge1xyXG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcclxuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XHJcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XHJcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXFxgc2hhZGNuXFxgIGdsb2JhbHNcclxuICovXHJcblxyXG5AY3VzdG9tLXZhcmlhbnQgZGFyayAoJjppcyguZGFyayAqKSk7XHJcblxyXG5AdGhlbWUgaW5saW5lIHtcclxuICAtLWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIC0tY29sb3ItZm9yZWdyb3VuZDogdmFyKC0tZm9yZWdyb3VuZCk7XHJcbiAgLS1mb250LXNhbnM6IHZhcigtLWZvbnQtZ2Vpc3Qtc2Fucyk7XHJcbiAgLS1mb250LW1vbm86IHZhcigtLWZvbnQtZ2Vpc3QtbW9ubyk7XHJcbiAgLS1jb2xvci1zaWRlYmFyLXJpbmc6IHZhcigtLXNpZGViYXItcmluZyk7XHJcbiAgLS1jb2xvci1zaWRlYmFyLWJvcmRlcjogdmFyKC0tc2lkZWJhci1ib3JkZXIpO1xyXG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCk7XHJcbiAgLS1jb2xvci1zaWRlYmFyLWFjY2VudDogdmFyKC0tc2lkZWJhci1hY2NlbnQpO1xyXG4gIC0tY29sb3Itc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKTtcclxuICAtLWNvbG9yLXNpZGViYXItcHJpbWFyeTogdmFyKC0tc2lkZWJhci1wcmltYXJ5KTtcclxuICAtLWNvbG9yLXNpZGViYXItZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKTtcclxuICAtLWNvbG9yLXNpZGViYXI6IHZhcigtLXNpZGViYXIpO1xyXG4gIC0tY29sb3ItY2hhcnQtNTogdmFyKC0tY2hhcnQtNSk7XHJcbiAgLS1jb2xvci1jaGFydC00OiB2YXIoLS1jaGFydC00KTtcclxuICAtLWNvbG9yLWNoYXJ0LTM6IHZhcigtLWNoYXJ0LTMpO1xyXG4gIC0tY29sb3ItY2hhcnQtMjogdmFyKC0tY2hhcnQtMik7XHJcbiAgLS1jb2xvci1jaGFydC0xOiB2YXIoLS1jaGFydC0xKTtcclxuICAtLWNvbG9yLXJpbmc6IHZhcigtLXJpbmcpO1xyXG4gIC0tY29sb3ItaW5wdXQ6IHZhcigtLWlucHV0KTtcclxuICAtLWNvbG9yLWJvcmRlcjogdmFyKC0tYm9yZGVyKTtcclxuICAtLWNvbG9yLWRlc3RydWN0aXZlOiB2YXIoLS1kZXN0cnVjdGl2ZSk7XHJcbiAgLS1jb2xvci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tYWNjZW50LWZvcmVncm91bmQpO1xyXG4gIC0tY29sb3ItYWNjZW50OiB2YXIoLS1hY2NlbnQpO1xyXG4gIC0tY29sb3ItbXV0ZWQtZm9yZWdyb3VuZDogdmFyKC0tbXV0ZWQtZm9yZWdyb3VuZCk7XHJcbiAgLS1jb2xvci1tdXRlZDogdmFyKC0tbXV0ZWQpO1xyXG4gIC0tY29sb3Itc2Vjb25kYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNlY29uZGFyeS1mb3JlZ3JvdW5kKTtcclxuICAtLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAtLWNvbG9yLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKTtcclxuICAtLWNvbG9yLXByaW1hcnk6IHZhcigtLXByaW1hcnkpO1xyXG4gIC0tY29sb3ItcG9wb3Zlci1mb3JlZ3JvdW5kOiB2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpO1xyXG4gIC0tY29sb3ItcG9wb3ZlcjogdmFyKC0tcG9wb3Zlcik7XHJcbiAgLS1jb2xvci1jYXJkLWZvcmVncm91bmQ6IHZhcigtLWNhcmQtZm9yZWdyb3VuZCk7XHJcbiAgLS1jb2xvci1jYXJkOiB2YXIoLS1jYXJkKTtcclxuICAtLXJhZGl1cy1zbTogY2FsYyh2YXIoLS1yYWRpdXMpIC0gNHB4KTtcclxuICAtLXJhZGl1cy1tZDogY2FsYyh2YXIoLS1yYWRpdXMpIC0gMnB4KTtcclxuICAtLXJhZGl1cy1sZzogdmFyKC0tcmFkaXVzKTtcclxuICAtLXJhZGl1cy14bDogY2FsYyh2YXIoLS1yYWRpdXMpICsgNHB4KTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tcmFkaXVzOiAwLjYyNXJlbTtcclxuICAtLWJhY2tncm91bmQ6IG9rbGNoKDEgMCAwKTtcclxuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XHJcbiAgLS1jYXJkOiBva2xjaCgxIDAgMCk7XHJcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XHJcbiAgLS1wb3BvdmVyOiBva2xjaCgxIDAgMCk7XHJcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XHJcbiAgLS1wcmltYXJ5OiBva2xjaCgwLjIwNSAwIDApO1xyXG4gIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xyXG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjk3IDAgMCk7XHJcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcclxuICAtLW11dGVkOiBva2xjaCgwLjk3IDAgMCk7XHJcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjU1NiAwIDApO1xyXG4gIC0tYWNjZW50OiBva2xjaCgwLjk3IDAgMCk7XHJcbiAgLS1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcclxuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjU3NyAwLjI0NSAyNy4zMjUpO1xyXG4gIC0tYm9yZGVyOiBva2xjaCgwLjkyMiAwIDApO1xyXG4gIC0taW5wdXQ6IG9rbGNoKDAuOTIyIDAgMCk7XHJcbiAgLS1yaW5nOiBva2xjaCgwLjcwOCAwIDApO1xyXG4gIC0tY2hhcnQtMTogb2tsY2goMC42NDYgMC4yMjIgNDEuMTE2KTtcclxuICAtLWNoYXJ0LTI6IG9rbGNoKDAuNiAwLjExOCAxODQuNzA0KTtcclxuICAtLWNoYXJ0LTM6IG9rbGNoKDAuMzk4IDAuMDcgMjI3LjM5Mik7XHJcbiAgLS1jaGFydC00OiBva2xjaCgwLjgyOCAwLjE4OSA4NC40MjkpO1xyXG4gIC0tY2hhcnQtNTogb2tsY2goMC43NjkgMC4xODggNzAuMDgpO1xyXG4gIC0tc2lkZWJhcjogb2tsY2goMC45ODUgMCAwKTtcclxuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcclxuICAtLXNpZGViYXItcHJpbWFyeTogb2tsY2goMC4yMDUgMCAwKTtcclxuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xyXG4gIC0tc2lkZWJhci1hY2NlbnQ6IG9rbGNoKDAuOTcgMCAwKTtcclxuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XHJcbiAgLS1zaWRlYmFyLWJvcmRlcjogb2tsY2goMC45MjIgMCAwKTtcclxuICAtLXNpZGViYXItcmluZzogb2tsY2goMC43MDggMCAwKTtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gIC0tYmFja2dyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcclxuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XHJcbiAgLS1jYXJkOiBva2xjaCgwLjIwNSAwIDApO1xyXG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xyXG4gIC0tcG9wb3Zlcjogb2tsY2goMC4yMDUgMCAwKTtcclxuICAtLXBvcG92ZXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcclxuICAtLXByaW1hcnk6IG9rbGNoKDAuOTIyIDAgMCk7XHJcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XHJcbiAgLS1zZWNvbmRhcnk6IG9rbGNoKDAuMjY5IDAgMCk7XHJcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcclxuICAtLW11dGVkOiBva2xjaCgwLjI2OSAwIDApO1xyXG4gIC0tbXV0ZWQtZm9yZWdyb3VuZDogb2tsY2goMC43MDggMCAwKTtcclxuICAtLWFjY2VudDogb2tsY2goMC4yNjkgMCAwKTtcclxuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xyXG4gIC0tZGVzdHJ1Y3RpdmU6IG9rbGNoKDAuNzA0IDAuMTkxIDIyLjIxNik7XHJcbiAgLS1ib3JkZXI6IG9rbGNoKDEgMCAwIC8gMTAlKTtcclxuICAtLWlucHV0OiBva2xjaCgxIDAgMCAvIDE1JSk7XHJcbiAgLS1yaW5nOiBva2xjaCgwLjU1NiAwIDApO1xyXG4gIC0tY2hhcnQtMTogb2tsY2goMC40ODggMC4yNDMgMjY0LjM3Nik7XHJcbiAgLS1jaGFydC0yOiBva2xjaCgwLjY5NiAwLjE3IDE2Mi40OCk7XHJcbiAgLS1jaGFydC0zOiBva2xjaCgwLjc2OSAwLjE4OCA3MC4wOCk7XHJcbiAgLS1jaGFydC00OiBva2xjaCgwLjYyNyAwLjI2NSAzMDMuOSk7XHJcbiAgLS1jaGFydC01OiBva2xjaCgwLjY0NSAwLjI0NiAxNi40MzkpO1xyXG4gIC0tc2lkZWJhcjogb2tsY2goMC4yMDUgMCAwKTtcclxuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcclxuICAtLXNpZGViYXItcHJpbWFyeTogb2tsY2goMC40ODggMC4yNDMgMjY0LjM3Nik7XHJcbiAgLS1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcclxuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xyXG4gIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcclxuICAtLXNpZGViYXItYm9yZGVyOiBva2xjaCgxIDAgMCAvIDEwJSk7XHJcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNTU2IDAgMCk7XHJcbn1cclxuXHJcbkBsYXllciBiYXNlIHtcclxuICAqIHtcclxuICAgIEBhcHBseSBib3JkZXItYm9yZGVyIG91dGxpbmUtcmluZy81MDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBAYXBwbHkgYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXFxgYXJ0aHJvcG9kXFxgIGN1c3RvbWl6YXRpb25zXHJcbiAqL1xyXG5cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG59XHJcbmA7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZXMpO1xyXG59KSgpO1xyXG4iXX0=