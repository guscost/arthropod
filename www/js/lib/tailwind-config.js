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

html {
  touch-action: manipulation;
}
`;
    document.head.appendChild(globalStyles);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeXFCMUIsQ0FBQztJQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBlbmQgZ2xvYmFsIHRhaWx3aW5kIHN0eWxlc2hlZXRcbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdsb2JhbFN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgZ2xvYmFsU3R5bGVzLnR5cGUgPSBcInRleHQvdGFpbHdpbmRjc3NcIjtcbiAgZ2xvYmFsU3R5bGVzLmlubmVySFRNTCA9IGBAaW1wb3J0IFwidGFpbHdpbmRjc3NcIjtcblxuLyoqXG4gKiBUYWlsd2luZENTUyB2NC4wIGNvbXBhdGlibGUgcmVwbGFjZW1lbnQgZm9yIFxcYHRhaWx3aW5kY3NzLWFuaW1hdGVcXGAuXG4gKlxuICogQGF1dGhvciBMdWNhIEJvc2luIDxodHRwczovL2dpdGh1Yi5jb20vV29tYm9zdmlkZW8+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG46cm9vdCB7XG4gIC8qIEBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgZm9yIGFuaW1hdGlvbiB2YXJpYWJsZXMsIHRvIHByZXZlbnQgaW5oZXJpdGFuY2UgKi9cbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWRlbGF5IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwcztcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24ge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IG5vcm1hbDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgLyogZG9lcyBub3QgaGF2ZSBhbiBpbml0aWFsIHZhbHVlIGluIG9yZGVyIGZvciB0aGUgXFxgLS10dy1kdXJhdGlvblxcYCB2YXJpYWJsZSB0byB3b3JrICovXG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1hbmltYXRpb24tZmlsbC1tb2RlIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiBub25lO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLW9wYWNpdHkge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDE7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1lbnRlci1yb3RhdGUge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1lbnRlci1zY2FsZSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLXRyYW5zbGF0ZS14IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZW50ZXItdHJhbnNsYXRlLXkge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1leGl0LW9wYWNpdHkge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDE7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1leGl0LXJvdGF0ZSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtc2NhbGUge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDE7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1leGl0LXRyYW5zbGF0ZS14IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZXhpdC10cmFuc2xhdGUteSB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxufVxuXG5AdGhlbWUgaW5saW5lIHtcbiAgLyogUHJlZGVmaW5lZCB2YWx1ZXMgKi9cblxuICAtLWFuaW1hdGlvbi1kZWxheS0wOiAwcztcbiAgLS1hbmltYXRpb24tZGVsYXktNzU6IDc1bXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTEwMDogMC4xcztcbiAgLS1hbmltYXRpb24tZGVsYXktMTUwOiAwLjE1cztcbiAgLS1hbmltYXRpb24tZGVsYXktMjAwOiAwLjJzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0zMDA6IDAuM3M7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTUwMDogMC41cztcbiAgLS1hbmltYXRpb24tZGVsYXktNzAwOiAwLjdzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0xMDAwOiAxcztcblxuICAtLWFuaW1hdGlvbi1yZXBlYXQtMDogMDtcbiAgLS1hbmltYXRpb24tcmVwZWF0LTE6IDE7XG4gIC0tYW5pbWF0aW9uLXJlcGVhdC1pbmZpbml0ZTogaW5maW5pdGU7XG5cbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLW5vcm1hbDogbm9ybWFsO1xuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tcmV2ZXJzZTogcmV2ZXJzZTtcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLWFsdGVybmF0ZTogYWx0ZXJuYXRlO1xuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tYWx0ZXJuYXRlLXJldmVyc2U6IGFsdGVybmF0ZS1yZXZlcnNlO1xuXG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1ub25lOiBub25lO1xuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtZm9yd2FyZHM6IGZvcndhcmRzO1xuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtYmFja3dhcmRzOiBiYWNrd2FyZHM7XG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1ib3RoOiBib3RoO1xuXG4gIC0tcGVyY2VudGFnZS0wOiAwO1xuICAtLXBlcmNlbnRhZ2UtNTogMC4wNTtcbiAgLS1wZXJjZW50YWdlLTEwOiAwLjE7XG4gIC0tcGVyY2VudGFnZS0xNTogMC4xNTtcbiAgLS1wZXJjZW50YWdlLTIwOiAwLjI7XG4gIC0tcGVyY2VudGFnZS0yNTogMC4yNTtcbiAgLS1wZXJjZW50YWdlLTMwOiAwLjM7XG4gIC0tcGVyY2VudGFnZS0zNTogMC4zNTtcbiAgLS1wZXJjZW50YWdlLTQwOiAwLjQ7XG4gIC0tcGVyY2VudGFnZS00NTogMC40NTtcbiAgLS1wZXJjZW50YWdlLTUwOiAwLjU7XG4gIC0tcGVyY2VudGFnZS01NTogMC41NTtcbiAgLS1wZXJjZW50YWdlLTYwOiAwLjY7XG4gIC0tcGVyY2VudGFnZS02NTogMC42NTtcbiAgLS1wZXJjZW50YWdlLTcwOiAwLjc7XG4gIC0tcGVyY2VudGFnZS03NTogMC43NTtcbiAgLS1wZXJjZW50YWdlLTgwOiAwLjg7XG4gIC0tcGVyY2VudGFnZS04NTogMC44NTtcbiAgLS1wZXJjZW50YWdlLTkwOiAwLjk7XG4gIC0tcGVyY2VudGFnZS05NTogMC45NTtcbiAgLS1wZXJjZW50YWdlLTEwMDogMTtcbiAgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS1mdWxsOiAxO1xuXG4gIC8qIEFuaW1hdGlvbnMgYW5kIGtleWZyYW1lcyAqL1xuXG4gIC0tYW5pbWF0ZS1pbjogZW50ZXIgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMTUwbXMpKSB2YXIoLS10dy1lYXNlLCBlYXNlKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kZWxheSwgMHMpIHZhcigtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIDEpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKSB2YXIoLS10dy1hbmltYXRpb24tZmlsbC1tb2RlLCBub25lKTtcbiAgLS1hbmltYXRlLW91dDogZXhpdCB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAxNTBtcykpIHZhcigtLXR3LWVhc2UsIGVhc2UpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRlbGF5LCAwcykgdmFyKC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgMSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpIHZhcigtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGUsIG5vbmUpO1xuXG4gIEBrZXlmcmFtZXMgZW50ZXIge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogdmFyKC0tdHctZW50ZXItb3BhY2l0eSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS14LCAwKSwgdmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXksIDApLCAwKVxuICAgICAgICBzY2FsZTNkKHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSwgdmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSkpXG4gICAgICAgIHJvdGF0ZSh2YXIoLS10dy1lbnRlci1yb3RhdGUsIDApKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGV4aXQge1xuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IHZhcigtLXR3LWV4aXQtb3BhY2l0eSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXgsIDApLCB2YXIoLS10dy1leGl0LXRyYW5zbGF0ZS15LCAwKSwgMClcbiAgICAgICAgc2NhbGUzZCh2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSksIHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpKVxuICAgICAgICByb3RhdGUodmFyKC0tdHctZXhpdC1yb3RhdGUsIDApKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAqIFJhZGl4LCBCaXRzIFVJIGFuZCBSZWthIFVJIHV0aWxpemUgQ1NTIHZhcmlhYmxlcyB0byBkZWZpbmUgdGhlIGhlaWdodCBvZiBBY2NvcmRpb24gYW5kIENvbGxhcHNpYmxlXG4gICogY29udGVudCBkdXJpbmcgb3Blbi9jbG9zZSBhbmltYXRpb25zLiBUaGUgXFxgLS1yYWRpeC9iaXRzL3Jla2EtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0XFxgIHZhcmlhYmxlc1xuICAqIGNvbnRyb2wgdGhlIGhlaWdodCBvZiBBY2NvcmRpb24gY29udGVudCwgd2hpbGUgXFxgY29sbGFwc2libGVcXGAgdmFyaWFibGVzIGFyZSB1c2VkIGZvciBDb2xsYXBzaWJsZXMuXG4gICpcbiAgKiBUaGUgZmFsbGJhY2sgdmFsdWUgXFxgYXV0b1xcYCBpcyB1c2VkIGhlcmUsIGJ1dCBpdCBkZXBlbmRzIG9uIHRoZSBcXGBpbnRlcnBvbGF0ZS1zaXplOiBhbGxvdy1rZXl3b3Jkc1xcYFxuICAqIHByb3BlcnR5LCB3aGljaCBjdXJyZW50bHkgaGFzIGxpbWl0ZWQgYnJvd3NlciBzdXBwb3J0LiBGb3IgbW9yZSBkZXRhaWxzLCBzZWU6IFxuICAqIDxodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaW50ZXJwb2xhdGUtc2l6ZT5cbiAgKi9cblxuICAtLWFuaW1hdGUtYWNjb3JkaW9uLWRvd246IGFjY29yZGlvbi1kb3duIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSlcbiAgICBlYXNlLW91dDtcbiAgLS1hbmltYXRlLWFjY29yZGlvbi11cDogYWNjb3JkaW9uLXVwIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSlcbiAgICBlYXNlLW91dDtcbiAgLS1hbmltYXRlLWNvbGxhcHNpYmxlLWRvd246IGNvbGxhcHNpYmxlLWRvd25cbiAgICB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykpIGVhc2Utb3V0O1xuICAtLWFuaW1hdGUtY29sbGFwc2libGUtdXA6IGNvbGxhcHNpYmxlLXVwIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSlcbiAgICBlYXNlLW91dDtcblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS1iaXRzLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcbiAgICAgICAgICB2YXIoLS1yZWthLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgdmFyKC0ta2ItYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi11cCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICAgIHZhcigtLXJla2EtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIGF1dG8pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjb2xsYXBzaWJsZS1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLWJpdHMtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgdmFyKC0tcmVrYS1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgdmFyKC0ta2ItY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsIGF1dG8pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgY29sbGFwc2libGUtdXAge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLWJpdHMtY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsXG4gICAgICAgICAgdmFyKC0tcmVrYS1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgdmFyKC0ta2ItY29sbGFwc2libGUtY29udGVudC1oZWlnaHQsIGF1dG8pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLS1hbmltYXRlLWNhcmV0LWJsaW5rOiBjYXJldC1ibGluayAxLjI1cyBlYXNlLW91dCBpbmZpbml0ZTtcblxuICBAa2V5ZnJhbWVzIGNhcmV0LWJsaW5rIHtcbiAgICAwJSxcbiAgICA3MCUsXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyMCUsXG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG59XG5cbi8qIFV0aWxpdHkgY2xhc3NlcyAqL1xuXG5AdXRpbGl0eSBhbmltYXRpb24tZHVyYXRpb24tKiB7XG4gIC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFtcyk7XG4gIC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWR1cmF0aW9uLSAqLCBbZHVyYXRpb25dLCBcImluaXRpYWxcIiwgWyAqXSk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xuICBhbmltYXRpb24tZHVyYXRpb246IC0tdmFsdWUoLS1hbmltYXRpb24tZHVyYXRpb24tICosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgZGVsYXktKiB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xuICBhbmltYXRpb24tZGVsYXk6IC0tdmFsdWUoLS1hbmltYXRpb24tZGVsYXktICosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbICpdKTtcbiAgLS10dy1hbmltYXRpb24tZGVsYXk6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcbiAgLS10dy1hbmltYXRpb24tZGVsYXk6IC0tdmFsdWUoLS1hbmltYXRpb24tZGVsYXktICosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgcmVwZWF0LSoge1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAtLXZhbHVlKC0tYW5pbWF0aW9uLXJlcGVhdC0gKiwgbnVtYmVyLCBcImluaXRpYWxcIiwgWyAqXSk7XG4gIC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogLS12YWx1ZSgtLWFuaW1hdGlvbi1yZXBlYXQtICosIG51bWJlciwgXCJpbml0aWFsXCIsIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBkaXJlY3Rpb24tKiB7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IC0tdmFsdWUoLS1hbmltYXRpb24tZGlyZWN0aW9uLSAqLCBcImluaXRpYWxcIiwgWyAqXSk7XG4gIC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kaXJlY3Rpb24tICosIFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgZmlsbC1tb2RlLSoge1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWZpbGwtbW9kZS0gKiwgXCJpbml0aWFsXCIsIFsgKl0pO1xuICAtLXR3LWFuaW1hdGlvbi1maWxsLW1vZGU6IC0tdmFsdWUoLS1hbmltYXRpb24tZmlsbC1tb2RlLSAqLCBcImluaXRpYWxcIiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IHJ1bm5pbmcge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cbkB1dGlsaXR5IHBhdXNlZCB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5AdXRpbGl0eSBwbGF5LXN0YXRlLSoge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogLS12YWx1ZShcImluaXRpYWxcIiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IGZhZGUtaW4ge1xuICAtLXR3LWVudGVyLW9wYWNpdHk6IDA7XG59XG5AdXRpbGl0eSBmYWRlLWluLSoge1xuICAtLXR3LWVudGVyLW9wYWNpdHk6IGNhbGMoLS12YWx1ZShudW1iZXIpIC8gMTAwKTtcbiAgLS10dy1lbnRlci1vcGFjaXR5OiAtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IGZhZGUtb3V0IHtcbiAgLS10dy1leGl0LW9wYWNpdHk6IDA7XG59XG5AdXRpbGl0eSBmYWRlLW91dC0qIHtcbiAgLS10dy1leGl0LW9wYWNpdHk6IGNhbGMoLS12YWx1ZShudW1iZXIpIC8gMTAwKTtcbiAgLS10dy1leGl0LW9wYWNpdHk6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgem9vbS1pbiB7XG4gIC0tdHctZW50ZXItc2NhbGU6IDA7XG59XG5AdXRpbGl0eSB6b29tLWluLSoge1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDElKTtcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcbn1cbkB1dGlsaXR5IC16b29tLWluLSoge1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xJSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgem9vbS1vdXQge1xuICAtLXR3LWV4aXQtc2NhbGU6IDA7XG59XG5AdXRpbGl0eSB6b29tLW91dC0qIHtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDElKTtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUocmF0aW8pKTtcbiAgLS10dy1leGl0LXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgWyAqXSk7XG59XG5AdXRpbGl0eSAtem9vbS1vdXQtKiB7XG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAtMSUpO1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMSk7XG4gIC0tdHctZXhpdC1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBzcGluLWluIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IDMwZGVnO1xufVxuQHV0aWxpdHkgc3Bpbi1pbi0qIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMWRlZyk7XG4gIC0tdHctZW50ZXItcm90YXRlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogMzYwZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtICosIFsgKl0pO1xufVxuQHV0aWxpdHkgLXNwaW4taW4ge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogLTMwZGVnO1xufVxuQHV0aWxpdHkgLXNwaW4taW4tKiB7XG4gIC0tdHctZW50ZXItcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMzYwZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtICosIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBzcGluLW91dCB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IDMwZGVnO1xufVxuQHV0aWxpdHkgc3Bpbi1vdXQtKiB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMWRlZyk7XG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAzNjBkZWcpO1xuICAtLXR3LWV4aXQtcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSAqLCBbICpdKTtcbn1cbkB1dGlsaXR5IC1zcGluLW91dCB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IC0zMGRlZztcbn1cbkB1dGlsaXR5IC1zcGluLW91dC0qIHtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAtMWRlZyk7XG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMzYwZGVnKTtcbiAgLS10dy1leGl0LXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0gKiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tdG9wIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXRvcC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1ib3R0b20ge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1ib3R0b20tKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tbGVmdCB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1sZWZ0LSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tcmlnaHQge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1yaWdodC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1zdGFydCB7XG4gICY6ZGlyKGx0cikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB9XG4gICY6ZGlyKHJ0bCkge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IDEwMCU7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tc3RhcnQtKiB7XG4gICY6d2hlcmUoOmRpcihsdHIpLCBbZGlyPVwibHRyXCJdLCBbZGlyPVwibHRyXCJdICopIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG4gIH1cbiAgJjp3aGVyZSg6ZGlyKHJ0bCksIFtkaXI9XCJydGxcIl0sIFtkaXI9XCJydGxcIl0gKikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1lbmQge1xuICAmOmRpcihsdHIpIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAxMDAlO1xuICB9XG4gICY6ZGlyKHJ0bCkge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWVuZC0qIHtcbiAgJjp3aGVyZSg6ZGlyKGx0ciksIFtkaXI9XCJsdHJcIl0sIFtkaXI9XCJsdHJcIl0gKikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbiAgfVxuICAmOndoZXJlKDpkaXIocnRsKSwgW2Rpcj1cInJ0bFwiXSwgW2Rpcj1cInJ0bFwiXSAqKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xuICB9XG59XG5cbkB1dGlsaXR5IHNsaWRlLW91dC10by10b3Age1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXRvcC0qIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1ib3R0b20ge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tYm90dG9tLSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1sZWZ0IHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1sZWZ0LSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXJpZ2h0IHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXJpZ2h0LSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1zdGFydCB7XG4gICY6ZGlyKGx0cikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogLTEwMCU7XG4gIH1cbiAgJjpkaXIocnRsKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAxMDAlO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tc3RhcnQtKiB7XG4gICY6d2hlcmUoOmRpcihsdHIpLCBbZGlyPVwibHRyXCJdLCBbZGlyPVwibHRyXCJdICopIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbiAgfVxuICAmOndoZXJlKDpkaXIocnRsKSwgW2Rpcj1cInJ0bFwiXSwgW2Rpcj1cInJ0bFwiXSAqKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1lbmQge1xuICAmOmRpcihsdHIpIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XG4gIH1cbiAgJjpkaXIocnRsKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtMTAwJTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWVuZC0qIHtcbiAgJjp3aGVyZSg6ZGlyKGx0ciksIFtkaXI9XCJsdHJcIl0sIFtkaXI9XCJsdHJcIl0gKikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xuICB9XG4gICY6d2hlcmUoOmRpcihydGwpLCBbZGlyPVwicnRsXCJdLCBbZGlyPVwicnRsXCJdICopIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbiAgfVxufVxuXG4vKipcbiAqIFxcYHNoYWRjblxcYCBnbG9iYWxzXG4gKi9cblxuQGN1c3RvbS12YXJpYW50IGRhcmsgKCY6aXMoLmRhcmsgKikpO1xuXG5AdGhlbWUgaW5saW5lIHtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgLS1jb2xvci1mb3JlZ3JvdW5kOiB2YXIoLS1mb3JlZ3JvdW5kKTtcbiAgLS1mb250LXNhbnM6IHZhcigtLWZvbnQtZ2Vpc3Qtc2Fucyk7XG4gIC0tZm9udC1tb25vOiB2YXIoLS1mb250LWdlaXN0LW1vbm8pO1xuICAtLWNvbG9yLXNpZGViYXItcmluZzogdmFyKC0tc2lkZWJhci1yaW5nKTtcbiAgLS1jb2xvci1zaWRlYmFyLWJvcmRlcjogdmFyKC0tc2lkZWJhci1ib3JkZXIpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50OiB2YXIoLS1zaWRlYmFyLWFjY2VudCk7XG4gIC0tY29sb3Itc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnk6IHZhcigtLXNpZGViYXItcHJpbWFyeSk7XG4gIC0tY29sb3Itc2lkZWJhci1mb3JlZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXI6IHZhcigtLXNpZGViYXIpO1xuICAtLWNvbG9yLWNoYXJ0LTU6IHZhcigtLWNoYXJ0LTUpO1xuICAtLWNvbG9yLWNoYXJ0LTQ6IHZhcigtLWNoYXJ0LTQpO1xuICAtLWNvbG9yLWNoYXJ0LTM6IHZhcigtLWNoYXJ0LTMpO1xuICAtLWNvbG9yLWNoYXJ0LTI6IHZhcigtLWNoYXJ0LTIpO1xuICAtLWNvbG9yLWNoYXJ0LTE6IHZhcigtLWNoYXJ0LTEpO1xuICAtLWNvbG9yLXJpbmc6IHZhcigtLXJpbmcpO1xuICAtLWNvbG9yLWlucHV0OiB2YXIoLS1pbnB1dCk7XG4gIC0tY29sb3ItYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAtLWNvbG9yLWRlc3RydWN0aXZlOiB2YXIoLS1kZXN0cnVjdGl2ZSk7XG4gIC0tY29sb3ItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLWFjY2VudC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1hY2NlbnQ6IHZhcigtLWFjY2VudCk7XG4gIC0tY29sb3ItbXV0ZWQtZm9yZWdyb3VuZDogdmFyKC0tbXV0ZWQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItbXV0ZWQ6IHZhcigtLW11dGVkKTtcbiAgLS1jb2xvci1zZWNvbmRhcnktZm9yZWdyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXByaW1hcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XG4gIC0tY29sb3ItcG9wb3Zlci1mb3JlZ3JvdW5kOiB2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXBvcG92ZXI6IHZhcigtLXBvcG92ZXIpO1xuICAtLWNvbG9yLWNhcmQtZm9yZWdyb3VuZDogdmFyKC0tY2FyZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1jYXJkOiB2YXIoLS1jYXJkKTtcbiAgLS1yYWRpdXMtc206IGNhbGModmFyKC0tcmFkaXVzKSAtIDRweCk7XG4gIC0tcmFkaXVzLW1kOiBjYWxjKHZhcigtLXJhZGl1cykgLSAycHgpO1xuICAtLXJhZGl1cy1sZzogdmFyKC0tcmFkaXVzKTtcbiAgLS1yYWRpdXMteGw6IGNhbGModmFyKC0tcmFkaXVzKSArIDRweCk7XG59XG5cbjpyb290IHtcbiAgLS1yYWRpdXM6IDAuNjI1cmVtO1xuICAtLWJhY2tncm91bmQ6IG9rbGNoKDEgMCAwKTtcbiAgLS1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLWNhcmQ6IG9rbGNoKDEgMCAwKTtcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tcG9wb3Zlcjogb2tsY2goMSAwIDApO1xuICAtLXBvcG92ZXItZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1wcmltYXJ5OiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zZWNvbmRhcnk6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1tdXRlZDogb2tsY2goMC45NyAwIDApO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNTU2IDAgMCk7XG4gIC0tYWNjZW50OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tZGVzdHJ1Y3RpdmU6IG9rbGNoKDAuNTc3IDAuMjQ1IDI3LjMyNSk7XG4gIC0tYm9yZGVyOiBva2xjaCgwLjkyMiAwIDApO1xuICAtLWlucHV0OiBva2xjaCgwLjkyMiAwIDApO1xuICAtLXJpbmc6IG9rbGNoKDAuNzA4IDAgMCk7XG4gIC0tY2hhcnQtMTogb2tsY2goMC42NDYgMC4yMjIgNDEuMTE2KTtcbiAgLS1jaGFydC0yOiBva2xjaCgwLjYgMC4xMTggMTg0LjcwNCk7XG4gIC0tY2hhcnQtMzogb2tsY2goMC4zOTggMC4wNyAyMjcuMzkyKTtcbiAgLS1jaGFydC00OiBva2xjaCgwLjgyOCAwLjE4OSA4NC40MjkpO1xuICAtLWNoYXJ0LTU6IG9rbGNoKDAuNzY5IDAuMTg4IDcwLjA4KTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQ6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItYm9yZGVyOiBva2xjaCgwLjkyMiAwIDApO1xuICAtLXNpZGViYXItcmluZzogb2tsY2goMC43MDggMCAwKTtcbn1cblxuLmRhcmsge1xuICAtLWJhY2tncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1jYXJkOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLWNhcmQtZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1wb3BvdmVyOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXBvcG92ZXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1wcmltYXJ5OiBva2xjaCgwLjkyMiAwIDApO1xuICAtLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zZWNvbmRhcnk6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tc2Vjb25kYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tbXV0ZWQ6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tbXV0ZWQtZm9yZWdyb3VuZDogb2tsY2goMC43MDggMCAwKTtcbiAgLS1hY2NlbnQ6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tZGVzdHJ1Y3RpdmU6IG9rbGNoKDAuNzA0IDAuMTkxIDIyLjIxNik7XG4gIC0tYm9yZGVyOiBva2xjaCgxIDAgMCAvIDEwJSk7XG4gIC0taW5wdXQ6IG9rbGNoKDEgMCAwIC8gMTUlKTtcbiAgLS1yaW5nOiBva2xjaCgwLjU1NiAwIDApO1xuICAtLWNoYXJ0LTE6IG9rbGNoKDAuNDg4IDAuMjQzIDI2NC4zNzYpO1xuICAtLWNoYXJ0LTI6IG9rbGNoKDAuNjk2IDAuMTcgMTYyLjQ4KTtcbiAgLS1jaGFydC0zOiBva2xjaCgwLjc2OSAwLjE4OCA3MC4wOCk7XG4gIC0tY2hhcnQtNDogb2tsY2goMC42MjcgMC4yNjUgMzAzLjkpO1xuICAtLWNoYXJ0LTU6IG9rbGNoKDAuNjQ1IDAuMjQ2IDE2LjQzOSk7XG4gIC0tc2lkZWJhcjogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1wcmltYXJ5OiBva2xjaCgwLjQ4OCAwLjI0MyAyNjQuMzc2KTtcbiAgLS1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudDogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYm9yZGVyOiBva2xjaCgxIDAgMCAvIDEwJSk7XG4gIC0tc2lkZWJhci1yaW5nOiBva2xjaCgwLjU1NiAwIDApO1xufVxuXG5AbGF5ZXIgYmFzZSB7XG4gICoge1xuICAgIEBhcHBseSBib3JkZXItYm9yZGVyIG91dGxpbmUtcmluZy81MDtcbiAgfVxuICBib2R5IHtcbiAgICBAYXBwbHkgYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmQ7XG4gIH1cbn1cblxuaHRtbCB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZXMpO1xufSkoKTtcbiJdfQ==