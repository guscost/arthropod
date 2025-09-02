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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxdEIxQixDQUFDO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVuZCBnbG9iYWwgdGFpbHdpbmQgc3R5bGVzaGVldFxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBnbG9iYWxTdHlsZXMudHlwZSA9IFwidGV4dC90YWlsd2luZGNzc1wiO1xuICBnbG9iYWxTdHlsZXMuaW5uZXJIVE1MID0gYC8qIEdsb2JhbCBDU1MsIHRhaWx3aW5kIHRoZW1lLCBzaGFkY24gKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZWlzdDp3Z2h0QDEwMC4uOTAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HZWlzdCtNb25vOndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwXCIpO1xuXG5AaW1wb3J0IFwidGFpbHdpbmRjc3NcIjtcblxuOnJvb3Qge1xuICAtLWZvbnQtZ2Vpc3Qtc2FuczogXCJHZWlzdFwiLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtZ2Vpc3QtbW9ubzogXCJHZWlzdCBNb25vXCIsIG1vbm9zcGFjZTtcbn1cblxuLyoqXG4gKiBUYWlsd2luZENTUyB2NC4wIGNvbXBhdGlibGUgcmVwbGFjZW1lbnQgZm9yIFxcYHRhaWx3aW5kY3NzLWFuaW1hdGVcXGAuXG4gKlxuICogQGF1dGhvciBMdWNhIEJvc2luIDxodHRwczovL2dpdGh1Yi5jb20vV29tYm9zdmlkZW8+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG46cm9vdCB7XG4gIC8qIEBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgZm9yIGFuaW1hdGlvbiB2YXJpYWJsZXMsIHRvIHByZXZlbnQgaW5oZXJpdGFuY2UgKi9cbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWRlbGF5IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwcztcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24ge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IG5vcm1hbDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgLyogZG9lcyBub3QgaGF2ZSBhbiBpbml0aWFsIHZhbHVlIGluIG9yZGVyIGZvciB0aGUgXFxgLS10dy1kdXJhdGlvblxcYCB2YXJpYWJsZSB0byB3b3JrICovXG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1hbmltYXRpb24tZmlsbC1tb2RlIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiBub25lO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLWJsdXIge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1lbnRlci1vcGFjaXR5IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAxO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZW50ZXItcm90YXRlIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZW50ZXItc2NhbGUge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDE7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1lbnRlci10cmFuc2xhdGUteCB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWVudGVyLXRyYW5zbGF0ZS15IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZXhpdC1ibHVyIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZXhpdC1vcGFjaXR5IHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAxO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZXhpdC1yb3RhdGUge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cblxuICBAcHJvcGVydHkgLS10dy1leGl0LXNjYWxlIHtcbiAgICBzeW50YXg6IFwiKlwiO1xuICAgIGluaGVyaXRzOiBmYWxzZTtcbiAgICBpbml0aWFsLXZhbHVlOiAxO1xuICB9XG5cbiAgQHByb3BlcnR5IC0tdHctZXhpdC10cmFuc2xhdGUteCB7XG4gICAgc3ludGF4OiBcIipcIjtcbiAgICBpbmhlcml0czogZmFsc2U7XG4gICAgaW5pdGlhbC12YWx1ZTogMDtcbiAgfVxuXG4gIEBwcm9wZXJ0eSAtLXR3LWV4aXQtdHJhbnNsYXRlLXkge1xuICAgIHN5bnRheDogXCIqXCI7XG4gICAgaW5oZXJpdHM6IGZhbHNlO1xuICAgIGluaXRpYWwtdmFsdWU6IDA7XG4gIH1cbn1cblxuQHRoZW1lIGlubGluZSB7XG4gIC8qIFByZWRlZmluZWQgdmFsdWVzICovXG5cbiAgLS1hbmltYXRpb24tZGVsYXktMDogMHM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTc1OiA3NW1zO1xuICAtLWFuaW1hdGlvbi1kZWxheS0xMDA6IDAuMXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTE1MDogMC4xNXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTIwMDogMC4ycztcbiAgLS1hbmltYXRpb24tZGVsYXktMzAwOiAwLjNzO1xuICAtLWFuaW1hdGlvbi1kZWxheS01MDA6IDAuNXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTcwMDogMC43cztcbiAgLS1hbmltYXRpb24tZGVsYXktMTAwMDogMXM7XG5cbiAgLS1hbmltYXRpb24tcmVwZWF0LTA6IDA7XG4gIC0tYW5pbWF0aW9uLXJlcGVhdC0xOiAxO1xuICAtLWFuaW1hdGlvbi1yZXBlYXQtaW5maW5pdGU6IGluZmluaXRlO1xuXG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1ub3JtYWw6IG5vcm1hbDtcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLXJldmVyc2U6IHJldmVyc2U7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1hbHRlcm5hdGU6IGFsdGVybmF0ZTtcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLWFsdGVybmF0ZS1yZXZlcnNlOiBhbHRlcm5hdGUtcmV2ZXJzZTtcblxuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtbm9uZTogbm9uZTtcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWZvcndhcmRzOiBmb3J3YXJkcztcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWJhY2t3YXJkczogYmFja3dhcmRzO1xuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtYm90aDogYm90aDtcblxuICAtLXBlcmNlbnRhZ2UtMDogMDtcbiAgLS1wZXJjZW50YWdlLTU6IDAuMDU7XG4gIC0tcGVyY2VudGFnZS0xMDogMC4xO1xuICAtLXBlcmNlbnRhZ2UtMTU6IDAuMTU7XG4gIC0tcGVyY2VudGFnZS0yMDogMC4yO1xuICAtLXBlcmNlbnRhZ2UtMjU6IDAuMjU7XG4gIC0tcGVyY2VudGFnZS0zMDogMC4zO1xuICAtLXBlcmNlbnRhZ2UtMzU6IDAuMzU7XG4gIC0tcGVyY2VudGFnZS00MDogMC40O1xuICAtLXBlcmNlbnRhZ2UtNDU6IDAuNDU7XG4gIC0tcGVyY2VudGFnZS01MDogMC41O1xuICAtLXBlcmNlbnRhZ2UtNTU6IDAuNTU7XG4gIC0tcGVyY2VudGFnZS02MDogMC42O1xuICAtLXBlcmNlbnRhZ2UtNjU6IDAuNjU7XG4gIC0tcGVyY2VudGFnZS03MDogMC43O1xuICAtLXBlcmNlbnRhZ2UtNzU6IDAuNzU7XG4gIC0tcGVyY2VudGFnZS04MDogMC44O1xuICAtLXBlcmNlbnRhZ2UtODU6IDAuODU7XG4gIC0tcGVyY2VudGFnZS05MDogMC45O1xuICAtLXBlcmNlbnRhZ2UtOTU6IDAuOTU7XG4gIC0tcGVyY2VudGFnZS0xMDA6IDE7XG4gIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtZnVsbDogMTtcblxuICAvKiBBbmltYXRpb25zIGFuZCBrZXlmcmFtZXMgKi9cblxuICAtLWFuaW1hdGUtaW46IGVudGVyIHZhcigtLXR3LWFuaW1hdGlvbi1kdXJhdGlvbiwgdmFyKC0tdHctZHVyYXRpb24sIDE1MG1zKSkgdmFyKC0tdHctZWFzZSwgZWFzZSlcbiAgICB2YXIoLS10dy1hbmltYXRpb24tZGVsYXksIDBzKSB2YXIoLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCAxKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCkgdmFyKC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSwgbm9uZSk7XG4gIC0tYW5pbWF0ZS1vdXQ6IGV4aXQgdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMTUwbXMpKSB2YXIoLS10dy1lYXNlLCBlYXNlKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kZWxheSwgMHMpIHZhcigtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIDEpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKSB2YXIoLS10dy1hbmltYXRpb24tZmlsbC1tb2RlLCBub25lKTtcblxuICBAa2V5ZnJhbWVzIGVudGVyIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IHZhcigtLXR3LWVudGVyLW9wYWNpdHksIDEpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS10dy1lbnRlci10cmFuc2xhdGUteCwgMCksIHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS15LCAwKSwgMClcbiAgICAgICAgc2NhbGUzZCh2YXIoLS10dy1lbnRlci1zY2FsZSwgMSksIHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSwgdmFyKC0tdHctZW50ZXItc2NhbGUsIDEpKVxuICAgICAgICByb3RhdGUodmFyKC0tdHctZW50ZXItcm90YXRlLCAwKSk7XG4gICAgICBmaWx0ZXI6IGJsdXIodmFyKC0tdHctZW50ZXItYmx1ciwgMCkpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgZXhpdCB7XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogdmFyKC0tdHctZXhpdC1vcGFjaXR5LCAxKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tdHctZXhpdC10cmFuc2xhdGUteCwgMCksIHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXksIDApLCAwKVxuICAgICAgICBzY2FsZTNkKHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpLCB2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSkpXG4gICAgICAgIHJvdGF0ZSh2YXIoLS10dy1leGl0LXJvdGF0ZSwgMCkpO1xuICAgICAgZmlsdGVyOiBibHVyKHZhcigtLXR3LWV4aXQtYmx1ciwgMCkpO1xuICAgIH1cbiAgfVxuXG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tZG93bjogYWNjb3JkaW9uLWRvd24gdmFyKC0tdHctYW5pbWF0aW9uLWR1cmF0aW9uLCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpKVxuICAgIHZhcigtLXR3LWVhc2UsIGVhc2Utb3V0KSB2YXIoLS10dy1hbmltYXRpb24tZGVsYXksIDBzKSB2YXIoLS10dy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCAxKVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCkgdmFyKC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZSwgbm9uZSk7XG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tdXA6IGFjY29yZGlvbi11cCB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykpXG4gICAgdmFyKC0tdHctZWFzZSwgZWFzZS1vdXQpIHZhcigtLXR3LWFuaW1hdGlvbi1kZWxheSwgMHMpIHZhcigtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIDEpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKSB2YXIoLS10dy1hbmltYXRpb24tZmlsbC1tb2RlLCBub25lKTtcbiAgLS1hbmltYXRlLWNvbGxhcHNpYmxlLWRvd246IGNvbGxhcHNpYmxlLWRvd25cbiAgICB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykpIHZhcigtLXR3LWVhc2UsIGVhc2Utb3V0KVxuICAgIHZhcigtLXR3LWFuaW1hdGlvbi1kZWxheSwgMHMpIHZhcigtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIDEpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKSB2YXIoLS10dy1hbmltYXRpb24tZmlsbC1tb2RlLCBub25lKTtcbiAgLS1hbmltYXRlLWNvbGxhcHNpYmxlLXVwOiBjb2xsYXBzaWJsZS11cCB2YXIoLS10dy1hbmltYXRpb24tZHVyYXRpb24sIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykpXG4gICAgdmFyKC0tdHctZWFzZSwgZWFzZS1vdXQpIHZhcigtLXR3LWFuaW1hdGlvbi1kZWxheSwgMHMpIHZhcigtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIDEpXG4gICAgdmFyKC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKSB2YXIoLS10dy1hbmltYXRpb24tZmlsbC1tb2RlLCBub25lKTtcblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS1iaXRzLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcbiAgICAgICAgICB2YXIoLS1yZWthLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgXG4gICAgICAgICAgdmFyKC0ta2ItYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1uZ3AtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tdXAge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiB2YXIoXG4gICAgICAgIC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LFxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS1iaXRzLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCxcbiAgICAgICAgICB2YXIoLS1yZWthLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgXG4gICAgICAgICAgdmFyKC0ta2ItYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1uZ3AtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNvbGxhcHNpYmxlLWRvd24ge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tYml0cy1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcbiAgICAgICAgICB2YXIoLS1yZWthLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgYXV0bykpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjb2xsYXBzaWJsZS11cCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcihcbiAgICAgICAgLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tYml0cy1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCxcbiAgICAgICAgICB2YXIoLS1yZWthLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1rYi1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgYXV0bykpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAtLWFuaW1hdGUtY2FyZXQtYmxpbms6IGNhcmV0LWJsaW5rIDEuMjVzIGVhc2Utb3V0IGluZmluaXRlO1xuXG4gIEBrZXlmcmFtZXMgY2FyZXQtYmxpbmsge1xuICAgIDAlLFxuICAgIDcwJSxcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDIwJSxcbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbn1cblxuLyogVXRpbGl0eSBjbGFzc2VzICovXG5cbkB1dGlsaXR5IGFuaW1hdGlvbi1kdXJhdGlvbi0qIHtcbiAgLS10dy1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcbiAgLS10dy1hbmltYXRpb24tZHVyYXRpb246IC0tdmFsdWUoLS1hbmltYXRpb24tZHVyYXRpb24tKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsqXSk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xuICBhbmltYXRpb24tZHVyYXRpb246IC0tdmFsdWUoLS1hbmltYXRpb24tZHVyYXRpb24tKiwgW2R1cmF0aW9uXSwgXCJpbml0aWFsXCIsIFsqXSk7XG59XG5cbkB1dGlsaXR5IGRlbGF5LSoge1xuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRlbGF5LSosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbKl0pO1xuICAtLXR3LWFuaW1hdGlvbi1kZWxheTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xuICAtLXR3LWFuaW1hdGlvbi1kZWxheTogLS12YWx1ZSgtLWFuaW1hdGlvbi1kZWxheS0qLCBbZHVyYXRpb25dLCBcImluaXRpYWxcIiwgWypdKTtcbn1cblxuQHV0aWxpdHkgcmVwZWF0LSoge1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAtLXZhbHVlKC0tYW5pbWF0aW9uLXJlcGVhdC0qLCBudW1iZXIsIFwiaW5pdGlhbFwiLCBbKl0pO1xuICAtLXR3LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IC0tdmFsdWUoLS1hbmltYXRpb24tcmVwZWF0LSosIG51bWJlciwgXCJpbml0aWFsXCIsIFsqXSk7XG59XG5cbkB1dGlsaXR5IGRpcmVjdGlvbi0qIHtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kaXJlY3Rpb24tKiwgXCJpbml0aWFsXCIsIFsqXSk7XG4gIC0tdHctYW5pbWF0aW9uLWRpcmVjdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kaXJlY3Rpb24tKiwgXCJpbml0aWFsXCIsIFsqXSk7XG59XG5cbkB1dGlsaXR5IGZpbGwtbW9kZS0qIHtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogLS12YWx1ZSgtLWFuaW1hdGlvbi1maWxsLW1vZGUtKiwgXCJpbml0aWFsXCIsIFsqXSk7XG4gIC0tdHctYW5pbWF0aW9uLWZpbGwtbW9kZTogLS12YWx1ZSgtLWFuaW1hdGlvbi1maWxsLW1vZGUtKiwgXCJpbml0aWFsXCIsIFsqXSk7XG59XG5cbkB1dGlsaXR5IHJ1bm5pbmcge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbn1cbkB1dGlsaXR5IHBhdXNlZCB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5AdXRpbGl0eSBwbGF5LXN0YXRlLSoge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogLS12YWx1ZShcImluaXRpYWxcIiwgWypdKTtcbn1cblxuQHV0aWxpdHkgYmx1ci1pbiB7XG4gIC0tdHctZW50ZXItYmx1cjogMjBweDtcbn1cbkB1dGlsaXR5IGJsdXItaW4tKiB7XG4gIC0tdHctZW50ZXItYmx1cjogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxcHgpO1xuICAtLXR3LWVudGVyLWJsdXI6IC0tdmFsdWUoLS1ibHVyLSosIFsqXSk7XG59XG5cbkB1dGlsaXR5IGJsdXItb3V0IHtcbiAgLS10dy1leGl0LWJsdXI6IDIwcHg7XG59XG5AdXRpbGl0eSBibHVyLW91dC0qIHtcbiAgLS10dy1leGl0LWJsdXI6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMXB4KTtcbiAgLS10dy1leGl0LWJsdXI6IC0tdmFsdWUoLS1ibHVyLSosIFsqXSk7XG59XG5cbkB1dGlsaXR5IGZhZGUtaW4ge1xuICAtLXR3LWVudGVyLW9wYWNpdHk6IDA7XG59XG5AdXRpbGl0eSBmYWRlLWluLSoge1xuICAtLXR3LWVudGVyLW9wYWNpdHk6IGNhbGMoLS12YWx1ZShudW1iZXIpIC8gMTAwKTtcbiAgLS10dy1lbnRlci1vcGFjaXR5OiAtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBmYWRlLW91dCB7XG4gIC0tdHctZXhpdC1vcGFjaXR5OiAwO1xufVxuQHV0aWxpdHkgZmFkZS1vdXQtKiB7XG4gIC0tdHctZXhpdC1vcGFjaXR5OiBjYWxjKC0tdmFsdWUobnVtYmVyKSAvIDEwMCk7XG4gIC0tdHctZXhpdC1vcGFjaXR5OiAtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCBbKl0pO1xufVxuXG5AdXRpbGl0eSB6b29tLWluIHtcbiAgLS10dy1lbnRlci1zY2FsZTogMDtcbn1cbkB1dGlsaXR5IHpvb20taW4tKiB7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMSUpO1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUocmF0aW8pKTtcbiAgLS10dy1lbnRlci1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgWypdKTtcbn1cbkB1dGlsaXR5IC16b29tLWluLSoge1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xJSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIFsqXSk7XG59XG5cbkB1dGlsaXR5IHpvb20tb3V0IHtcbiAgLS10dy1leGl0LXNjYWxlOiAwO1xufVxuQHV0aWxpdHkgem9vbS1vdXQtKiB7XG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxJSk7XG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSk7XG4gIC0tdHctZXhpdC1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgWypdKTtcbn1cbkB1dGlsaXR5IC16b29tLW91dC0qIHtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIC0xJSk7XG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xKTtcbiAgLS10dy1leGl0LXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBzcGluLWluIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IDMwZGVnO1xufVxuQHV0aWxpdHkgc3Bpbi1pbi0qIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMWRlZyk7XG4gIC0tdHctZW50ZXItcm90YXRlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogMzYwZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtKiwgWypdKTtcbn1cbkB1dGlsaXR5IC1zcGluLWluIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IC0zMGRlZztcbn1cbkB1dGlsaXR5IC1zcGluLWluLSoge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAtMWRlZyk7XG4gIC0tdHctZW50ZXItcm90YXRlOiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTM2MGRlZyk7XG4gIC0tdHctZW50ZXItcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSosIFsqXSk7XG59XG5cbkB1dGlsaXR5IHNwaW4tb3V0IHtcbiAgLS10dy1leGl0LXJvdGF0ZTogMzBkZWc7XG59XG5AdXRpbGl0eSBzcGluLW91dC0qIHtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxZGVnKTtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDM2MGRlZyk7XG4gIC0tdHctZXhpdC1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtKiwgWypdKTtcbn1cbkB1dGlsaXR5IC1zcGluLW91dCB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IC0zMGRlZztcbn1cbkB1dGlsaXR5IC1zcGluLW91dC0qIHtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAtMWRlZyk7XG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMzYwZGVnKTtcbiAgLS10dy1leGl0LXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0qLCBbKl0pO1xufVxuXG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXRvcCB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS10b3AtKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tYm90dG9tIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tYm90dG9tLSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWxlZnQge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tbGVmdC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIC0xMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1yaWdodCB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXJpZ2h0LSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXN0YXJ0IHtcbiAgJjpkaXIobHRyKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLTEwMCU7XG4gIH1cbiAgJjpkaXIocnRsKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogMTAwJTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1zdGFydC0qIHtcbiAgJjp3aGVyZSg6ZGlyKGx0ciksIFtkaXI9XCJsdHJcIl0sIFtkaXI9XCJsdHJcIl0gKikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIC0xMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbiAgfVxuICAmOndoZXJlKDpkaXIocnRsKSwgW2Rpcj1cInJ0bFwiXSwgW2Rpcj1cInJ0bFwiXSAqKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIDEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWVuZCB7XG4gICY6ZGlyKGx0cikge1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IDEwMCU7XG4gIH1cbiAgJjpkaXIocnRsKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogLTEwMCU7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tZW5kLSoge1xuICAmOndoZXJlKDpkaXIobHRyKSwgW2Rpcj1cImx0clwiXSwgW2Rpcj1cImx0clwiXSAqKSB7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIDEwMCUpO1xuICAgIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xuICB9XG4gICY6d2hlcmUoOmRpcihydGwpLCBbZGlyPVwicnRsXCJdLCBbZGlyPVwicnRsXCJdICopIHtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAtMTAwJSk7XG4gICAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG4gIH1cbn1cblxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXRvcCB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tdG9wLSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIC0xMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1ib3R0b20ge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tYm90dG9tLSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtKikgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1sZWZ0IHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1sZWZ0LSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIC0xMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1yaWdodCB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1yaWdodC0qIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tc3RhcnQge1xuICAmOmRpcihsdHIpIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xuICB9XG4gICY6ZGlyKHJ0bCkge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogMTAwJTtcbiAgfVxufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXN0YXJ0LSoge1xuICAmOndoZXJlKDpkaXIobHRyKSwgW2Rpcj1cImx0clwiXSwgW2Rpcj1cImx0clwiXSAqKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIC0xMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG4gIH1cbiAgJjp3aGVyZSg6ZGlyKHJ0bCksIFtkaXI9XCJydGxcIl0sIFtkaXI9XCJydGxcIl0gKikge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0qLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSopICogMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xuICB9XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tZW5kIHtcbiAgJjpkaXIobHRyKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiAxMDAlO1xuICB9XG4gICY6ZGlyKHJ0bCkge1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogLTEwMCU7XG4gIH1cbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1lbmQtKiB7XG4gICY6d2hlcmUoOmRpcihsdHIpLCBbZGlyPVwibHRyXCJdLCBbZGlyPVwibHRyXCJdICopIHtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIDEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAgIC0tdHctZXhpdC10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0qLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbiAgfVxuICAmOndoZXJlKDpkaXIocnRsKSwgW2Rpcj1cInJ0bFwiXSwgW2Rpcj1cInJ0bFwiXSAqKSB7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0qKSAqIC0xMDAlKTtcbiAgICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAtMTAwJSk7XG4gICAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG4gIH1cbn1cblxuLyoqXG4gKiBcXGBzaGFkY25cXGAgZ2xvYmFsc1xuICovXG5cbkBjdXN0b20tdmFyaWFudCBkYXJrICgmOmlzKC5kYXJrICopKTtcblxuQHRoZW1lIGlubGluZSB7XG4gIC0tY29sb3ItYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gIC0tY29sb3ItZm9yZWdyb3VuZDogdmFyKC0tZm9yZWdyb3VuZCk7XG4gIC0tZm9udC1zYW5zOiB2YXIoLS1mb250LWdlaXN0LXNhbnMpO1xuICAtLWZvbnQtbW9ubzogdmFyKC0tZm9udC1nZWlzdC1tb25vKTtcbiAgLS1jb2xvci1zaWRlYmFyLXJpbmc6IHZhcigtLXNpZGViYXItcmluZyk7XG4gIC0tY29sb3Itc2lkZWJhci1ib3JkZXI6IHZhcigtLXNpZGViYXItYm9yZGVyKTtcbiAgLS1jb2xvci1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zaWRlYmFyLWFjY2VudDogdmFyKC0tc2lkZWJhci1hY2NlbnQpO1xuICAtLWNvbG9yLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhci1wcmltYXJ5OiB2YXIoLS1zaWRlYmFyLXByaW1hcnkpO1xuICAtLWNvbG9yLXNpZGViYXItZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zaWRlYmFyOiB2YXIoLS1zaWRlYmFyKTtcbiAgLS1jb2xvci1jaGFydC01OiB2YXIoLS1jaGFydC01KTtcbiAgLS1jb2xvci1jaGFydC00OiB2YXIoLS1jaGFydC00KTtcbiAgLS1jb2xvci1jaGFydC0zOiB2YXIoLS1jaGFydC0zKTtcbiAgLS1jb2xvci1jaGFydC0yOiB2YXIoLS1jaGFydC0yKTtcbiAgLS1jb2xvci1jaGFydC0xOiB2YXIoLS1jaGFydC0xKTtcbiAgLS1jb2xvci1yaW5nOiB2YXIoLS1yaW5nKTtcbiAgLS1jb2xvci1pbnB1dDogdmFyKC0taW5wdXQpO1xuICAtLWNvbG9yLWJvcmRlcjogdmFyKC0tYm9yZGVyKTtcbiAgLS1jb2xvci1kZXN0cnVjdGl2ZTogdmFyKC0tZGVzdHJ1Y3RpdmUpO1xuICAtLWNvbG9yLWFjY2VudC1mb3JlZ3JvdW5kOiB2YXIoLS1hY2NlbnQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItYWNjZW50OiB2YXIoLS1hY2NlbnQpO1xuICAtLWNvbG9yLW11dGVkLWZvcmVncm91bmQ6IHZhcigtLW11dGVkLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLW11dGVkOiB2YXIoLS1tdXRlZCk7XG4gIC0tY29sb3Itc2Vjb25kYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNlY29uZGFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zZWNvbmRhcnk6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tY29sb3ItcHJpbWFyeS1mb3JlZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXByaW1hcnk6IHZhcigtLXByaW1hcnkpO1xuICAtLWNvbG9yLXBvcG92ZXItZm9yZWdyb3VuZDogdmFyKC0tcG9wb3Zlci1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1wb3BvdmVyOiB2YXIoLS1wb3BvdmVyKTtcbiAgLS1jb2xvci1jYXJkLWZvcmVncm91bmQ6IHZhcigtLWNhcmQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItY2FyZDogdmFyKC0tY2FyZCk7XG4gIC0tcmFkaXVzLXNtOiBjYWxjKHZhcigtLXJhZGl1cykgLSA0cHgpO1xuICAtLXJhZGl1cy1tZDogY2FsYyh2YXIoLS1yYWRpdXMpIC0gMnB4KTtcbiAgLS1yYWRpdXMtbGc6IHZhcigtLXJhZGl1cyk7XG4gIC0tcmFkaXVzLXhsOiBjYWxjKHZhcigtLXJhZGl1cykgKyA0cHgpO1xufVxuXG46cm9vdCB7XG4gIC0tcmFkaXVzOiAwLjYyNXJlbTtcbiAgLS1iYWNrZ3JvdW5kOiBva2xjaCgxIDAgMCk7XG4gIC0tZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1jYXJkOiBva2xjaCgxIDAgMCk7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXBvcG92ZXI6IG9rbGNoKDEgMCAwKTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tcHJpbWFyeTogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tc2Vjb25kYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tbXV0ZWQ6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjU1NiAwIDApO1xuICAtLWFjY2VudDogb2tsY2goMC45NyAwIDApO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjU3NyAwLjI0NSAyNy4zMjUpO1xuICAtLWJvcmRlcjogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1pbnB1dDogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1yaW5nOiBva2xjaCgwLjcwOCAwIDApO1xuICAtLWNoYXJ0LTE6IG9rbGNoKDAuNjQ2IDAuMjIyIDQxLjExNik7XG4gIC0tY2hhcnQtMjogb2tsY2goMC42IDAuMTE4IDE4NC43MDQpO1xuICAtLWNoYXJ0LTM6IG9rbGNoKDAuMzk4IDAuMDcgMjI3LjM5Mik7XG4gIC0tY2hhcnQtNDogb2tsY2goMC44MjggMC4xODkgODQuNDI5KTtcbiAgLS1jaGFydC01OiBva2xjaCgwLjc2OSAwLjE4OCA3MC4wOCk7XG4gIC0tc2lkZWJhcjogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tc2lkZWJhci1wcmltYXJ5OiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLWJvcmRlcjogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNzA4IDAgMCk7XG59XG5cbi5kYXJrIHtcbiAgLS1iYWNrZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tY2FyZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tcG9wb3Zlcjogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tcHJpbWFyeTogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjI2OSAwIDApO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNzA4IDAgMCk7XG4gIC0tYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjcwNCAwLjE5MSAyMi4yMTYpO1xuICAtLWJvcmRlcjogb2tsY2goMSAwIDAgLyAxMCUpO1xuICAtLWlucHV0OiBva2xjaCgxIDAgMCAvIDE1JSk7XG4gIC0tcmluZzogb2tsY2goMC41NTYgMCAwKTtcbiAgLS1jaGFydC0xOiBva2xjaCgwLjQ4OCAwLjI0MyAyNjQuMzc2KTtcbiAgLS1jaGFydC0yOiBva2xjaCgwLjY5NiAwLjE3IDE2Mi40OCk7XG4gIC0tY2hhcnQtMzogb2tsY2goMC43NjkgMC4xODggNzAuMDgpO1xuICAtLWNoYXJ0LTQ6IG9rbGNoKDAuNjI3IDAuMjY1IDMwMy45KTtcbiAgLS1jaGFydC01OiBva2xjaCgwLjY0NSAwLjI0NiAxNi40MzkpO1xuICAtLXNpZGViYXI6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeTogb2tsY2goMC40ODggMC4yNDMgMjY0LjM3Nik7XG4gIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQ6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWJvcmRlcjogb2tsY2goMSAwIDAgLyAxMCUpO1xuICAtLXNpZGViYXItcmluZzogb2tsY2goMC41NTYgMCAwKTtcbn1cblxuQGxheWVyIGJhc2Uge1xuICAqIHtcbiAgICBAYXBwbHkgYm9yZGVyLWJvcmRlciBvdXRsaW5lLXJpbmcvNTA7XG4gIH1cbiAgYm9keSB7XG4gICAgQGFwcGx5IGJnLWJhY2tncm91bmQgdGV4dC1mb3JlZ3JvdW5kO1xuICB9XG59XG5cbi8qKlxuICogXFxgYXJ0aHJvcG9kXFxgIGN1c3RvbWl6YXRpb25zXG4gKi9cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5odG1sIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5gO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdsb2JhbFN0eWxlcyk7XG59KSgpO1xuIl19