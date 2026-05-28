"use strict";
// Append global tailwind stylesheet
(function () {
    const globalStyles = document.createElement("style");
    globalStyles.type = "text/tailwindcss";
    globalStyles.innerHTML = `/* Global CSS, tailwind theme, shadcn */
@import url("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap");

@import "tailwindcss";

:root {
  --font-sans: "Geist", sans-serif;
  --font-geist-mono: "Geist Mono", monospace;
}

/**
 * TailwindCSS v4.0 compatible replacement for \`tailwindcss-animate\`.
 *
 * @author Luca Bosin <https://github.com/Wombosvideo>
 * @license MIT
 */

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

@property --tw-enter-blur {
  syntax: "*";
  inherits: false;
  initial-value: 0;
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

@property --tw-exit-blur {
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
      filter: blur(var(--tw-enter-blur, 0));
    }
  }

  @keyframes exit {
    to {
      opacity: var(--tw-exit-opacity, 1);
      transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0)
        scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1))
        rotate(var(--tw-exit-rotate, 0));
      filter: blur(var(--tw-exit-blur, 0));
    }
  }

  --animate-accordion-down: accordion-down var(--tw-animation-duration, var(--tw-duration, 200ms))
    var(--tw-ease, ease-out) var(--tw-animation-delay, 0s) var(--tw-animation-iteration-count, 1)
    var(--tw-animation-direction, normal) var(--tw-animation-fill-mode, none);
  --animate-accordion-up: accordion-up var(--tw-animation-duration, var(--tw-duration, 200ms))
    var(--tw-ease, ease-out) var(--tw-animation-delay, 0s) var(--tw-animation-iteration-count, 1)
    var(--tw-animation-direction, normal) var(--tw-animation-fill-mode, none);
  --animate-collapsible-down: collapsible-down
    var(--tw-animation-duration, var(--tw-duration, 200ms)) var(--tw-ease, ease-out)
    var(--tw-animation-delay, 0s) var(--tw-animation-iteration-count, 1)
    var(--tw-animation-direction, normal) var(--tw-animation-fill-mode, none);
  --animate-collapsible-up: collapsible-up var(--tw-animation-duration, var(--tw-duration, 200ms))
    var(--tw-ease, ease-out) var(--tw-animation-delay, 0s) var(--tw-animation-iteration-count, 1)
    var(--tw-animation-direction, normal) var(--tw-animation-fill-mode, none);

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(
        --radix-accordion-content-height,
        var(
          --bits-accordion-content-height,
          var(
            --reka-accordion-content-height,
            var(--kb-accordion-content-height, var(--ngp-accordion-content-height, auto))
          )
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
          var(
            --reka-accordion-content-height,
            var(--kb-accordion-content-height, var(--ngp-accordion-content-height, auto))
          )
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
  --tw-animation-duration: --value(--animation-duration-*, [duration], "initial", [*]);
  animation-duration: calc(--value(number) * 1ms);
  animation-duration: --value(--animation-duration-*, [duration], "initial", [*]);
}

@utility delay-* {
  animation-delay: calc(--value(number) * 1ms);
  animation-delay: --value(--animation-delay-*, [duration], "initial", [*]);
  --tw-animation-delay: calc(--value(number) * 1ms);
  --tw-animation-delay: --value(--animation-delay-*, [duration], "initial", [*]);
}

@utility repeat-* {
  animation-iteration-count: --value(--animation-repeat-*, number, "initial", [*]);
  --tw-animation-iteration-count: --value(--animation-repeat-*, number, "initial", [*]);
}

@utility direction-* {
  animation-direction: --value(--animation-direction-*, "initial", [*]);
  --tw-animation-direction: --value(--animation-direction-*, "initial", [*]);
}

@utility fill-mode-* {
  animation-fill-mode: --value(--animation-fill-mode-*, "initial", [*]);
  --tw-animation-fill-mode: --value(--animation-fill-mode-*, "initial", [*]);
}

@utility running {
  animation-play-state: running;
}
@utility paused {
  animation-play-state: paused;
}
@utility play-state-* {
  animation-play-state: --value("initial", [*]);
}

@utility blur-in {
  --tw-enter-blur: 20px;
}
@utility blur-in-* {
  --tw-enter-blur: calc(--value(number) * 1px);
  --tw-enter-blur: --value(--blur-*, [*]);
}

@utility blur-out {
  --tw-exit-blur: 20px;
}
@utility blur-out-* {
  --tw-exit-blur: calc(--value(number) * 1px);
  --tw-exit-blur: --value(--blur-*, [*]);
}

@utility fade-in {
  --tw-enter-opacity: 0;
}
@utility fade-in-* {
  --tw-enter-opacity: calc(--value(number) / 100);
  --tw-enter-opacity: --value(--percentage-*, [*]);
}

@utility fade-out {
  --tw-exit-opacity: 0;
}
@utility fade-out-* {
  --tw-exit-opacity: calc(--value(number) / 100);
  --tw-exit-opacity: --value(--percentage-*, [*]);
}

@utility zoom-in {
  --tw-enter-scale: 0;
}
@utility zoom-in-* {
  --tw-enter-scale: calc(--value(number) * 1%);
  --tw-enter-scale: calc(--value(ratio));
  --tw-enter-scale: --value(--percentage-*, [*]);
}
@utility -zoom-in-* {
  --tw-enter-scale: calc(--value(number) * -1%);
  --tw-enter-scale: calc(--value(ratio) * -1);
  --tw-enter-scale: --value(--percentage-*, [*]);
}

@utility zoom-out {
  --tw-exit-scale: 0;
}
@utility zoom-out-* {
  --tw-exit-scale: calc(--value(number) * 1%);
  --tw-exit-scale: calc(--value(ratio));
  --tw-exit-scale: --value(--percentage-*, [*]);
}
@utility -zoom-out-* {
  --tw-exit-scale: calc(--value(number) * -1%);
  --tw-exit-scale: calc(--value(ratio) * -1);
  --tw-exit-scale: --value(--percentage-*, [*]);
}

@utility spin-in {
  --tw-enter-rotate: 30deg;
}
@utility spin-in-* {
  --tw-enter-rotate: calc(--value(number) * 1deg);
  --tw-enter-rotate: calc(--value(ratio) * 360deg);
  --tw-enter-rotate: --value(--rotate-*, [*]);
}
@utility -spin-in {
  --tw-enter-rotate: -30deg;
}
@utility -spin-in-* {
  --tw-enter-rotate: calc(--value(number) * -1deg);
  --tw-enter-rotate: calc(--value(ratio) * -360deg);
  --tw-enter-rotate: --value(--rotate-*, [*]);
}

@utility spin-out {
  --tw-exit-rotate: 30deg;
}
@utility spin-out-* {
  --tw-exit-rotate: calc(--value(number) * 1deg);
  --tw-exit-rotate: calc(--value(ratio) * 360deg);
  --tw-exit-rotate: --value(--rotate-*, [*]);
}
@utility -spin-out {
  --tw-exit-rotate: -30deg;
}
@utility -spin-out-* {
  --tw-exit-rotate: calc(--value(number) * -1deg);
  --tw-exit-rotate: calc(--value(ratio) * -360deg);
  --tw-exit-rotate: --value(--rotate-*, [*]);
}

@utility slide-in-from-top {
  --tw-enter-translate-y: -100%;
}
@utility slide-in-from-top-* {
  --tw-enter-translate-y: calc(--value(integer) * var(--spacing) * -1);
  --tw-enter-translate-y: calc(--value(--percentage-*, --percentage-translate-*) * -100%);
  --tw-enter-translate-y: calc(--value(ratio) * -100%);
  --tw-enter-translate-y: calc(--value(--translate-*, [percentage], [length]) * -1);
}
@utility slide-in-from-bottom {
  --tw-enter-translate-y: 100%;
}
@utility slide-in-from-bottom-* {
  --tw-enter-translate-y: calc(--value(integer) * var(--spacing));
  --tw-enter-translate-y: calc(--value(--percentage-*, --percentage-translate-*) * 100%);
  --tw-enter-translate-y: calc(--value(ratio) * 100%);
  --tw-enter-translate-y: --value(--translate-*, [percentage], [length]);
}
@utility slide-in-from-left {
  --tw-enter-translate-x: -100%;
}
@utility slide-in-from-left-* {
  --tw-enter-translate-x: calc(--value(integer) * var(--spacing) * -1);
  --tw-enter-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * -100%);
  --tw-enter-translate-x: calc(--value(ratio) * -100%);
  --tw-enter-translate-x: calc(--value(--translate-*, [percentage], [length]) * -1);
}
@utility slide-in-from-right {
  --tw-enter-translate-x: 100%;
}
@utility slide-in-from-right-* {
  --tw-enter-translate-x: calc(--value(integer) * var(--spacing));
  --tw-enter-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * 100%);
  --tw-enter-translate-x: calc(--value(ratio) * 100%);
  --tw-enter-translate-x: --value(--translate-*, [percentage], [length]);
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
    --tw-enter-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * -100%);
    --tw-enter-translate-x: calc(--value(ratio) * -100%);
    --tw-enter-translate-x: calc(--value(--translate-*, [percentage], [length]) * -1);
  }
  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    --tw-enter-translate-x: calc(--value(integer) * var(--spacing));
    --tw-enter-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * 100%);
    --tw-enter-translate-x: calc(--value(ratio) * 100%);
    --tw-enter-translate-x: --value(--translate-*, [percentage], [length]);
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
    --tw-enter-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * 100%);
    --tw-enter-translate-x: calc(--value(ratio) * 100%);
    --tw-enter-translate-x: --value(--translate-*, [percentage], [length]);
  }
  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    --tw-enter-translate-x: calc(--value(integer) * var(--spacing) * -1);
    --tw-enter-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * -100%);
    --tw-enter-translate-x: calc(--value(ratio) * -100%);
    --tw-enter-translate-x: calc(--value(--translate-*, [percentage], [length]) * -1);
  }
}

@utility slide-out-to-top {
  --tw-exit-translate-y: -100%;
}
@utility slide-out-to-top-* {
  --tw-exit-translate-y: calc(--value(integer) * var(--spacing) * -1);
  --tw-exit-translate-y: calc(--value(--percentage-*, --percentage-translate-*) * -100%);
  --tw-exit-translate-y: calc(--value(ratio) * -100%);
  --tw-exit-translate-y: calc(--value(--translate-*, [percentage], [length]) * -1);
}
@utility slide-out-to-bottom {
  --tw-exit-translate-y: 100%;
}
@utility slide-out-to-bottom-* {
  --tw-exit-translate-y: calc(--value(integer) * var(--spacing));
  --tw-exit-translate-y: calc(--value(--percentage-*, --percentage-translate-*) * 100%);
  --tw-exit-translate-y: calc(--value(ratio) * 100%);
  --tw-exit-translate-y: --value(--translate-*, [percentage], [length]);
}
@utility slide-out-to-left {
  --tw-exit-translate-x: -100%;
}
@utility slide-out-to-left-* {
  --tw-exit-translate-x: calc(--value(integer) * var(--spacing) * -1);
  --tw-exit-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * -100%);
  --tw-exit-translate-x: calc(--value(ratio) * -100%);
  --tw-exit-translate-x: calc(--value(--translate-*, [percentage], [length]) * -1);
}
@utility slide-out-to-right {
  --tw-exit-translate-x: 100%;
}
@utility slide-out-to-right-* {
  --tw-exit-translate-x: calc(--value(integer) * var(--spacing));
  --tw-exit-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * 100%);
  --tw-exit-translate-x: calc(--value(ratio) * 100%);
  --tw-exit-translate-x: --value(--translate-*, [percentage], [length]);
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
    --tw-exit-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * -100%);
    --tw-exit-translate-x: calc(--value(ratio) * -100%);
    --tw-exit-translate-x: calc(--value(--translate-*, [percentage], [length]) * -1);
  }
  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    --tw-exit-translate-x: calc(--value(integer) * var(--spacing));
    --tw-exit-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * 100%);
    --tw-exit-translate-x: calc(--value(ratio) * 100%);
    --tw-exit-translate-x: --value(--translate-*, [percentage], [length]);
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
    --tw-exit-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * 100%);
    --tw-exit-translate-x: calc(--value(ratio) * 100%);
    --tw-exit-translate-x: --value(--translate-*, [percentage], [length]);
  }
  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    --tw-exit-translate-x: calc(--value(integer) * var(--spacing) * -1);
    --tw-exit-translate-x: calc(--value(--percentage-*, --percentage-translate-*) * -100%);
    --tw-exit-translate-x: calc(--value(ratio) * -100%);
    --tw-exit-translate-x: calc(--value(--translate-*, [percentage], [length]) * -1);
  }
}

/**
 * \`shadcn\` globals
 */

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-heading: var(--font-sans);
  --font-sans: var(--font-sans);
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
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
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
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --radius: 0.625rem;
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
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
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
  html {
    @apply font-sans;
  }
}

/**
 * \`import @shadcn/tailwind.css\` contents
 */
@theme inline {
  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(
        --radix-accordion-content-height,
        var(--accordion-panel-height, auto)
      );
    }
  }

  @keyframes accordion-up {
    from {
      height: var(
        --radix-accordion-content-height,
        var(--accordion-panel-height, auto)
      );
    }
    to {
      height: 0;
    }
  }
}

/* Custom variants */
@custom-variant data-open {
  &:where([data-state="open"]),
  &:where([data-open]:not([data-open="false"])) {
    @slot;
  }
}

@custom-variant data-closed {
  &:where([data-state="closed"]),
  &:where([data-closed]:not([data-closed="false"])) {
    @slot;
  }
}

@custom-variant data-checked {
  &:where([data-state="checked"]),
  &:where([data-checked]:not([data-checked="false"])) {
    @slot;
  }
}

@custom-variant data-unchecked {
  &:where([data-state="unchecked"]),
  &:where([data-unchecked]:not([data-unchecked="false"])) {
    @slot;
  }
}

@custom-variant data-selected {
  &:where([data-selected="true"]) {
    @slot;
  }
}

@custom-variant data-disabled {
  &:where([data-disabled="true"]),
  &:where([data-disabled]:not([data-disabled="false"])) {
    @slot;
  }
}

@custom-variant data-active {
  &:where([data-state="active"]),
  &:where([data-active]:not([data-active="false"])) {
    @slot;
  }
}

@custom-variant data-horizontal {
  &:where([data-orientation="horizontal"]) {
    @slot;
  }
}

@custom-variant data-vertical {
  &:where([data-orientation="vertical"]) {
    @slot;
  }
}

@utility no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9DQUFvQztBQUNwQyxDQUFDO0lBQ0MsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxZQUFZLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ3ZDLFlBQVksQ0FBQyxTQUFTLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnMEIxQixDQUFDO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVuZCBnbG9iYWwgdGFpbHdpbmQgc3R5bGVzaGVldFxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBnbG9iYWxTdHlsZXMudHlwZSA9IFwidGV4dC90YWlsd2luZGNzc1wiO1xuICBnbG9iYWxTdHlsZXMuaW5uZXJIVE1MID0gYC8qIEdsb2JhbCBDU1MsIHRhaWx3aW5kIHRoZW1lLCBzaGFkY24gKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZWlzdDp3Z2h0QDEwMC4uOTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZWlzdCtNb25vOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwXCIpO1xuXG5AaW1wb3J0IFwidGFpbHdpbmRjc3NcIjtcblxuOnJvb3Qge1xuICAtLWZvbnQtc2FuczogXCJHZWlzdFwiLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtZ2Vpc3QtbW9ubzogXCJHZWlzdCBNb25vXCIsIG1vbm9zcGFjZTtcbn1cblxuLyoqXG4gKiBUYWlsd2luZENTUyB2NC4wIGNvbXBhdGlibGUgcmVwbGFjZW1lbnQgZm9yIFxcYHRhaWx3aW5kY3NzLWFuaW1hdGVcXGAuXG4gKlxuICogQGF1dGhvciBMdWNhIEJvc2luIDxodHRwczovL2dpdGh1Yi5jb20vV29tYm9zdmlkZW8+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG4vKiBAcHJvcGVydHkgZGVjbGFyYXRpb25zIGZvciBhbmltYXRpb24gdmFyaWFibGVzLCB0byBwcmV2ZW50IGluaGVyaXRhbmNlICovXG5AcHJvcGVydHkgLS10dy1hbmltYXRpb24tZGVsYXkge1xuICBzeW50YXg6IFwiKlwiO1xuICBpbmhlcml0czogZmFsc2U7XG4gIGluaXRpYWwtdmFsdWU6IDBzO1xufVxuXG5AcHJvcGVydHkgLS10dy1hbmltYXRpb24tZGlyZWN0aW9uIHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xuICBpbml0aWFsLXZhbHVlOiBub3JtYWw7XG59XG5cbkBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiB7XG4gIHN5bnRheDogXCIqXCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbiAgLyogZG9lcyBub3QgaGF2ZSBhbiBpbml0aWFsIHZhbHVlIGluIG9yZGVyIGZvciB0aGUgXFxgLS10dy1kdXJhdGlvblxcYCB2YXJpYWJsZSB0byB3b3JrICovXG59XG5cbkBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUge1xuICBzeW50YXg6IFwiKlwiO1xuICBpbmhlcml0czogZmFsc2U7XG4gIGluaXRpYWwtdmFsdWU6IG5vbmU7XG59XG5cbkBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQge1xuICBzeW50YXg6IFwiKlwiO1xuICBpbmhlcml0czogZmFsc2U7XG4gIGluaXRpYWwtdmFsdWU6IDE7XG59XG5cbkBwcm9wZXJ0eSAtLXR3LWVudGVyLWJsdXIge1xuICBzeW50YXg6IFwiKlwiO1xuICBpbmhlcml0czogZmFsc2U7XG4gIGluaXRpYWwtdmFsdWU6IDA7XG59XG5cbkBwcm9wZXJ0eSAtLXR3LWVudGVyLW9wYWNpdHkge1xuICBzeW50YXg6IFwiKlwiO1xuICBpbmhlcml0czogZmFsc2U7XG4gIGluaXRpYWwtdmFsdWU6IDE7XG59XG5cbkBwcm9wZXJ0eSAtLXR3LWVudGVyLXJvdGF0ZSB7XG4gIHN5bnRheDogXCIqXCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbiAgaW5pdGlhbC12YWx1ZTogMDtcbn1cblxuQHByb3BlcnR5IC0tdHctZW50ZXItc2NhbGUge1xuICBzeW50YXg6IFwiKlwiO1xuICBpbmhlcml0czogZmFsc2U7XG4gIGluaXRpYWwtdmFsdWU6IDE7XG59XG5cbkBwcm9wZXJ0eSAtLXR3LWVudGVyLXRyYW5zbGF0ZS14IHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xuICBpbml0aWFsLXZhbHVlOiAwO1xufVxuXG5AcHJvcGVydHkgLS10dy1lbnRlci10cmFuc2xhdGUteSB7XG4gIHN5bnRheDogXCIqXCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbiAgaW5pdGlhbC12YWx1ZTogMDtcbn1cblxuQHByb3BlcnR5IC0tdHctZXhpdC1ibHVyIHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xuICBpbml0aWFsLXZhbHVlOiAwO1xufVxuXG5AcHJvcGVydHkgLS10dy1leGl0LW9wYWNpdHkge1xuICBzeW50YXg6IFwiKlwiO1xuICBpbmhlcml0czogZmFsc2U7XG4gIGluaXRpYWwtdmFsdWU6IDE7XG59XG5cbkBwcm9wZXJ0eSAtLXR3LWV4aXQtcm90YXRlIHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xuICBpbml0aWFsLXZhbHVlOiAwO1xufVxuXG5AcHJvcGVydHkgLS10dy1leGl0LXNjYWxlIHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xuICBpbml0aWFsLXZhbHVlOiAxO1xufVxuXG5AcHJvcGVydHkgLS10dy1leGl0LXRyYW5zbGF0ZS14IHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xuICBpbml0aWFsLXZhbHVlOiAwO1xufVxuXG5AcHJvcGVydHkgLS10dy1leGl0LXRyYW5zbGF0ZS15IHtcbiAgc3ludGF4OiBcIipcIjtcbiAgaW5oZXJpdHM6IGZhbHNlO1xuICBpbml0aWFsLXZhbHVlOiAwO1xufVxuXG5AdGhlbWUgaW5saW5lIHtcbiAgLyogUHJlZGVmaW5lZCB2YWx1ZXMgKi9cblxuICAtLWFuaW1hdGlvbi1kZWxheS0wOiAwcztcbiAgLS1hbmltYXRpb24tZGVsYXktNzU6IDc1bXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTEwMDogMC4xcztcbiAgLS1hbmltYXRpb24tZGVsYXktMTUwOiAwLjE1cztcbiAgLS1hbmltYXRpb24tZGVsYXktMjAwOiAwLjJzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0zMDA6IDAuM3M7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTUwMDogMC41cztcbiAgLS1hbmltYXRpb24tZGVsYXktNzAwOiAwLjdzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0xMDAwOiAxcztcblxuICAtLWFuaW1hdGlvbi1yZXBlYXQtMDogMDtcbiAgLS1hbmltYXRpb24tcmVwZWF0LTE6IDE7XG4gIC0tYW5pbWF0aW9uLXJlcGVhdC1pbmZpbml0ZTogaW5maW5pdGU7XG5cbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLW5vcm1hbDogbm9ybWFsO1xuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tcmV2ZXJzZTogcmV2ZXJzZTtcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLWFsdGVybmF0ZTogYWx0ZXJuYXRlO1xuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tYWx0ZXJuYXRlLXJldmVyc2U6IGFsdGVybmF0ZS1yZXZlcnNlO1xuXG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1ub25lOiBub25lO1xuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtZm9yd2FyZHM6IGZvcndhcmRzO1xuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtYmFja3dhcmRzOiBiYWNrd2FyZHM7XG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1ib3RoOiBib3RoO1xuXG4gIC0tcGVyY2VudGFnZS0wOiAwO1xuICAtLXBlcmNlbnRhZ2UtNTogMC4wNTtcbiAgLS1wZXJjZW50YWdlLTEwOiAwLjE7XG4gIC0tcGVyY2VudGFnZS0xNTogMC4xNTtcbiAgLS1wZXJjZW50YWdlLTIwOiAwLjI7XG4gIC0tcGVyY2VudGFnZS0yNTogMC4yNTtcbiAgLS1wZXJjZW50YWdlLTMwOiAwLjM7XG4gIC0tcGVyY2VudGFnZS0zNTogMC4zNTtcbiAgLS1wZXJjZW50YWdlLTQwOiAwLjQ7XG4gIC0tcGVyY2VudGFnZS00NTogMC40NTtcbiAgLS1wZXJjZW50YWdlLTUwOiAwLjU7XG4gIC0tcGVyY2VudGFnZS01NTogMC41NTtcbiAgLS1wZXJjZW50YWdlLTYwOiAwLjY7XG4gIC0tcGVyY2VudGFnZS02NTogMC42NTtcbiAgLS1wZXJjZW50YWdlLTcwOiAwLjc7XG4gIC0tcGVyY2VudGFnZS03NTogMC43NTtcbiAgLS1wZXJjZW50YWdlLTgwOiAwLjg7XG4gIC0tcGVyY2VudGFnZS04NTogMC44NTtcbiAgLS1wZXJjZW50YWdlLTkwOiAwLjk7XG4gIC0tcGVyY2VudGFnZS05NTogMC45NTtcbiAgLS1wZXJjZW50YWdlLTEwMDogMTtcbiAgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS1mdWxsOiAxO1xuXG4gIC8qIEFuaW1hdGlvbnMgYW5kIGtleWZyYW1lcyAqL1xuXG4gIC0tYW5pbWF0ZS1pbjogZW50ZXIgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMTUwbXMpKSB2YXIoLS10dy1lYXNlLCBlYXNlKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kZWxheSwgMHMpIHZhcigtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIDEpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKSB2YXIoLS10dy1hbmltYXRpb24tZmlsbC1tb2RlLCBub25lKTtcbiAgLS1hbmltYXRlLW91dDogZXhpdCB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAxNTBtcykpIHZhcigtLXR3LWVhc2UsIGVhc2UpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xuXG4gIEBrZXlmcmFtZXMgZW50ZXIge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogdmFyKC0tdHctZW50ZXItb3BhY2l0eSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS14LCAwKSwgdmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXksIDApLCAwKVxuICAgICAgICBzY2FsZTNkKHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSwgdmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSkpXG4gICAgICAgIHJvdGF0ZSh2YXIoLS10dy1lbnRlci1yb3RhdGUsIDApKTtcbiAgICAgIGZpbHRlcjogYmx1cih2YXIoLS10dy1lbnRlci1ibHVyLCAwKSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBleGl0IHtcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiB2YXIoLS10dy1leGl0LW9wYWNpdHksIDEpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS10dy1leGl0LXRyYW5zbGF0ZS14LCAwKSwgdmFyKC0tdHctZXhpdC10cmFuc2xhdGUteSwgMCksIDApXG4gICAgICAgIHNjYWxlM2QodmFyKC0tdHctZXhpdC1zY2FsZSwgMSksIHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpLCB2YXIoLS10dy1leGl0LXNjYWxlLCAxKSlcbiAgICAgICAgcm90YXRlKHZhcigtLXR3LWV4aXQtcm90YXRlLCAwKSk7XG4gICAgICBmaWx0ZXI6IGJsdXIodmFyKC0tdHctZXhpdC1ibHVyLCAwKSk7XG4gICAgfVxuICB9XG5cbiAgLS1hbmltYXRlLWFjY29yZGlvbi1kb3duOiBhY2NvcmRpb24tZG93biB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykpXG4gICAgdmFyKC0tdHctZWFzZSwgZWFzZS1vdXQpIHZhcigtLXR3LWFuaW1hdGlvbi1kZWxheSwgMHMpIHZhcigtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIDEpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKSB2YXIoLS10dy1hbmltYXRpb24tZmlsbC1tb2RlLCBub25lKTtcbiAgLS1hbmltYXRlLWFjY29yZGlvbi11cDogYWNjb3JkaW9uLXVwIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSlcbiAgICB2YXIoLS10dy1lYXNlLCBlYXNlLW91dCkgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xuICAtLWFuaW1hdGUtY29sbGFwc2libGUtZG93bjogY29sbGFwc2libGUtZG93blxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSkgdmFyKC0tdHctZWFzZSwgZWFzZS1vdXQpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xuICAtLWFuaW1hdGUtY29sbGFwc2libGUtdXA6IGNvbGxhcHNpYmxlLXVwIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSlcbiAgICB2YXIoLS10dy1lYXNlLCBlYXNlLW91dCkgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xuXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLWRvd24ge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICAgIHZhcihcbiAgICAgICAgICAgIC0tcmVrYS1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgICB2YXIoLS1rYi1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIHZhcigtLW5ncC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIGF1dG8pKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi11cCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICAgIHZhcihcbiAgICAgICAgICAgIC0tcmVrYS1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgICB2YXIoLS1rYi1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIHZhcigtLW5ncC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIGF1dG8pKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgY29sbGFwc2libGUtZG93biB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogdmFyKFxuICAgICAgICAtLXJhZGl4LWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS1iaXRzLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICAgIHZhcigtLXJla2EtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsIHZhcigtLWtiLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNvbGxhcHNpYmxlLXVwIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogdmFyKFxuICAgICAgICAtLXJhZGl4LWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS1iaXRzLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICAgIHZhcigtLXJla2EtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsIHZhcigtLWtiLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgfVxuXG4gIC0tYW5pbWF0ZS1jYXJldC1ibGluazogY2FyZXQtYmxpbmsgMS4yNXMgZWFzZS1vdXQgaW5maW5pdGU7XG5cbiAgQGtleWZyYW1lcyBjYXJldC1ibGluayB7XG4gICAgMCUsXG4gICAgNzAlLFxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMjAlLFxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxufVxuXG4vKiBVdGlsaXR5IGNsYXNzZXMgKi9cblxuQHV0aWxpdHkgYW5pbWF0aW9uLWR1cmF0aW9uLSoge1xuICAtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xuICAtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kdXJhdGlvbi0qLCBbZHVyYXRpb25dLCBcImluaXRpYWxcIiwgWypdKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFtcyk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kdXJhdGlvbi0qLCBbZHVyYXRpb25dLCBcImluaXRpYWxcIiwgWypdKTtcbn1cblxuQHV0aWxpdHkgZGVsYXktKiB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xuICBhbmltYXRpb24tZGVsYXk6IC0tdmFsdWUoLS1hbmltYXRpb24tZGVsYXktKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsqXSk7XG4gIC0tdHctYW5pbWF0aW9uLWRlbGF5OiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFtcyk7XG4gIC0tdHctYW5pbWF0aW9uLWRlbGF5OiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRlbGF5LSosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbKl0pO1xufVxuXG5AdXRpbGl0eSByZXBlYXQtKiB7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IC0tdmFsdWUoLS1hbmltYXRpb24tcmVwZWF0LSosIG51bWJlciwgXCJpbml0aWFsXCIsIFsqXSk7XG4gIC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogLS12YWx1ZSgtLWFuaW1hdGlvbi1yZXBlYXQtKiwgbnVtYmVyLCBcImluaXRpYWxcIiwgWypdKTtcbn1cblxuQHV0aWxpdHkgZGlyZWN0aW9uLSoge1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRpcmVjdGlvbi0qLCBcImluaXRpYWxcIiwgWypdKTtcbiAgLS10dy1hbmltYXRpb24tZGlyZWN0aW9uOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRpcmVjdGlvbi0qLCBcImluaXRpYWxcIiwgWypdKTtcbn1cblxuQHV0aWxpdHkgZmlsbC1tb2RlLSoge1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWZpbGwtbW9kZS0qLCBcImluaXRpYWxcIiwgWypdKTtcbiAgLS10dy1hbmltYXRpb24tZmlsbC1tb2RlOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWZpbGwtbW9kZS0qLCBcImluaXRpYWxcIiwgWypdKTtcbn1cblxuQHV0aWxpdHkgcnVubmluZyB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuQHV0aWxpdHkgcGF1c2VkIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cbkB1dGlsaXR5IHBsYXktc3RhdGUtKiB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiAtLXZhbHVlKFwiaW5pdGlhbFwiLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBibHVyLWluIHtcbiAgLS10dy1lbnRlci1ibHVyOiAyMHB4O1xufVxuQHV0aWxpdHkgYmx1ci1pbi0qIHtcbiAgLS10dy1lbnRlci1ibHVyOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFweCk7XG4gIC0tdHctZW50ZXItYmx1cjogLS12YWx1ZSgtLWJsdXItKiwgWypdKTtcbn1cblxuQHV0aWxpdHkgYmx1ci1vdXQge1xuICAtLXR3LWV4aXQtYmx1cjogMjBweDtcbn1cbkB1dGlsaXR5IGJsdXItb3V0LSoge1xuICAtLXR3LWV4aXQtYmx1cjogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxcHgpO1xuICAtLXR3LWV4aXQtYmx1cjogLS12YWx1ZSgtLWJsdXItKiwgWypdKTtcbn1cblxuQHV0aWxpdHkgZmFkZS1pbiB7XG4gIC0tdHctZW50ZXItb3BhY2l0eTogMDtcbn1cbkB1dGlsaXR5IGZhZGUtaW4tKiB7XG4gIC0tdHctZW50ZXItb3BhY2l0eTogY2FsYygtLXZhbHVlKG51bWJlcikgLyAxMDApO1xuICAtLXR3LWVudGVyLW9wYWNpdHk6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIFsqXSk7XG59XG5cbkB1dGlsaXR5IGZhZGUtb3V0IHtcbiAgLS10dy1leGl0LW9wYWNpdHk6IDA7XG59XG5AdXRpbGl0eSBmYWRlLW91dC0qIHtcbiAgLS10dy1leGl0LW9wYWNpdHk6IGNhbGMoLS12YWx1ZShudW1iZXIpIC8gMTAwKTtcbiAgLS10dy1leGl0LW9wYWNpdHk6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIFsqXSk7XG59XG5cbkB1dGlsaXR5IHpvb20taW4ge1xuICAtLXR3LWVudGVyLXNjYWxlOiAwO1xufVxuQHV0aWxpdHkgem9vbS1pbi0qIHtcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxJSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShyYXRpbykpO1xuICAtLXR3LWVudGVyLXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCBbKl0pO1xufVxuQHV0aWxpdHkgLXpvb20taW4tKiB7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogLTElKTtcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xKTtcbiAgLS10dy1lbnRlci1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgWypdKTtcbn1cblxuQHV0aWxpdHkgem9vbS1vdXQge1xuICAtLXR3LWV4aXQtc2NhbGU6IDA7XG59XG5AdXRpbGl0eSB6b29tLW91dC0qIHtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDElKTtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUocmF0aW8pKTtcbiAgLS10dy1leGl0LXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCBbKl0pO1xufVxuQHV0aWxpdHkgLXpvb20tb3V0LSoge1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogLTElKTtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEpO1xuICAtLXR3LWV4aXQtc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIFsqXSk7XG59XG5cbkB1dGlsaXR5IHNwaW4taW4ge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogMzBkZWc7XG59XG5AdXRpbGl0eSBzcGluLWluLSoge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAzNjBkZWcpO1xuICAtLXR3LWVudGVyLXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0qLCBbKl0pO1xufVxuQHV0aWxpdHkgLXNwaW4taW4ge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogLTMwZGVnO1xufVxuQHV0aWxpdHkgLXNwaW4taW4tKiB7XG4gIC0tdHctZW50ZXItcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMzYwZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtKiwgWypdKTtcbn1cblxuQHV0aWxpdHkgc3Bpbi1vdXQge1xuICAtLXR3LWV4aXQtcm90YXRlOiAzMGRlZztcbn1cbkB1dGlsaXR5IHNwaW4tb3V0LSoge1xuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFkZWcpO1xuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogMzYwZGVnKTtcbiAgLS10dy1leGl0LXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0qLCBbKl0pO1xufVxuQHV0aWxpdHkgLXNwaW4tb3V0IHtcbiAgLS10dy1leGl0LXJvdGF0ZTogLTMwZGVnO1xufVxuQHV0aWxpdHkgLXNwaW4tb3V0LSoge1xuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xZGVnKTtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0zNjBkZWcpO1xuICAtLXR3LWV4aXQtcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSosIFsqXSk7XG59XG5cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tdG9wIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXRvcC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIC0xMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1ib3R0b20ge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1ib3R0b20tKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tbGVmdCB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1sZWZ0LSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXJpZ2h0IHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tcmlnaHQtKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tc3RhcnQge1xuICAmOmRpcihsdHIpIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtMTAwJTtcbiAgfVxuICAmOmRpcihydGwpIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAxMDAlO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXN0YXJ0LSoge1xuICAmOndoZXJlKDpkaXIobHRyKSwgW2Rpcj1cImx0clwiXSwgW2Rpcj1cImx0clwiXSAqKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogLTEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xuICB9XG4gICY6d2hlcmUoOmRpcihydGwpLCBbZGlyPVwicnRsXCJdLCBbZGlyPVwicnRsXCJdICopIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tZW5kIHtcbiAgJjpkaXIobHRyKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogMTAwJTtcbiAgfVxuICAmOmRpcihydGwpIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtMTAwJTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1lbmQtKiB7XG4gICY6d2hlcmUoOmRpcihsdHIpLCBbZGlyPVwibHRyXCJdLCBbZGlyPVwibHRyXCJdICopIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG4gIH1cbiAgJjp3aGVyZSg6ZGlyKHJ0bCksIFtkaXI9XCJydGxcIl0sIFtkaXI9XCJydGxcIl0gKikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIC0xMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbiAgfVxufVxuXG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tdG9wIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by10b3AtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogLTEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWJvdHRvbSB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1ib3R0b20tKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWxlZnQge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWxlZnQtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogLTEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXJpZ2h0IHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXJpZ2h0LSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1zdGFydCB7XG4gICY6ZGlyKGx0cikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogLTEwMCU7XG4gIH1cbiAgJjpkaXIocnRsKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAxMDAlO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tc3RhcnQtKiB7XG4gICY6d2hlcmUoOmRpcihsdHIpLCBbZGlyPVwibHRyXCJdLCBbZGlyPVwibHRyXCJdICopIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogLTEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbiAgfVxuICAmOndoZXJlKDpkaXIocnRsKSwgW2Rpcj1cInJ0bFwiXSwgW2Rpcj1cInJ0bFwiXSAqKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAxMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1lbmQge1xuICAmOmRpcihsdHIpIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XG4gIH1cbiAgJjpkaXIocnRsKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtMTAwJTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWVuZC0qIHtcbiAgJjp3aGVyZSg6ZGlyKGx0ciksIFtkaXI9XCJsdHJcIl0sIFtkaXI9XCJsdHJcIl0gKikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xuICB9XG4gICY6d2hlcmUoOmRpcihydGwpLCBbZGlyPVwicnRsXCJdLCBbZGlyPVwicnRsXCJdICopIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogLTEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbiAgfVxufVxuXG4vKipcbiAqIFxcYHNoYWRjblxcYCBnbG9iYWxzXG4gKi9cblxuQGN1c3RvbS12YXJpYW50IGRhcmsgKCY6aXMoLmRhcmsgKikpO1xuXG5AdGhlbWUgaW5saW5lIHtcbiAgLS1mb250LWhlYWRpbmc6IHZhcigtLWZvbnQtc2Fucyk7XG4gIC0tZm9udC1zYW5zOiB2YXIoLS1mb250LXNhbnMpO1xuICAtLWNvbG9yLXNpZGViYXItcmluZzogdmFyKC0tc2lkZWJhci1yaW5nKTtcbiAgLS1jb2xvci1zaWRlYmFyLWJvcmRlcjogdmFyKC0tc2lkZWJhci1ib3JkZXIpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50OiB2YXIoLS1zaWRlYmFyLWFjY2VudCk7XG4gIC0tY29sb3Itc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnk6IHZhcigtLXNpZGViYXItcHJpbWFyeSk7XG4gIC0tY29sb3Itc2lkZWJhci1mb3JlZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXI6IHZhcigtLXNpZGViYXIpO1xuICAtLWNvbG9yLWNoYXJ0LTU6IHZhcigtLWNoYXJ0LTUpO1xuICAtLWNvbG9yLWNoYXJ0LTQ6IHZhcigtLWNoYXJ0LTQpO1xuICAtLWNvbG9yLWNoYXJ0LTM6IHZhcigtLWNoYXJ0LTMpO1xuICAtLWNvbG9yLWNoYXJ0LTI6IHZhcigtLWNoYXJ0LTIpO1xuICAtLWNvbG9yLWNoYXJ0LTE6IHZhcigtLWNoYXJ0LTEpO1xuICAtLWNvbG9yLXJpbmc6IHZhcigtLXJpbmcpO1xuICAtLWNvbG9yLWlucHV0OiB2YXIoLS1pbnB1dCk7XG4gIC0tY29sb3ItYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAtLWNvbG9yLWRlc3RydWN0aXZlOiB2YXIoLS1kZXN0cnVjdGl2ZSk7XG4gIC0tY29sb3ItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLWFjY2VudC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1hY2NlbnQ6IHZhcigtLWFjY2VudCk7XG4gIC0tY29sb3ItbXV0ZWQtZm9yZWdyb3VuZDogdmFyKC0tbXV0ZWQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItbXV0ZWQ6IHZhcigtLW11dGVkKTtcbiAgLS1jb2xvci1zZWNvbmRhcnktZm9yZWdyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXByaW1hcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XG4gIC0tY29sb3ItcG9wb3Zlci1mb3JlZ3JvdW5kOiB2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXBvcG92ZXI6IHZhcigtLXBvcG92ZXIpO1xuICAtLWNvbG9yLWNhcmQtZm9yZWdyb3VuZDogdmFyKC0tY2FyZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1jYXJkOiB2YXIoLS1jYXJkKTtcbiAgLS1jb2xvci1mb3JlZ3JvdW5kOiB2YXIoLS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgLS1yYWRpdXMtc206IGNhbGModmFyKC0tcmFkaXVzKSAqIDAuNik7XG4gIC0tcmFkaXVzLW1kOiBjYWxjKHZhcigtLXJhZGl1cykgKiAwLjgpO1xuICAtLXJhZGl1cy1sZzogdmFyKC0tcmFkaXVzKTtcbiAgLS1yYWRpdXMteGw6IGNhbGModmFyKC0tcmFkaXVzKSAqIDEuNCk7XG4gIC0tcmFkaXVzLTJ4bDogY2FsYyh2YXIoLS1yYWRpdXMpICogMS44KTtcbiAgLS1yYWRpdXMtM3hsOiBjYWxjKHZhcigtLXJhZGl1cykgKiAyLjIpO1xuICAtLXJhZGl1cy00eGw6IGNhbGModmFyKC0tcmFkaXVzKSAqIDIuNik7XG59XG5cbjpyb290IHtcbiAgLS1iYWNrZ3JvdW5kOiBva2xjaCgxIDAgMCk7XG4gIC0tZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1jYXJkOiBva2xjaCgxIDAgMCk7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXBvcG92ZXI6IG9rbGNoKDEgMCAwKTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tcHJpbWFyeTogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tc2Vjb25kYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tbXV0ZWQ6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjU1NiAwIDApO1xuICAtLWFjY2VudDogb2tsY2goMC45NyAwIDApO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjU3NyAwLjI0NSAyNy4zMjUpO1xuICAtLWJvcmRlcjogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1pbnB1dDogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1yaW5nOiBva2xjaCgwLjcwOCAwIDApO1xuICAtLWNoYXJ0LTE6IG9rbGNoKDAuODcgMCAwKTtcbiAgLS1jaGFydC0yOiBva2xjaCgwLjU1NiAwIDApO1xuICAtLWNoYXJ0LTM6IG9rbGNoKDAuNDM5IDAgMCk7XG4gIC0tY2hhcnQtNDogb2tsY2goMC4zNzEgMCAwKTtcbiAgLS1jaGFydC01OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXJhZGl1czogMC42MjVyZW07XG4gIC0tc2lkZWJhcjogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tc2lkZWJhci1wcmltYXJ5OiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLWJvcmRlcjogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNzA4IDAgMCk7XG59XG5cbi5kYXJrIHtcbiAgLS1iYWNrZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tY2FyZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tcG9wb3Zlcjogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tcHJpbWFyeTogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjI2OSAwIDApO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNzA4IDAgMCk7XG4gIC0tYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjcwNCAwLjE5MSAyMi4yMTYpO1xuICAtLWJvcmRlcjogb2tsY2goMSAwIDAgLyAxMCUpO1xuICAtLWlucHV0OiBva2xjaCgxIDAgMCAvIDE1JSk7XG4gIC0tcmluZzogb2tsY2goMC41NTYgMCAwKTtcbiAgLS1jaGFydC0xOiBva2xjaCgwLjg3IDAgMCk7XG4gIC0tY2hhcnQtMjogb2tsY2goMC41NTYgMCAwKTtcbiAgLS1jaGFydC0zOiBva2xjaCgwLjQzOSAwIDApO1xuICAtLWNoYXJ0LTQ6IG9rbGNoKDAuMzcxIDAgMCk7XG4gIC0tY2hhcnQtNTogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IG9rbGNoKDAuNDg4IDAuMjQzIDI2NC4zNzYpO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IG9rbGNoKDEgMCAwIC8gMTAlKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNTU2IDAgMCk7XG59XG5cbkBsYXllciBiYXNlIHtcbiAgKiB7XG4gICAgQGFwcGx5IGJvcmRlci1ib3JkZXIgb3V0bGluZS1yaW5nLzUwO1xuICB9XG4gIGJvZHkge1xuICAgIEBhcHBseSBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZDtcbiAgfVxuICBodG1sIHtcbiAgICBAYXBwbHkgZm9udC1zYW5zO1xuICB9XG59XG5cbi8qKlxuICogXFxgaW1wb3J0IEBzaGFkY24vdGFpbHdpbmQuY3NzXFxgIGNvbnRlbnRzXG4gKi9cbkB0aGVtZSBpbmxpbmUge1xuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICB2YXIoLS1hY2NvcmRpb24tcGFuZWwtaGVpZ2h0LCBhdXRvKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi11cCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcigtLWFjY29yZGlvbi1wYW5lbC1oZWlnaHQsIGF1dG8pXG4gICAgICApO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi8qIEN1c3RvbSB2YXJpYW50cyAqL1xuQGN1c3RvbS12YXJpYW50IGRhdGEtb3BlbiB7XG4gICY6d2hlcmUoW2RhdGEtc3RhdGU9XCJvcGVuXCJdKSxcbiAgJjp3aGVyZShbZGF0YS1vcGVuXTpub3QoW2RhdGEtb3Blbj1cImZhbHNlXCJdKSkge1xuICAgIEBzbG90O1xuICB9XG59XG5cbkBjdXN0b20tdmFyaWFudCBkYXRhLWNsb3NlZCB7XG4gICY6d2hlcmUoW2RhdGEtc3RhdGU9XCJjbG9zZWRcIl0pLFxuICAmOndoZXJlKFtkYXRhLWNsb3NlZF06bm90KFtkYXRhLWNsb3NlZD1cImZhbHNlXCJdKSkge1xuICAgIEBzbG90O1xuICB9XG59XG5cbkBjdXN0b20tdmFyaWFudCBkYXRhLWNoZWNrZWQge1xuICAmOndoZXJlKFtkYXRhLXN0YXRlPVwiY2hlY2tlZFwiXSksXG4gICY6d2hlcmUoW2RhdGEtY2hlY2tlZF06bm90KFtkYXRhLWNoZWNrZWQ9XCJmYWxzZVwiXSkpIHtcbiAgICBAc2xvdDtcbiAgfVxufVxuXG5AY3VzdG9tLXZhcmlhbnQgZGF0YS11bmNoZWNrZWQge1xuICAmOndoZXJlKFtkYXRhLXN0YXRlPVwidW5jaGVja2VkXCJdKSxcbiAgJjp3aGVyZShbZGF0YS11bmNoZWNrZWRdOm5vdChbZGF0YS11bmNoZWNrZWQ9XCJmYWxzZVwiXSkpIHtcbiAgICBAc2xvdDtcbiAgfVxufVxuXG5AY3VzdG9tLXZhcmlhbnQgZGF0YS1zZWxlY3RlZCB7XG4gICY6d2hlcmUoW2RhdGEtc2VsZWN0ZWQ9XCJ0cnVlXCJdKSB7XG4gICAgQHNsb3Q7XG4gIH1cbn1cblxuQGN1c3RvbS12YXJpYW50IGRhdGEtZGlzYWJsZWQge1xuICAmOndoZXJlKFtkYXRhLWRpc2FibGVkPVwidHJ1ZVwiXSksXG4gICY6d2hlcmUoW2RhdGEtZGlzYWJsZWRdOm5vdChbZGF0YS1kaXNhYmxlZD1cImZhbHNlXCJdKSkge1xuICAgIEBzbG90O1xuICB9XG59XG5cbkBjdXN0b20tdmFyaWFudCBkYXRhLWFjdGl2ZSB7XG4gICY6d2hlcmUoW2RhdGEtc3RhdGU9XCJhY3RpdmVcIl0pLFxuICAmOndoZXJlKFtkYXRhLWFjdGl2ZV06bm90KFtkYXRhLWFjdGl2ZT1cImZhbHNlXCJdKSkge1xuICAgIEBzbG90O1xuICB9XG59XG5cbkBjdXN0b20tdmFyaWFudCBkYXRhLWhvcml6b250YWwge1xuICAmOndoZXJlKFtkYXRhLW9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXSkge1xuICAgIEBzbG90O1xuICB9XG59XG5cbkBjdXN0b20tdmFyaWFudCBkYXRhLXZlcnRpY2FsIHtcbiAgJjp3aGVyZShbZGF0YS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCJdKSB7XG4gICAgQHNsb3Q7XG4gIH1cbn1cblxuQHV0aWxpdHkgbm8tc2Nyb2xsYmFyIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBcXGBhcnRocm9wb2RcXGAgY3VzdG9taXphdGlvbnNcbiAqL1xuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmh0bWwge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cbmA7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZ2xvYmFsU3R5bGVzKTtcbn0pKCk7XG4iXX0=