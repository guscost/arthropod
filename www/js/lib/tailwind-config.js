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
          var(--reka-accordion-content-height, 
          var(--kb-accordion-content-height, var(--ngp-accordion-content-height, auto)))
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
          var(--reka-accordion-content-height, 
          var(--kb-accordion-content-height, var(--ngp-accordion-content-height, auto)))
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
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
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
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
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
  --destructive: oklch(0.58 0.22 27);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.809 0.105 251.813);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.546 0.245 262.881);
  --chart-4: oklch(0.488 0.243 264.376);
  --chart-5: oklch(0.424 0.199 265.638);
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
  --primary: oklch(0.87 0.00 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.371 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.809 0.105 251.813);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.546 0.245 262.881);
  --chart-4: oklch(0.488 0.243 264.376);
  --chart-5: oklch(0.424 0.199 265.638);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9DQUFvQztBQUNwQyxDQUFDO0lBQ0MsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxZQUFZLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ3ZDLFlBQVksQ0FBQyxTQUFTLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMnpCMUIsQ0FBQztJQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBlbmQgZ2xvYmFsIHRhaWx3aW5kIHN0eWxlc2hlZXRcbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdsb2JhbFN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgZ2xvYmFsU3R5bGVzLnR5cGUgPSBcInRleHQvdGFpbHdpbmRjc3NcIjtcbiAgZ2xvYmFsU3R5bGVzLmlubmVySFRNTCA9IGAvKiBHbG9iYWwgQ1NTLCB0YWlsd2luZCB0aGVtZSwgc2hhZGNuICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2Vpc3Q6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2Vpc3QrTW9ubzp3Z2h0QDEwMC4uOTAwJmRpc3BsYXk9c3dhcFwiKTtcblxuQGltcG9ydCBcInRhaWx3aW5kY3NzXCI7XG5cbjpyb290IHtcbiAgLS1mb250LXNhbnM6IFwiR2Vpc3RcIiwgc2Fucy1zZXJpZjtcbiAgLS1mb250LWdlaXN0LW1vbm86IFwiR2Vpc3QgTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbi8qKlxuICogVGFpbHdpbmRDU1MgdjQuMCBjb21wYXRpYmxlIHJlcGxhY2VtZW50IGZvciBcXGB0YWlsd2luZGNzcy1hbmltYXRlXFxgLlxuICpcbiAqIEBhdXRob3IgTHVjYSBCb3NpbiA8aHR0cHM6Ly9naXRodWIuY29tL1dvbWJvc3ZpZGVvPlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuOnJvb3Qge1xuICAvKiBAcHJvcGVydHkgZGVjbGFyYXRpb25zIGZvciBhbmltYXRpb24gdmFyaWFibGVzLCB0byBwcmV2ZW50IGluaGVyaXRhbmNlICovXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1kZWxheSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMHM7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1hbmltYXRpb24tZGlyZWN0aW9uIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiBub3JtYWw7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1hbmltYXRpb24tZHVyYXRpb24ge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIC8qIGRvZXMgbm90IGhhdmUgYW4gaW5pdGlhbCB2YWx1ZSBpbiBvcmRlciBmb3IgdGhlIFxcYC0tdHctZHVyYXRpb25cXGAgdmFyaWFibGUgdG8gd29yayAqL1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogbm9uZTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDE7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1lbnRlci1ibHVyIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZW50ZXItb3BhY2l0eSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLXJvdGF0ZSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLXNjYWxlIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAxO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZW50ZXItdHJhbnNsYXRlLXgge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1lbnRlci10cmFuc2xhdGUteSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtYmx1ciB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtb3BhY2l0eSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtcm90YXRlIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZXhpdC1zY2FsZSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtdHJhbnNsYXRlLXgge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1leGl0LXRyYW5zbGF0ZS15IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG59XG5cbkB0aGVtZSBpbmxpbmUge1xuICAvKiBQcmVkZWZpbmVkIHZhbHVlcyAqL1xuXG4gIC0tYW5pbWF0aW9uLWRlbGF5LTA6IDBzO1xuICAtLWFuaW1hdGlvbi1kZWxheS03NTogNzVtcztcbiAgLS1hbmltYXRpb24tZGVsYXktMTAwOiAwLjFzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0xNTA6IDAuMTVzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0yMDA6IDAuMnM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTMwMDogMC4zcztcbiAgLS1hbmltYXRpb24tZGVsYXktNTAwOiAwLjVzO1xuICAtLWFuaW1hdGlvbi1kZWxheS03MDA6IDAuN3M7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTEwMDA6IDFzO1xuXG4gIC0tYW5pbWF0aW9uLXJlcGVhdC0wOiAwO1xuICAtLWFuaW1hdGlvbi1yZXBlYXQtMTogMTtcbiAgLS1hbmltYXRpb24tcmVwZWF0LWluZmluaXRlOiBpbmZpbml0ZTtcblxuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tbm9ybWFsOiBub3JtYWw7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1yZXZlcnNlOiByZXZlcnNlO1xuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tYWx0ZXJuYXRlOiBhbHRlcm5hdGU7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1hbHRlcm5hdGUtcmV2ZXJzZTogYWx0ZXJuYXRlLXJldmVyc2U7XG5cbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLW5vbmU6IG5vbmU7XG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1mb3J3YXJkczogZm9yd2FyZHM7XG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1iYWNrd2FyZHM6IGJhY2t3YXJkcztcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWJvdGg6IGJvdGg7XG5cbiAgLS1wZXJjZW50YWdlLTA6IDA7XG4gIC0tcGVyY2VudGFnZS01OiAwLjA1O1xuICAtLXBlcmNlbnRhZ2UtMTA6IDAuMTtcbiAgLS1wZXJjZW50YWdlLTE1OiAwLjE1O1xuICAtLXBlcmNlbnRhZ2UtMjA6IDAuMjtcbiAgLS1wZXJjZW50YWdlLTI1OiAwLjI1O1xuICAtLXBlcmNlbnRhZ2UtMzA6IDAuMztcbiAgLS1wZXJjZW50YWdlLTM1OiAwLjM1O1xuICAtLXBlcmNlbnRhZ2UtNDA6IDAuNDtcbiAgLS1wZXJjZW50YWdlLTQ1OiAwLjQ1O1xuICAtLXBlcmNlbnRhZ2UtNTA6IDAuNTtcbiAgLS1wZXJjZW50YWdlLTU1OiAwLjU1O1xuICAtLXBlcmNlbnRhZ2UtNjA6IDAuNjtcbiAgLS1wZXJjZW50YWdlLTY1OiAwLjY1O1xuICAtLXBlcmNlbnRhZ2UtNzA6IDAuNztcbiAgLS1wZXJjZW50YWdlLTc1OiAwLjc1O1xuICAtLXBlcmNlbnRhZ2UtODA6IDAuODtcbiAgLS1wZXJjZW50YWdlLTg1OiAwLjg1O1xuICAtLXBlcmNlbnRhZ2UtOTA6IDAuOTtcbiAgLS1wZXJjZW50YWdlLTk1OiAwLjk1O1xuICAtLXBlcmNlbnRhZ2UtMTAwOiAxO1xuICAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLWZ1bGw6IDE7XG5cbiAgLyogQW5pbWF0aW9ucyBhbmQga2V5ZnJhbWVzICovXG5cbiAgLS1hbmltYXRlLWluOiBlbnRlciB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAxNTBtcykpIHZhcigtLXR3LWVhc2UsIGVhc2UpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xuICAtLWFuaW1hdGUtb3V0OiBleGl0IHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDE1MG1zKSkgdmFyKC0tdHctZWFzZSwgZWFzZSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGVsYXksIDBzKSB2YXIoLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCAxKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCkgdmFyKC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSwgbm9uZSk7XG5cbiAgQGtleWZyYW1lcyBlbnRlciB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiB2YXIoLS10dy1lbnRlci1vcGFjaXR5LCAxKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXgsIDApLCB2YXIoLS10dy1lbnRlci10cmFuc2xhdGUteSwgMCksIDApXG4gICAgICAgIHNjYWxlM2QodmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSksIHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSlcbiAgICAgICAgcm90YXRlKHZhcigtLXR3LWVudGVyLXJvdGF0ZSwgMCkpO1xuICAgICAgZmlsdGVyOiBibHVyKHZhcigtLXR3LWVudGVyLWJsdXIsIDApKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGV4aXQge1xuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IHZhcigtLXR3LWV4aXQtb3BhY2l0eSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXgsIDApLCB2YXIoLS10dy1leGl0LXRyYW5zbGF0ZS15LCAwKSwgMClcbiAgICAgICAgc2NhbGUzZCh2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSksIHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpKVxuICAgICAgICByb3RhdGUodmFyKC0tdHctZXhpdC1yb3RhdGUsIDApKTtcbiAgICAgIGZpbHRlcjogYmx1cih2YXIoLS10dy1leGl0LWJsdXIsIDApKTtcbiAgICB9XG4gIH1cblxuICAtLWFuaW1hdGUtYWNjb3JkaW9uLWRvd246IGFjY29yZGlvbi1kb3duIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSlcbiAgICB2YXIoLS10dy1lYXNlLCBlYXNlLW91dCkgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xuICAtLWFuaW1hdGUtYWNjb3JkaW9uLXVwOiBhY2NvcmRpb24tdXAgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKVxuICAgIHZhcigtLXR3LWVhc2UsIGVhc2Utb3V0KSB2YXIoLS10dy1hbmltYXRpb24tZGVsYXksIDBzKSB2YXIoLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCAxKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCkgdmFyKC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSwgbm9uZSk7XG4gIC0tYW5pbWF0ZS1jb2xsYXBzaWJsZS1kb3duOiBjb2xsYXBzaWJsZS1kb3duXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKSB2YXIoLS10dy1lYXNlLCBlYXNlLW91dClcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGVsYXksIDBzKSB2YXIoLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCAxKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCkgdmFyKC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSwgbm9uZSk7XG4gIC0tYW5pbWF0ZS1jb2xsYXBzaWJsZS11cDogY29sbGFwc2libGUtdXAgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKVxuICAgIHZhcigtLXR3LWVhc2UsIGVhc2Utb3V0KSB2YXIoLS10dy1hbmltYXRpb24tZGVsYXksIDBzKSB2YXIoLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCAxKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCkgdmFyKC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSwgbm9uZSk7XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tZG93biB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogdmFyKFxuICAgICAgICAtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tYml0cy1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgdmFyKC0tcmVrYS1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIFxuICAgICAgICAgIHZhcigtLWtiLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgdmFyKC0tbmdwLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgYXV0bykpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLXVwIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogdmFyKFxuICAgICAgICAtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tYml0cy1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgdmFyKC0tcmVrYS1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIFxuICAgICAgICAgIHZhcigtLWtiLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgdmFyKC0tbmdwLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgYXV0bykpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjb2xsYXBzaWJsZS1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLWJpdHMtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgdmFyKC0tcmVrYS1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgdmFyKC0ta2ItY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsIGF1dG8pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgY29sbGFwc2libGUtdXAge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLWJpdHMtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgdmFyKC0tcmVrYS1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgdmFyKC0ta2ItY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsIGF1dG8pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLS1hbmltYXRlLWNhcmV0LWJsaW5rOiBjYXJldC1ibGluayAxLjI1cyBlYXNlLW91dCBpbmZpbml0ZTtcblxuICBAa2V5ZnJhbWVzIGNhcmV0LWJsaW5rIHtcbiAgICAwJSxcbiAgICA3MCUsXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyMCUsXG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG59XG5cbi8qIFV0aWxpdHkgY2xhc3NlcyAqL1xuXG5AdXRpbGl0eSBhbmltYXRpb24tZHVyYXRpb24tKiB7XG4gIC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFtcyk7XG4gIC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWR1cmF0aW9uLSosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbKl0pO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWR1cmF0aW9uLSosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBkZWxheS0qIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFtcyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLS12YWx1ZSgtLWFuaW1hdGlvbi1kZWxheS0qLCBbZHVyYXRpb25dLCBcImluaXRpYWxcIiwgWypdKTtcbiAgLS10dy1hbmltYXRpb24tZGVsYXk6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcbiAgLS10dy1hbmltYXRpb24tZGVsYXk6IC0tdmFsdWUoLS1hbmltYXRpb24tZGVsYXktKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsqXSk7XG59XG5cbkB1dGlsaXR5IHJlcGVhdC0qIHtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogLS12YWx1ZSgtLWFuaW1hdGlvbi1yZXBlYXQtKiwgbnVtYmVyLCBcImluaXRpYWxcIiwgWypdKTtcbiAgLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAtLXZhbHVlKC0tYW5pbWF0aW9uLXJlcGVhdC0qLCBudW1iZXIsIFwiaW5pdGlhbFwiLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBkaXJlY3Rpb24tKiB7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IC0tdmFsdWUoLS1hbmltYXRpb24tZGlyZWN0aW9uLSosIFwiaW5pdGlhbFwiLCBbKl0pO1xuICAtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb246IC0tdmFsdWUoLS1hbmltYXRpb24tZGlyZWN0aW9uLSosIFwiaW5pdGlhbFwiLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBmaWxsLW1vZGUtKiB7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IC0tdmFsdWUoLS1hbmltYXRpb24tZmlsbC1tb2RlLSosIFwiaW5pdGlhbFwiLCBbKl0pO1xuICAtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGU6IC0tdmFsdWUoLS1hbmltYXRpb24tZmlsbC1tb2RlLSosIFwiaW5pdGlhbFwiLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBydW5uaW5nIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG5AdXRpbGl0eSBwYXVzZWQge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuQHV0aWxpdHkgcGxheS1zdGF0ZS0qIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IC0tdmFsdWUoXCJpbml0aWFsXCIsIFsqXSk7XG59XG5cbkB1dGlsaXR5IGJsdXItaW4ge1xuICAtLXR3LWVudGVyLWJsdXI6IDIwcHg7XG59XG5AdXRpbGl0eSBibHVyLWluLSoge1xuICAtLXR3LWVudGVyLWJsdXI6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMXB4KTtcbiAgLS10dy1lbnRlci1ibHVyOiAtLXZhbHVlKC0tYmx1ci0qLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBibHVyLW91dCB7XG4gIC0tdHctZXhpdC1ibHVyOiAyMHB4O1xufVxuQHV0aWxpdHkgYmx1ci1vdXQtKiB7XG4gIC0tdHctZXhpdC1ibHVyOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFweCk7XG4gIC0tdHctZXhpdC1ibHVyOiAtLXZhbHVlKC0tYmx1ci0qLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBmYWRlLWluIHtcbiAgLS10dy1lbnRlci1vcGFjaXR5OiAwO1xufVxuQHV0aWxpdHkgZmFkZS1pbi0qIHtcbiAgLS10dy1lbnRlci1vcGFjaXR5OiBjYWxjKC0tdmFsdWUobnVtYmVyKSAvIDEwMCk7XG4gIC0tdHctZW50ZXItb3BhY2l0eTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgWypdKTtcbn1cblxuQHV0aWxpdHkgZmFkZS1vdXQge1xuICAtLXR3LWV4aXQtb3BhY2l0eTogMDtcbn1cbkB1dGlsaXR5IGZhZGUtb3V0LSoge1xuICAtLXR3LWV4aXQtb3BhY2l0eTogY2FsYygtLXZhbHVlKG51bWJlcikgLyAxMDApO1xuICAtLXR3LWV4aXQtb3BhY2l0eTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgWypdKTtcbn1cblxuQHV0aWxpdHkgem9vbS1pbiB7XG4gIC0tdHctZW50ZXItc2NhbGU6IDA7XG59XG5AdXRpbGl0eSB6b29tLWluLSoge1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDElKTtcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIFsqXSk7XG59XG5AdXRpbGl0eSAtem9vbS1pbi0qIHtcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAtMSUpO1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEpO1xuICAtLXR3LWVudGVyLXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCBbKl0pO1xufVxuXG5AdXRpbGl0eSB6b29tLW91dCB7XG4gIC0tdHctZXhpdC1zY2FsZTogMDtcbn1cbkB1dGlsaXR5IHpvb20tb3V0LSoge1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMSUpO1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShyYXRpbykpO1xuICAtLXR3LWV4aXQtc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIFsqXSk7XG59XG5AdXRpbGl0eSAtem9vbS1vdXQtKiB7XG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAtMSUpO1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMSk7XG4gIC0tdHctZXhpdC1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgWypdKTtcbn1cblxuQHV0aWxpdHkgc3Bpbi1pbiB7XG4gIC0tdHctZW50ZXItcm90YXRlOiAzMGRlZztcbn1cbkB1dGlsaXR5IHNwaW4taW4tKiB7XG4gIC0tdHctZW50ZXItcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFkZWcpO1xuICAtLXR3LWVudGVyLXJvdGF0ZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDM2MGRlZyk7XG4gIC0tdHctZW50ZXItcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSosIFsqXSk7XG59XG5AdXRpbGl0eSAtc3Bpbi1pbiB7XG4gIC0tdHctZW50ZXItcm90YXRlOiAtMzBkZWc7XG59XG5AdXRpbGl0eSAtc3Bpbi1pbi0qIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogLTFkZWcpO1xuICAtLXR3LWVudGVyLXJvdGF0ZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0zNjBkZWcpO1xuICAtLXR3LWVudGVyLXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0qLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBzcGluLW91dCB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IDMwZGVnO1xufVxuQHV0aWxpdHkgc3Bpbi1vdXQtKiB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMWRlZyk7XG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAzNjBkZWcpO1xuICAtLXR3LWV4aXQtcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSosIFsqXSk7XG59XG5AdXRpbGl0eSAtc3Bpbi1vdXQge1xuICAtLXR3LWV4aXQtcm90YXRlOiAtMzBkZWc7XG59XG5AdXRpbGl0eSAtc3Bpbi1vdXQtKiB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogLTFkZWcpO1xuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTM2MGRlZyk7XG4gIC0tdHctZXhpdC1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtKiwgWypdKTtcbn1cblxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS10b3Age1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tdG9wLSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWJvdHRvbSB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWJvdHRvbS0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1sZWZ0IHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWxlZnQtKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tcmlnaHQge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1yaWdodC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1zdGFydCB7XG4gICY6ZGlyKGx0cikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB9XG4gICY6ZGlyKHJ0bCkge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IDEwMCU7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tc3RhcnQtKiB7XG4gICY6d2hlcmUoOmRpcihsdHIpLCBbZGlyPVwibHRyXCJdLCBbZGlyPVwibHRyXCJdICopIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAtMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG4gIH1cbiAgJjp3aGVyZSg6ZGlyKHJ0bCksIFtkaXI9XCJydGxcIl0sIFtkaXI9XCJydGxcIl0gKikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAxMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1lbmQge1xuICAmOmRpcihsdHIpIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAxMDAlO1xuICB9XG4gICY6ZGlyKHJ0bCkge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWVuZC0qIHtcbiAgJjp3aGVyZSg6ZGlyKGx0ciksIFtkaXI9XCJsdHJcIl0sIFtkaXI9XCJsdHJcIl0gKikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAxMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbiAgfVxuICAmOndoZXJlKDpkaXIocnRsKSwgW2Rpcj1cInJ0bFwiXSwgW2Rpcj1cInJ0bFwiXSAqKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogLTEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xuICB9XG59XG5cbkB1dGlsaXR5IHNsaWRlLW91dC10by10b3Age1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXRvcC0qIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAtMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tYm90dG9tIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWJvdHRvbS0qIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tbGVmdCB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tbGVmdC0qIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAtMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tcmlnaHQge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tcmlnaHQtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXN0YXJ0IHtcbiAgJjpkaXIobHRyKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtMTAwJTtcbiAgfVxuICAmOmRpcihydGwpIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1zdGFydC0qIHtcbiAgJjp3aGVyZSg6ZGlyKGx0ciksIFtkaXI9XCJsdHJcIl0sIFtkaXI9XCJsdHJcIl0gKikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAtMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xuICB9XG4gICY6d2hlcmUoOmRpcihydGwpLCBbZGlyPVwicnRsXCJdLCBbZGlyPVwicnRsXCJdICopIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIDEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWVuZCB7XG4gICY6ZGlyKGx0cikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogMTAwJTtcbiAgfVxuICAmOmRpcihydGwpIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tZW5kLSoge1xuICAmOndoZXJlKDpkaXIobHRyKSwgW2Rpcj1cImx0clwiXSwgW2Rpcj1cImx0clwiXSAqKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAxMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG4gIH1cbiAgJjp3aGVyZSg6ZGlyKHJ0bCksIFtkaXI9XCJydGxcIl0sIFtkaXI9XCJydGxcIl0gKikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAtMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xuICB9XG59XG5cbi8qKlxuICogXFxgc2hhZGNuXFxgIGdsb2JhbHNcbiAqL1xuXG5AY3VzdG9tLXZhcmlhbnQgZGFyayAoJjppcyguZGFyayAqKSk7XG5cbkB0aGVtZSBpbmxpbmUge1xuICAtLWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAtLWNvbG9yLWZvcmVncm91bmQ6IHZhcigtLWZvcmVncm91bmQpO1xuICAtLWZvbnQtc2FuczogdmFyKC0tZm9udC1zYW5zKTtcbiAgLS1mb250LW1vbm86IHZhcigtLWZvbnQtZ2Vpc3QtbW9ubyk7XG4gIC0tY29sb3Itc2lkZWJhci1yaW5nOiB2YXIoLS1zaWRlYmFyLXJpbmcpO1xuICAtLWNvbG9yLXNpZGViYXItYm9yZGVyOiB2YXIoLS1zaWRlYmFyLWJvcmRlcik7XG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQ6IHZhcigtLXNpZGViYXItYWNjZW50KTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItcHJpbWFyeTogdmFyKC0tc2lkZWJhci1wcmltYXJ5KTtcbiAgLS1jb2xvci1zaWRlYmFyLWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhcjogdmFyKC0tc2lkZWJhcik7XG4gIC0tY29sb3ItY2hhcnQtNTogdmFyKC0tY2hhcnQtNSk7XG4gIC0tY29sb3ItY2hhcnQtNDogdmFyKC0tY2hhcnQtNCk7XG4gIC0tY29sb3ItY2hhcnQtMzogdmFyKC0tY2hhcnQtMyk7XG4gIC0tY29sb3ItY2hhcnQtMjogdmFyKC0tY2hhcnQtMik7XG4gIC0tY29sb3ItY2hhcnQtMTogdmFyKC0tY2hhcnQtMSk7XG4gIC0tY29sb3ItcmluZzogdmFyKC0tcmluZyk7XG4gIC0tY29sb3ItaW5wdXQ6IHZhcigtLWlucHV0KTtcbiAgLS1jb2xvci1ib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIC0tY29sb3ItZGVzdHJ1Y3RpdmU6IHZhcigtLWRlc3RydWN0aXZlKTtcbiAgLS1jb2xvci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWFjY2VudDogdmFyKC0tYWNjZW50KTtcbiAgLS1jb2xvci1tdXRlZC1mb3JlZ3JvdW5kOiB2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1tdXRlZDogdmFyKC0tbXV0ZWQpO1xuICAtLWNvbG9yLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2Vjb25kYXJ5OiB2YXIoLS1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1wcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcbiAgLS1jb2xvci1wb3BvdmVyLWZvcmVncm91bmQ6IHZhcigtLXBvcG92ZXItZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcG9wb3ZlcjogdmFyKC0tcG9wb3Zlcik7XG4gIC0tY29sb3ItY2FyZC1mb3JlZ3JvdW5kOiB2YXIoLS1jYXJkLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWNhcmQ6IHZhcigtLWNhcmQpO1xuICAtLXJhZGl1cy1zbTogY2FsYyh2YXIoLS1yYWRpdXMpIC0gNHB4KTtcbiAgLS1yYWRpdXMtbWQ6IGNhbGModmFyKC0tcmFkaXVzKSAtIDJweCk7XG4gIC0tcmFkaXVzLWxnOiB2YXIoLS1yYWRpdXMpO1xuICAtLXJhZGl1cy14bDogY2FsYyh2YXIoLS1yYWRpdXMpICsgNHB4KTtcbiAgLS1yYWRpdXMtMnhsOiBjYWxjKHZhcigtLXJhZGl1cykgKyA4cHgpO1xuICAtLXJhZGl1cy0zeGw6IGNhbGModmFyKC0tcmFkaXVzKSArIDEycHgpO1xuICAtLXJhZGl1cy00eGw6IGNhbGModmFyKC0tcmFkaXVzKSArIDE2cHgpO1xufVxuXG46cm9vdCB7XG4gIC0tYmFja2dyb3VuZDogb2tsY2goMSAwIDApO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tY2FyZDogb2tsY2goMSAwIDApO1xuICAtLWNhcmQtZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1wb3BvdmVyOiBva2xjaCgxIDAgMCk7XG4gIC0tcG9wb3Zlci1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXByaW1hcnk6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNlY29uZGFyeTogb2tsY2goMC45NyAwIDApO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tbXV0ZWQtZm9yZWdyb3VuZDogb2tsY2goMC41NTYgMCAwKTtcbiAgLS1hY2NlbnQ6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1kZXN0cnVjdGl2ZTogb2tsY2goMC41OCAwLjIyIDI3KTtcbiAgLS1ib3JkZXI6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0taW5wdXQ6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tcmluZzogb2tsY2goMC43MDggMCAwKTtcbiAgLS1jaGFydC0xOiBva2xjaCgwLjgwOSAwLjEwNSAyNTEuODEzKTtcbiAgLS1jaGFydC0yOiBva2xjaCgwLjYyMyAwLjIxNCAyNTkuODE1KTtcbiAgLS1jaGFydC0zOiBva2xjaCgwLjU0NiAwLjI0NSAyNjIuODgxKTtcbiAgLS1jaGFydC00OiBva2xjaCgwLjQ4OCAwLjI0MyAyNjQuMzc2KTtcbiAgLS1jaGFydC01OiBva2xjaCgwLjQyNCAwLjE5OSAyNjUuNjM4KTtcbiAgLS1yYWRpdXM6IDAuNjI1cmVtO1xuICAtLXNpZGViYXI6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeTogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudDogb2tsY2goMC45NyAwIDApO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tc2lkZWJhci1yaW5nOiBva2xjaCgwLjcwOCAwIDApO1xufVxuXG4uZGFyayB7XG4gIC0tYmFja2dyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWNhcmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXBvcG92ZXI6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tcG9wb3Zlci1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXByaW1hcnk6IG9rbGNoKDAuODcgMC4wMCAwKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjI2OSAwIDApO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNzA4IDAgMCk7XG4gIC0tYWNjZW50OiBva2xjaCgwLjM3MSAwIDApO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjcwNCAwLjE5MSAyMi4yMTYpO1xuICAtLWJvcmRlcjogb2tsY2goMSAwIDAgLyAxMCUpO1xuICAtLWlucHV0OiBva2xjaCgxIDAgMCAvIDE1JSk7XG4gIC0tcmluZzogb2tsY2goMC41NTYgMCAwKTtcbiAgLS1jaGFydC0xOiBva2xjaCgwLjgwOSAwLjEwNSAyNTEuODEzKTtcbiAgLS1jaGFydC0yOiBva2xjaCgwLjYyMyAwLjIxNCAyNTkuODE1KTtcbiAgLS1jaGFydC0zOiBva2xjaCgwLjU0NiAwLjI0NSAyNjIuODgxKTtcbiAgLS1jaGFydC00OiBva2xjaCgwLjQ4OCAwLjI0MyAyNjQuMzc2KTtcbiAgLS1jaGFydC01OiBva2xjaCgwLjQyNCAwLjE5OSAyNjUuNjM4KTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IG9rbGNoKDAuNDg4IDAuMjQzIDI2NC4zNzYpO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IG9rbGNoKDEgMCAwIC8gMTAlKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNTU2IDAgMCk7XG59XG5cbkBsYXllciBiYXNlIHtcbiAgKiB7XG4gICAgQGFwcGx5IGJvcmRlci1ib3JkZXIgb3V0bGluZS1yaW5nLzUwO1xuICB9XG4gIGJvZHkge1xuICAgIEBhcHBseSBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZDtcbiAgfVxufVxuXG4vKipcbiAqIFxcYGltcG9ydCBAc2hhZGNuL3RhaWx3aW5kLmNzc1xcYCBjb250ZW50c1xuICovXG5AdGhlbWUgaW5saW5lIHtcbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tZG93biB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogdmFyKFxuICAgICAgICAtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcbiAgICAgICAgdmFyKC0tYWNjb3JkaW9uLXBhbmVsLWhlaWdodCwgYXV0bylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tdXAge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICB2YXIoLS1hY2NvcmRpb24tcGFuZWwtaGVpZ2h0LCBhdXRvKVxuICAgICAgKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4vKiBDdXN0b20gdmFyaWFudHMgKi9cbkBjdXN0b20tdmFyaWFudCBkYXRhLW9wZW4ge1xuICAmOndoZXJlKFtkYXRhLXN0YXRlPVwib3BlblwiXSksXG4gICY6d2hlcmUoW2RhdGEtb3Blbl06bm90KFtkYXRhLW9wZW49XCJmYWxzZVwiXSkpIHtcbiAgICBAc2xvdDtcbiAgfVxufVxuXG5AY3VzdG9tLXZhcmlhbnQgZGF0YS1jbG9zZWQge1xuICAmOndoZXJlKFtkYXRhLXN0YXRlPVwiY2xvc2VkXCJdKSxcbiAgJjp3aGVyZShbZGF0YS1jbG9zZWRdOm5vdChbZGF0YS1jbG9zZWQ9XCJmYWxzZVwiXSkpIHtcbiAgICBAc2xvdDtcbiAgfVxufVxuXG5AY3VzdG9tLXZhcmlhbnQgZGF0YS1jaGVja2VkIHtcbiAgJjp3aGVyZShbZGF0YS1zdGF0ZT1cImNoZWNrZWRcIl0pLFxuICAmOndoZXJlKFtkYXRhLWNoZWNrZWRdOm5vdChbZGF0YS1jaGVja2VkPVwiZmFsc2VcIl0pKSB7XG4gICAgQHNsb3Q7XG4gIH1cbn1cblxuQGN1c3RvbS12YXJpYW50IGRhdGEtdW5jaGVja2VkIHtcbiAgJjp3aGVyZShbZGF0YS1zdGF0ZT1cInVuY2hlY2tlZFwiXSksXG4gICY6d2hlcmUoW2RhdGEtdW5jaGVja2VkXTpub3QoW2RhdGEtdW5jaGVja2VkPVwiZmFsc2VcIl0pKSB7XG4gICAgQHNsb3Q7XG4gIH1cbn1cblxuQGN1c3RvbS12YXJpYW50IGRhdGEtc2VsZWN0ZWQge1xuICAmOndoZXJlKFtkYXRhLXNlbGVjdGVkPVwidHJ1ZVwiXSkge1xuICAgIEBzbG90O1xuICB9XG59XG5cbkBjdXN0b20tdmFyaWFudCBkYXRhLWRpc2FibGVkIHtcbiAgJjp3aGVyZShbZGF0YS1kaXNhYmxlZD1cInRydWVcIl0pLFxuICAmOndoZXJlKFtkYXRhLWRpc2FibGVkXTpub3QoW2RhdGEtZGlzYWJsZWQ9XCJmYWxzZVwiXSkpIHtcbiAgICBAc2xvdDtcbiAgfVxufVxuXG5AY3VzdG9tLXZhcmlhbnQgZGF0YS1hY3RpdmUge1xuICAmOndoZXJlKFtkYXRhLXN0YXRlPVwiYWN0aXZlXCJdKSxcbiAgJjp3aGVyZShbZGF0YS1hY3RpdmVdOm5vdChbZGF0YS1hY3RpdmU9XCJmYWxzZVwiXSkpIHtcbiAgICBAc2xvdDtcbiAgfVxufVxuXG5AY3VzdG9tLXZhcmlhbnQgZGF0YS1ob3Jpem9udGFsIHtcbiAgJjp3aGVyZShbZGF0YS1vcmllbnRhdGlvbj1cImhvcml6b250YWxcIl0pIHtcbiAgICBAc2xvdDtcbiAgfVxufVxuXG5AY3VzdG9tLXZhcmlhbnQgZGF0YS12ZXJ0aWNhbCB7XG4gICY6d2hlcmUoW2RhdGEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXSkge1xuICAgIEBzbG90O1xuICB9XG59XG5cbkB1dGlsaXR5IG5vLXNjcm9sbGJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8qKlxuICogXFxgYXJ0aHJvcG9kXFxgIGN1c3RvbWl6YXRpb25zXG4gKi9cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5odG1sIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5gO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdsb2JhbFN0eWxlcyk7XG59KSgpO1xuIl19