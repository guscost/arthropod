// Append global tailwind stylesheet
(function () {
    const globalStyles = document.createElement("style");
    globalStyles.type = "text/tailwindcss";
    globalStyles.innerHTML = `@import "tailwindcss";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpckIxQixDQUFDO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVuZCBnbG9iYWwgdGFpbHdpbmQgc3R5bGVzaGVldFxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBnbG9iYWxTdHlsZXMudHlwZSA9IFwidGV4dC90YWlsd2luZGNzc1wiO1xuICBnbG9iYWxTdHlsZXMuaW5uZXJIVE1MID0gYEBpbXBvcnQgXCJ0YWlsd2luZGNzc1wiO1xuXG4vKipcbiAqIFRhaWx3aW5kQ1NTIHY0LjAgY29tcGF0aWJsZSByZXBsYWNlbWVudCBmb3IgXFxgdGFpbHdpbmRjc3MtYW5pbWF0ZVxcYC5cbiAqXG4gKiBAYXV0aG9yIEx1Y2EgQm9zaW4gPGh0dHBzOi8vZ2l0aHViLmNvbS9Xb21ib3N2aWRlbz5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbjpyb290IHtcbiAgLyogQHByb3BlcnR5IGRlY2xhcmF0aW9ucyBmb3IgYW5pbWF0aW9uIHZhcmlhYmxlcywgdG8gcHJldmVudCBpbmhlcml0YW5jZSAqL1xuICBAcHJvcGVydHkgLS10dy1hbmltYXRpb24tZGVsYXkge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDBzO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbiB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogbm9ybWFsO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICAvKiBkb2VzIG5vdCBoYXZlIGFuIGluaXRpYWwgdmFsdWUgaW4gb3JkZXIgZm9yIHRoZSBcXGAtLXR3LWR1cmF0aW9uXFxgIHZhcmlhYmxlIHRvIHdvcmsgKi9cbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IG5vbmU7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAxO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZW50ZXItb3BhY2l0eSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLXJvdGF0ZSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLXNjYWxlIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAxO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZW50ZXItdHJhbnNsYXRlLXgge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1lbnRlci10cmFuc2xhdGUteSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtb3BhY2l0eSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtcm90YXRlIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZXhpdC1zY2FsZSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtdHJhbnNsYXRlLXgge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1leGl0LXRyYW5zbGF0ZS15IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG59XG5cbkB0aGVtZSBpbmxpbmUge1xuICAvKiBQcmVkZWZpbmVkIHZhbHVlcyAqL1xuXG4gIC0tYW5pbWF0aW9uLWRlbGF5LTA6IDBzO1xuICAtLWFuaW1hdGlvbi1kZWxheS03NTogNzVtcztcbiAgLS1hbmltYXRpb24tZGVsYXktMTAwOiAwLjFzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0xNTA6IDAuMTVzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0yMDA6IDAuMnM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTMwMDogMC4zcztcbiAgLS1hbmltYXRpb24tZGVsYXktNTAwOiAwLjVzO1xuICAtLWFuaW1hdGlvbi1kZWxheS03MDA6IDAuN3M7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTEwMDA6IDFzO1xuXG4gIC0tYW5pbWF0aW9uLXJlcGVhdC0wOiAwO1xuICAtLWFuaW1hdGlvbi1yZXBlYXQtMTogMTtcbiAgLS1hbmltYXRpb24tcmVwZWF0LWluZmluaXRlOiBpbmZpbml0ZTtcblxuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tbm9ybWFsOiBub3JtYWw7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1yZXZlcnNlOiByZXZlcnNlO1xuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tYWx0ZXJuYXRlOiBhbHRlcm5hdGU7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1hbHRlcm5hdGUtcmV2ZXJzZTogYWx0ZXJuYXRlLXJldmVyc2U7XG5cbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLW5vbmU6IG5vbmU7XG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1mb3J3YXJkczogZm9yd2FyZHM7XG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1iYWNrd2FyZHM6IGJhY2t3YXJkcztcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWJvdGg6IGJvdGg7XG5cbiAgLS1wZXJjZW50YWdlLTA6IDA7XG4gIC0tcGVyY2VudGFnZS01OiAwLjA1O1xuICAtLXBlcmNlbnRhZ2UtMTA6IDAuMTtcbiAgLS1wZXJjZW50YWdlLTE1OiAwLjE1O1xuICAtLXBlcmNlbnRhZ2UtMjA6IDAuMjtcbiAgLS1wZXJjZW50YWdlLTI1OiAwLjI1O1xuICAtLXBlcmNlbnRhZ2UtMzA6IDAuMztcbiAgLS1wZXJjZW50YWdlLTM1OiAwLjM1O1xuICAtLXBlcmNlbnRhZ2UtNDA6IDAuNDtcbiAgLS1wZXJjZW50YWdlLTQ1OiAwLjQ1O1xuICAtLXBlcmNlbnRhZ2UtNTA6IDAuNTtcbiAgLS1wZXJjZW50YWdlLTU1OiAwLjU1O1xuICAtLXBlcmNlbnRhZ2UtNjA6IDAuNjtcbiAgLS1wZXJjZW50YWdlLTY1OiAwLjY1O1xuICAtLXBlcmNlbnRhZ2UtNzA6IDAuNztcbiAgLS1wZXJjZW50YWdlLTc1OiAwLjc1O1xuICAtLXBlcmNlbnRhZ2UtODA6IDAuODtcbiAgLS1wZXJjZW50YWdlLTg1OiAwLjg1O1xuICAtLXBlcmNlbnRhZ2UtOTA6IDAuOTtcbiAgLS1wZXJjZW50YWdlLTk1OiAwLjk1O1xuICAtLXBlcmNlbnRhZ2UtMTAwOiAxO1xuICAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLWZ1bGw6IDE7XG5cbiAgLyogQW5pbWF0aW9ucyBhbmQga2V5ZnJhbWVzICovXG5cbiAgLS1hbmltYXRlLWluOiBlbnRlciB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAxNTBtcykpIHZhcigtLXR3LWVhc2UsIGVhc2UpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xuICAtLWFuaW1hdGUtb3V0OiBleGl0IHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDE1MG1zKSkgdmFyKC0tdHctZWFzZSwgZWFzZSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGVsYXksIDBzKSB2YXIoLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCAxKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCkgdmFyKC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSwgbm9uZSk7XG5cbiAgQGtleWZyYW1lcyBlbnRlciB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiB2YXIoLS10dy1lbnRlci1vcGFjaXR5LCAxKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXgsIDApLCB2YXIoLS10dy1lbnRlci10cmFuc2xhdGUteSwgMCksIDApXG4gICAgICAgIHNjYWxlM2QodmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSksIHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSlcbiAgICAgICAgcm90YXRlKHZhcigtLXR3LWVudGVyLXJvdGF0ZSwgMCkpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgZXhpdCB7XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogdmFyKC0tdHctZXhpdC1vcGFjaXR5LCAxKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tdHctZXhpdC10cmFuc2xhdGUteCwgMCksIHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXksIDApLCAwKVxuICAgICAgICBzY2FsZTNkKHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpLCB2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSkpXG4gICAgICAgIHJvdGF0ZSh2YXIoLS10dy1leGl0LXJvdGF0ZSwgMCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICogUmFkaXgsIEJpdHMgVUkgYW5kIFJla2EgVUkgdXRpbGl6ZSBDU1MgdmFyaWFibGVzIHRvIGRlZmluZSB0aGUgaGVpZ2h0IG9mIEFjY29yZGlvbiBhbmQgQ29sbGFwc2libGVcbiAgKiBjb250ZW50IGR1cmluZyBvcGVuL2Nsb3NlIGFuaW1hdGlvbnMuIFRoZSBcXGAtLXJhZGl4L2JpdHMvcmVrYS1hY2NvcmRpb24tY29udGVudC1oZWlnaHRcXGAgdmFyaWFibGVzXG4gICogY29udHJvbCB0aGUgaGVpZ2h0IG9mIEFjY29yZGlvbiBjb250ZW50LCB3aGlsZSBcXGBjb2xsYXBzaWJsZVxcYCB2YXJpYWJsZXMgYXJlIHVzZWQgZm9yIENvbGxhcHNpYmxlcy5cbiAgKlxuICAqIFRoZSBmYWxsYmFjayB2YWx1ZSBcXGBhdXRvXFxgIGlzIHVzZWQgaGVyZSwgYnV0IGl0IGRlcGVuZHMgb24gdGhlIFxcYGludGVycG9sYXRlLXNpemU6IGFsbG93LWtleXdvcmRzXFxgXG4gICogcHJvcGVydHksIHdoaWNoIGN1cnJlbnRseSBoYXMgbGltaXRlZCBicm93c2VyIHN1cHBvcnQuIEZvciBtb3JlIGRldGFpbHMsIHNlZTogXG4gICogPGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbnRlcnBvbGF0ZS1zaXplPlxuICAqL1xuXG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tZG93bjogYWNjb3JkaW9uLWRvd24gdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKVxuICAgIGVhc2Utb3V0O1xuICAtLWFuaW1hdGUtYWNjb3JkaW9uLXVwOiBhY2NvcmRpb24tdXAgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKVxuICAgIGVhc2Utb3V0O1xuICAtLWFuaW1hdGUtY29sbGFwc2libGUtZG93bjogY29sbGFwc2libGUtZG93blxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSkgZWFzZS1vdXQ7XG4gIC0tYW5pbWF0ZS1jb2xsYXBzaWJsZS11cDogY29sbGFwc2libGUtdXAgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKVxuICAgIGVhc2Utb3V0O1xuXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLWRvd24ge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICAgIHZhcigtLXJla2EtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIGF1dG8pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLXVwIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogdmFyKFxuICAgICAgICAtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tYml0cy1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgdmFyKC0tcmVrYS1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIHZhcigtLWtiLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgYXV0bykpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNvbGxhcHNpYmxlLWRvd24ge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tYml0cy1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcbiAgICAgICAgICB2YXIoLS1yZWthLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgYXV0bykpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjb2xsYXBzaWJsZS11cCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tYml0cy1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcbiAgICAgICAgICB2YXIoLS1yZWthLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgYXV0bykpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAtLWFuaW1hdGUtY2FyZXQtYmxpbms6IGNhcmV0LWJsaW5rIDEuMjVzIGVhc2Utb3V0IGluZmluaXRlO1xuXG4gIEBrZXlmcmFtZXMgY2FyZXQtYmxpbmsge1xuICAgIDAlLFxuICAgIDcwJSxcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDIwJSxcbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbn1cblxuLyogVXRpbGl0eSBjbGFzc2VzICovXG5cbkB1dGlsaXR5IGFuaW1hdGlvbi1kdXJhdGlvbi0qIHtcbiAgLS10dy1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcbiAgLS10dy1hbmltYXRpb24tZHVyYXRpb246IC0tdmFsdWUoLS1hbmltYXRpb24tZHVyYXRpb24tICosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbICpdKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFtcyk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kdXJhdGlvbi0gKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBkZWxheS0qIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFtcyk7XG4gIGFuaW1hdGlvbi1kZWxheTogLS12YWx1ZSgtLWFuaW1hdGlvbi1kZWxheS0gKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsgKl0pO1xuICAtLXR3LWFuaW1hdGlvbi1kZWxheTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xuICAtLXR3LWFuaW1hdGlvbi1kZWxheTogLS12YWx1ZSgtLWFuaW1hdGlvbi1kZWxheS0gKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsgKl0pO1xufVxuXG5AdXRpbGl0eSByZXBlYXQtKiB7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IC0tdmFsdWUoLS1hbmltYXRpb24tcmVwZWF0LSAqLCBudW1iZXIsIFwiaW5pdGlhbFwiLCBbICpdKTtcbiAgLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAtLXZhbHVlKC0tYW5pbWF0aW9uLXJlcGVhdC0gKiwgbnVtYmVyLCBcImluaXRpYWxcIiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IGRpcmVjdGlvbi0qIHtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kaXJlY3Rpb24tICosIFwiaW5pdGlhbFwiLCBbICpdKTtcbiAgLS10dy1hbmltYXRpb24tZGlyZWN0aW9uOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRpcmVjdGlvbi0gKiwgXCJpbml0aWFsXCIsIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBmaWxsLW1vZGUtKiB7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IC0tdmFsdWUoLS1hbmltYXRpb24tZmlsbC1tb2RlLSAqLCBcImluaXRpYWxcIiwgWyAqXSk7XG4gIC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZTogLS12YWx1ZSgtLWFuaW1hdGlvbi1maWxsLW1vZGUtICosIFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgcnVubmluZyB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuQHV0aWxpdHkgcGF1c2VkIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cbkB1dGlsaXR5IHBsYXktc3RhdGUtKiB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiAtLXZhbHVlKFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgZmFkZS1pbiB7XG4gIC0tdHctZW50ZXItb3BhY2l0eTogMDtcbn1cbkB1dGlsaXR5IGZhZGUtaW4tKiB7XG4gIC0tdHctZW50ZXItb3BhY2l0eTogY2FsYygtLXZhbHVlKG51bWJlcikgLyAxMDApO1xuICAtLXR3LWVudGVyLW9wYWNpdHk6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgZmFkZS1vdXQge1xuICAtLXR3LWV4aXQtb3BhY2l0eTogMDtcbn1cbkB1dGlsaXR5IGZhZGUtb3V0LSoge1xuICAtLXR3LWV4aXQtb3BhY2l0eTogY2FsYygtLXZhbHVlKG51bWJlcikgLyAxMDApO1xuICAtLXR3LWV4aXQtb3BhY2l0eTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xufVxuXG5AdXRpbGl0eSB6b29tLWluIHtcbiAgLS10dy1lbnRlci1zY2FsZTogMDtcbn1cbkB1dGlsaXR5IHpvb20taW4tKiB7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMSUpO1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUocmF0aW8pKTtcbiAgLS10dy1lbnRlci1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xufVxuQHV0aWxpdHkgLXpvb20taW4tKiB7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogLTElKTtcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xKTtcbiAgLS10dy1lbnRlci1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xufVxuXG5AdXRpbGl0eSB6b29tLW91dCB7XG4gIC0tdHctZXhpdC1zY2FsZTogMDtcbn1cbkB1dGlsaXR5IHpvb20tb3V0LSoge1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMSUpO1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShyYXRpbykpO1xuICAtLXR3LWV4aXQtc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcbn1cbkB1dGlsaXR5IC16b29tLW91dC0qIHtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xJSk7XG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xKTtcbiAgLS10dy1leGl0LXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IHNwaW4taW4ge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogMzBkZWc7XG59XG5AdXRpbGl0eSBzcGluLWluLSoge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAzNjBkZWcpO1xuICAtLXR3LWVudGVyLXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0gKiwgWyAqXSk7XG59XG5AdXRpbGl0eSAtc3Bpbi1pbiB7XG4gIC0tdHctZW50ZXItcm90YXRlOiAtMzBkZWc7XG59XG5AdXRpbGl0eSAtc3Bpbi1pbi0qIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogLTFkZWcpO1xuICAtLXR3LWVudGVyLXJvdGF0ZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0zNjBkZWcpO1xuICAtLXR3LWVudGVyLXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0gKiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IHNwaW4tb3V0IHtcbiAgLS10dy1leGl0LXJvdGF0ZTogMzBkZWc7XG59XG5AdXRpbGl0eSBzcGluLW91dC0qIHtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxZGVnKTtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDM2MGRlZyk7XG4gIC0tdHctZXhpdC1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtICosIFsgKl0pO1xufVxuQHV0aWxpdHkgLXNwaW4tb3V0IHtcbiAgLS10dy1leGl0LXJvdGF0ZTogLTMwZGVnO1xufVxuQHV0aWxpdHkgLXNwaW4tb3V0LSoge1xuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xZGVnKTtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0zNjBkZWcpO1xuICAtLXR3LWV4aXQtcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSAqLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS10b3Age1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tdG9wLSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWJvdHRvbSB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWJvdHRvbS0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1sZWZ0IHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWxlZnQtKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1yaWdodCB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXJpZ2h0LSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXN0YXJ0IHtcbiAgJjpkaXIobHRyKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLTEwMCU7XG4gIH1cbiAgJjpkaXIocnRsKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogMTAwJTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1zdGFydC0qIHtcbiAgJjp3aGVyZSg6ZGlyKGx0ciksIFtkaXI9XCJsdHJcIl0sIFtkaXI9XCJsdHJcIl0gKikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbiAgfVxuICAmOndoZXJlKDpkaXIocnRsKSwgW2Rpcj1cInJ0bFwiXSwgW2Rpcj1cInJ0bFwiXSAqKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWVuZCB7XG4gICY6ZGlyKGx0cikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IDEwMCU7XG4gIH1cbiAgJjpkaXIocnRsKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLTEwMCU7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tZW5kLSoge1xuICAmOndoZXJlKDpkaXIobHRyKSwgW2Rpcj1cImx0clwiXSwgW2Rpcj1cImx0clwiXSAqKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xuICB9XG4gICY6d2hlcmUoOmRpcihydGwpLCBbZGlyPVwicnRsXCJdLCBbZGlyPVwicnRsXCJdICopIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG4gIH1cbn1cblxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXRvcCB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tdG9wLSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWJvdHRvbSB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1ib3R0b20tKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWxlZnQge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWxlZnQtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tcmlnaHQge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tcmlnaHQtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXN0YXJ0IHtcbiAgJjpkaXIobHRyKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtMTAwJTtcbiAgfVxuICAmOmRpcihydGwpIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1zdGFydC0qIHtcbiAgJjp3aGVyZSg6ZGlyKGx0ciksIFtkaXI9XCJsdHJcIl0sIFtkaXI9XCJsdHJcIl0gKikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xuICB9XG4gICY6d2hlcmUoOmRpcihydGwpLCBbZGlyPVwicnRsXCJdLCBbZGlyPVwicnRsXCJdICopIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWVuZCB7XG4gICY6ZGlyKGx0cikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogMTAwJTtcbiAgfVxuICAmOmRpcihydGwpIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tZW5kLSoge1xuICAmOndoZXJlKDpkaXIobHRyKSwgW2Rpcj1cImx0clwiXSwgW2Rpcj1cImx0clwiXSAqKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG4gIH1cbiAgJjp3aGVyZSg6ZGlyKHJ0bCksIFtkaXI9XCJydGxcIl0sIFtkaXI9XCJydGxcIl0gKikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xuICB9XG59XG5cbi8qKlxuICogXFxgc2hhZGNuXFxgIGdsb2JhbHNcbiAqL1xuXG5AY3VzdG9tLXZhcmlhbnQgZGFyayAoJjppcyguZGFyayAqKSk7XG5cbkB0aGVtZSBpbmxpbmUge1xuICAtLWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAtLWNvbG9yLWZvcmVncm91bmQ6IHZhcigtLWZvcmVncm91bmQpO1xuICAtLWZvbnQtc2FuczogdmFyKC0tZm9udC1nZWlzdC1zYW5zKTtcbiAgLS1mb250LW1vbm86IHZhcigtLWZvbnQtZ2Vpc3QtbW9ubyk7XG4gIC0tY29sb3Itc2lkZWJhci1yaW5nOiB2YXIoLS1zaWRlYmFyLXJpbmcpO1xuICAtLWNvbG9yLXNpZGViYXItYm9yZGVyOiB2YXIoLS1zaWRlYmFyLWJvcmRlcik7XG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQ6IHZhcigtLXNpZGViYXItYWNjZW50KTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItcHJpbWFyeTogdmFyKC0tc2lkZWJhci1wcmltYXJ5KTtcbiAgLS1jb2xvci1zaWRlYmFyLWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhcjogdmFyKC0tc2lkZWJhcik7XG4gIC0tY29sb3ItY2hhcnQtNTogdmFyKC0tY2hhcnQtNSk7XG4gIC0tY29sb3ItY2hhcnQtNDogdmFyKC0tY2hhcnQtNCk7XG4gIC0tY29sb3ItY2hhcnQtMzogdmFyKC0tY2hhcnQtMyk7XG4gIC0tY29sb3ItY2hhcnQtMjogdmFyKC0tY2hhcnQtMik7XG4gIC0tY29sb3ItY2hhcnQtMTogdmFyKC0tY2hhcnQtMSk7XG4gIC0tY29sb3ItcmluZzogdmFyKC0tcmluZyk7XG4gIC0tY29sb3ItaW5wdXQ6IHZhcigtLWlucHV0KTtcbiAgLS1jb2xvci1ib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIC0tY29sb3ItZGVzdHJ1Y3RpdmU6IHZhcigtLWRlc3RydWN0aXZlKTtcbiAgLS1jb2xvci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWFjY2VudDogdmFyKC0tYWNjZW50KTtcbiAgLS1jb2xvci1tdXRlZC1mb3JlZ3JvdW5kOiB2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1tdXRlZDogdmFyKC0tbXV0ZWQpO1xuICAtLWNvbG9yLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2Vjb25kYXJ5OiB2YXIoLS1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1wcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcbiAgLS1jb2xvci1wb3BvdmVyLWZvcmVncm91bmQ6IHZhcigtLXBvcG92ZXItZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcG9wb3ZlcjogdmFyKC0tcG9wb3Zlcik7XG4gIC0tY29sb3ItY2FyZC1mb3JlZ3JvdW5kOiB2YXIoLS1jYXJkLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWNhcmQ6IHZhcigtLWNhcmQpO1xuICAtLXJhZGl1cy1zbTogY2FsYyh2YXIoLS1yYWRpdXMpIC0gNHB4KTtcbiAgLS1yYWRpdXMtbWQ6IGNhbGModmFyKC0tcmFkaXVzKSAtIDJweCk7XG4gIC0tcmFkaXVzLWxnOiB2YXIoLS1yYWRpdXMpO1xuICAtLXJhZGl1cy14bDogY2FsYyh2YXIoLS1yYWRpdXMpICsgNHB4KTtcbn1cblxuOnJvb3Qge1xuICAtLXJhZGl1czogMC42MjVyZW07XG4gIC0tYmFja2dyb3VuZDogb2tsY2goMSAwIDApO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tY2FyZDogb2tsY2goMSAwIDApO1xuICAtLWNhcmQtZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1wb3BvdmVyOiBva2xjaCgxIDAgMCk7XG4gIC0tcG9wb3Zlci1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXByaW1hcnk6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNlY29uZGFyeTogb2tsY2goMC45NyAwIDApO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tbXV0ZWQtZm9yZWdyb3VuZDogb2tsY2goMC41NTYgMCAwKTtcbiAgLS1hY2NlbnQ6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1kZXN0cnVjdGl2ZTogb2tsY2goMC41NzcgMC4yNDUgMjcuMzI1KTtcbiAgLS1ib3JkZXI6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0taW5wdXQ6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tcmluZzogb2tsY2goMC43MDggMCAwKTtcbiAgLS1jaGFydC0xOiBva2xjaCgwLjY0NiAwLjIyMiA0MS4xMTYpO1xuICAtLWNoYXJ0LTI6IG9rbGNoKDAuNiAwLjExOCAxODQuNzA0KTtcbiAgLS1jaGFydC0zOiBva2xjaCgwLjM5OCAwLjA3IDIyNy4zOTIpO1xuICAtLWNoYXJ0LTQ6IG9rbGNoKDAuODI4IDAuMTg5IDg0LjQyOSk7XG4gIC0tY2hhcnQtNTogb2tsY2goMC43NjkgMC4xODggNzAuMDgpO1xuICAtLXNpZGViYXI6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeTogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudDogb2tsY2goMC45NyAwIDApO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tc2lkZWJhci1yaW5nOiBva2xjaCgwLjcwOCAwIDApO1xufVxuXG4uZGFyayB7XG4gIC0tYmFja2dyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWNhcmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXBvcG92ZXI6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tcG9wb3Zlci1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXByaW1hcnk6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNlY29uZGFyeTogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1tdXRlZDogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjcwOCAwIDApO1xuICAtLWFjY2VudDogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1kZXN0cnVjdGl2ZTogb2tsY2goMC43MDQgMC4xOTEgMjIuMjE2KTtcbiAgLS1ib3JkZXI6IG9rbGNoKDEgMCAwIC8gMTAlKTtcbiAgLS1pbnB1dDogb2tsY2goMSAwIDAgLyAxNSUpO1xuICAtLXJpbmc6IG9rbGNoKDAuNTU2IDAgMCk7XG4gIC0tY2hhcnQtMTogb2tsY2goMC40ODggMC4yNDMgMjY0LjM3Nik7XG4gIC0tY2hhcnQtMjogb2tsY2goMC42OTYgMC4xNyAxNjIuNDgpO1xuICAtLWNoYXJ0LTM6IG9rbGNoKDAuNzY5IDAuMTg4IDcwLjA4KTtcbiAgLS1jaGFydC00OiBva2xjaCgwLjYyNyAwLjI2NSAzMDMuOSk7XG4gIC0tY2hhcnQtNTogb2tsY2goMC42NDUgMC4yNDYgMTYuNDM5KTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IG9rbGNoKDAuNDg4IDAuMjQzIDI2NC4zNzYpO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IG9rbGNoKDEgMCAwIC8gMTAlKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNTU2IDAgMCk7XG59XG5cbkBsYXllciBiYXNlIHtcbiAgKiB7XG4gICAgQGFwcGx5IGJvcmRlci1ib3JkZXIgb3V0bGluZS1yaW5nLzUwO1xuICB9XG4gIGJvZHkge1xuICAgIEBhcHBseSBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZDtcbiAgfVxufVxuXG4vKipcbiAqIFxcYGFydGhyb3BvZFxcYCBjdXN0b21pemF0aW9uc1xuICovXG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaHRtbCB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZXMpO1xufSkoKTtcbiJdfQ==