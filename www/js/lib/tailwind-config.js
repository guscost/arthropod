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

  --animate-in: enter var(--tw-duration, 150ms) var(--tw-ease, ease);
  --animate-out: exit var(--tw-duration, 150ms) var(--tw-ease, ease);

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
  * Radix and Bits UI utilize CSS variables to define the height of Accordion and Collapsible
  * content during open/close animations. The \`--radix/bits-accordion-content-height\` variables
  * control the height of Accordion content, while collapsible variables are used for Collapsibles.
  *
  * The fallback value \`auto\` is used here, but it depends on the \`interpolate-size: allow-keywords\`
  * property, which currently has limited browser support. For more details, see: 
  * <https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size>
  */

  --animate-accordion-down: accordion-down var(--tw-duration, 200ms) ease-out;
  --animate-accordion-up: accordion-up var(--tw-duration, 200ms) ease-out;
  --animate-collapsible-down: collapsible-down var(--tw-duration, 200ms) ease-out;
  --animate-collapsible-up: collapsible-up var(--tw-duration, 200ms) ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height, var(--bits-accordion-content-height, auto));
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height, var(--bits-accordion-content-height, auto));
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
      height: var(--radix-collapsible-content-height, var(--bits-collapsible-content-height, auto));
    }
  }

  @keyframes collapsible-up {
    from {
      height: var(--radix-collapsible-content-height, var(--bits-collapsible-content-height, auto));
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

/*
 * Tailwind's default \`duration\` utility sets the \`--tw-duration\` variable, so
 * can set \`animation-duration\` directly in the animation definition in the
 * \`@theme\` section above. Same goes for the \`animation-timing-function\`, set
 * with \`--tw-ease\`.
 */

@utility delay-* {
  animation-delay: calc(--value(number) * 1ms);
  animation-delay: --value(--animation-delay- *, [duration], "initial", [ *]);
}

@utility repeat-* {
  animation-iteration-count: --value(--animation-repeat- *, number, "initial", [ *]);
}

@utility direction-* {
  animation-direction: --value(--animation-direction- *, "initial", [ *]);
}

@utility fill-mode-* {
  animation-fill-mode: --value(--animation-fill-mode- *, "initial", [ *]);
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
  --tw-enter-scale: calc(--value([percentage]) / 100%);
  --tw-enter-scale: calc(--value([ratio], [number]));
  --tw-enter-scale: --value(--percentage- *);
}

@utility zoom-out {
  --tw-exit-scale: 0;
}
@utility zoom-out-* {
  --tw-exit-scale: calc(--value([percentage]) / 100%);
  --tw-exit-scale: calc(--value([ratio], [number]));
  --tw-exit-scale: --value(--percentage- *);
}

@utility spin-in {
  --tw-enter-rotate: 30deg;
}
@utility spin-in-* {
  --tw-enter-rotate: calc(--value(number) * 1deg);
  --tw-enter-rotate: --value(--rotate- *, [angle]);
}

@utility spin-out {
  --tw-exit-rotate: 30deg;
}
@utility spin-out-* {
  --tw-exit-rotate: calc(--value(number) * 1deg);
  --tw-exit-rotate: --value(--rotate- *, [angle]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbWIxQixDQUFDO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVuZCBnbG9iYWwgdGFpbHdpbmQgc3R5bGVzaGVldFxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBnbG9iYWxTdHlsZXMudHlwZSA9IFwidGV4dC90YWlsd2luZGNzc1wiO1xuICBnbG9iYWxTdHlsZXMuaW5uZXJIVE1MID0gYEBpbXBvcnQgXCJ0YWlsd2luZGNzc1wiO1xuXG4vKipcbiAqIFRhaWx3aW5kQ1NTIHY0LjAgY29tcGF0aWJsZSByZXBsYWNlbWVudCBmb3IgXFxgdGFpbHdpbmRjc3MtYW5pbWF0ZVxcYC5cbiAqXG4gKiBAYXV0aG9yIEx1Y2EgQm9zaW4gPGh0dHBzOi8vZ2l0aHViLmNvbS9Xb21ib3N2aWRlbz5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbkB0aGVtZSBpbmxpbmUge1xuICAvKiBQcmVkZWZpbmVkIHZhbHVlcyAqL1xuXG4gIC0tYW5pbWF0aW9uLWRlbGF5LTA6IDBzO1xuICAtLWFuaW1hdGlvbi1kZWxheS03NTogNzVtcztcbiAgLS1hbmltYXRpb24tZGVsYXktMTAwOiAwLjFzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0xNTA6IDAuMTVzO1xuICAtLWFuaW1hdGlvbi1kZWxheS0yMDA6IDAuMnM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTMwMDogMC4zcztcbiAgLS1hbmltYXRpb24tZGVsYXktNTAwOiAwLjVzO1xuICAtLWFuaW1hdGlvbi1kZWxheS03MDA6IDAuN3M7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTEwMDA6IDFzO1xuXG4gIC0tYW5pbWF0aW9uLXJlcGVhdC0wOiAwO1xuICAtLWFuaW1hdGlvbi1yZXBlYXQtMTogMTtcbiAgLS1hbmltYXRpb24tcmVwZWF0LWluZmluaXRlOiBpbmZpbml0ZTtcblxuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tbm9ybWFsOiBub3JtYWw7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1yZXZlcnNlOiByZXZlcnNlO1xuICAtLWFuaW1hdGlvbi1kaXJlY3Rpb24tYWx0ZXJuYXRlOiBhbHRlcm5hdGU7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1hbHRlcm5hdGUtcmV2ZXJzZTogYWx0ZXJuYXRlLXJldmVyc2U7XG5cbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLW5vbmU6IG5vbmU7XG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1mb3J3YXJkczogZm9yd2FyZHM7XG4gIC0tYW5pbWF0aW9uLWZpbGwtbW9kZS1iYWNrd2FyZHM6IGJhY2t3YXJkcztcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWJvdGg6IGJvdGg7XG5cbiAgLS1wZXJjZW50YWdlLTA6IDA7XG4gIC0tcGVyY2VudGFnZS01OiAwLjA1O1xuICAtLXBlcmNlbnRhZ2UtMTA6IDAuMTtcbiAgLS1wZXJjZW50YWdlLTE1OiAwLjE1O1xuICAtLXBlcmNlbnRhZ2UtMjA6IDAuMjtcbiAgLS1wZXJjZW50YWdlLTI1OiAwLjI1O1xuICAtLXBlcmNlbnRhZ2UtMzA6IDAuMztcbiAgLS1wZXJjZW50YWdlLTM1OiAwLjM1O1xuICAtLXBlcmNlbnRhZ2UtNDA6IDAuNDtcbiAgLS1wZXJjZW50YWdlLTQ1OiAwLjQ1O1xuICAtLXBlcmNlbnRhZ2UtNTA6IDAuNTtcbiAgLS1wZXJjZW50YWdlLTU1OiAwLjU1O1xuICAtLXBlcmNlbnRhZ2UtNjA6IDAuNjtcbiAgLS1wZXJjZW50YWdlLTY1OiAwLjY1O1xuICAtLXBlcmNlbnRhZ2UtNzA6IDAuNztcbiAgLS1wZXJjZW50YWdlLTc1OiAwLjc1O1xuICAtLXBlcmNlbnRhZ2UtODA6IDAuODtcbiAgLS1wZXJjZW50YWdlLTg1OiAwLjg1O1xuICAtLXBlcmNlbnRhZ2UtOTA6IDAuOTtcbiAgLS1wZXJjZW50YWdlLTk1OiAwLjk1O1xuICAtLXBlcmNlbnRhZ2UtMTAwOiAxO1xuICAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLWZ1bGw6IDE7XG5cbiAgLyogQW5pbWF0aW9ucyBhbmQga2V5ZnJhbWVzICovXG5cbiAgLS1hbmltYXRlLWluOiBlbnRlciB2YXIoLS10dy1kdXJhdGlvbiwgMTUwbXMpIHZhcigtLXR3LWVhc2UsIGVhc2UpO1xuICAtLWFuaW1hdGUtb3V0OiBleGl0IHZhcigtLXR3LWR1cmF0aW9uLCAxNTBtcykgdmFyKC0tdHctZWFzZSwgZWFzZSk7XG5cbiAgQGtleWZyYW1lcyBlbnRlciB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiB2YXIoLS10dy1lbnRlci1vcGFjaXR5LCAxKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXgsIDApLCB2YXIoLS10dy1lbnRlci10cmFuc2xhdGUteSwgMCksIDApXG4gICAgICAgIHNjYWxlM2QodmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSksIHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSlcbiAgICAgICAgcm90YXRlKHZhcigtLXR3LWVudGVyLXJvdGF0ZSwgMCkpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgZXhpdCB7XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogdmFyKC0tdHctZXhpdC1vcGFjaXR5LCAxKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QodmFyKC0tdHctZXhpdC10cmFuc2xhdGUteCwgMCksIHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXksIDApLCAwKVxuICAgICAgICBzY2FsZTNkKHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpLCB2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSkpXG4gICAgICAgIHJvdGF0ZSh2YXIoLS10dy1leGl0LXJvdGF0ZSwgMCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICogUmFkaXggYW5kIEJpdHMgVUkgdXRpbGl6ZSBDU1MgdmFyaWFibGVzIHRvIGRlZmluZSB0aGUgaGVpZ2h0IG9mIEFjY29yZGlvbiBhbmQgQ29sbGFwc2libGVcbiAgKiBjb250ZW50IGR1cmluZyBvcGVuL2Nsb3NlIGFuaW1hdGlvbnMuIFRoZSBcXGAtLXJhZGl4L2JpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0XFxgIHZhcmlhYmxlc1xuICAqIGNvbnRyb2wgdGhlIGhlaWdodCBvZiBBY2NvcmRpb24gY29udGVudCwgd2hpbGUgY29sbGFwc2libGUgdmFyaWFibGVzIGFyZSB1c2VkIGZvciBDb2xsYXBzaWJsZXMuXG4gICpcbiAgKiBUaGUgZmFsbGJhY2sgdmFsdWUgXFxgYXV0b1xcYCBpcyB1c2VkIGhlcmUsIGJ1dCBpdCBkZXBlbmRzIG9uIHRoZSBcXGBpbnRlcnBvbGF0ZS1zaXplOiBhbGxvdy1rZXl3b3Jkc1xcYFxuICAqIHByb3BlcnR5LCB3aGljaCBjdXJyZW50bHkgaGFzIGxpbWl0ZWQgYnJvd3NlciBzdXBwb3J0LiBGb3IgbW9yZSBkZXRhaWxzLCBzZWU6IFxuICAqIDxodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvaW50ZXJwb2xhdGUtc2l6ZT5cbiAgKi9cblxuICAtLWFuaW1hdGUtYWNjb3JkaW9uLWRvd246IGFjY29yZGlvbi1kb3duIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykgZWFzZS1vdXQ7XG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tdXA6IGFjY29yZGlvbi11cCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpIGVhc2Utb3V0O1xuICAtLWFuaW1hdGUtY29sbGFwc2libGUtZG93bjogY29sbGFwc2libGUtZG93biB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpIGVhc2Utb3V0O1xuICAtLWFuaW1hdGUtY29sbGFwc2libGUtdXA6IGNvbGxhcHNpYmxlLXVwIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykgZWFzZS1vdXQ7XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tZG93biB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogdmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1iaXRzLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgYXV0bykpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLXVwIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogdmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1iaXRzLWFjY29yZGlvbi1jb250ZW50LWhlaWdodCwgYXV0bykpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjb2xsYXBzaWJsZS1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgdmFyKC0tYml0cy1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgYXV0bykpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgY29sbGFwc2libGUtdXAge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgdmFyKC0tYml0cy1jb2xsYXBzaWJsZS1jb250ZW50LWhlaWdodCwgYXV0bykpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLS1hbmltYXRlLWNhcmV0LWJsaW5rOiBjYXJldC1ibGluayAxLjI1cyBlYXNlLW91dCBpbmZpbml0ZTtcblxuICBAa2V5ZnJhbWVzIGNhcmV0LWJsaW5rIHtcbiAgICAwJSxcbiAgICA3MCUsXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyMCUsXG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG59XG5cbi8qIFV0aWxpdHkgY2xhc3NlcyAqL1xuXG4vKlxuICogVGFpbHdpbmQncyBkZWZhdWx0IFxcYGR1cmF0aW9uXFxgIHV0aWxpdHkgc2V0cyB0aGUgXFxgLS10dy1kdXJhdGlvblxcYCB2YXJpYWJsZSwgc29cbiAqIGNhbiBzZXQgXFxgYW5pbWF0aW9uLWR1cmF0aW9uXFxgIGRpcmVjdGx5IGluIHRoZSBhbmltYXRpb24gZGVmaW5pdGlvbiBpbiB0aGVcbiAqIFxcYEB0aGVtZVxcYCBzZWN0aW9uIGFib3ZlLiBTYW1lIGdvZXMgZm9yIHRoZSBcXGBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXFxgLCBzZXRcbiAqIHdpdGggXFxgLS10dy1lYXNlXFxgLlxuICovXG5cbkB1dGlsaXR5IGRlbGF5LSoge1xuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRlbGF5LSAqLCBbZHVyYXRpb25dLCBcImluaXRpYWxcIiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IHJlcGVhdC0qIHtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogLS12YWx1ZSgtLWFuaW1hdGlvbi1yZXBlYXQtICosIG51bWJlciwgXCJpbml0aWFsXCIsIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBkaXJlY3Rpb24tKiB7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IC0tdmFsdWUoLS1hbmltYXRpb24tZGlyZWN0aW9uLSAqLCBcImluaXRpYWxcIiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IGZpbGwtbW9kZS0qIHtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogLS12YWx1ZSgtLWFuaW1hdGlvbi1maWxsLW1vZGUtICosIFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgcnVubmluZyB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xufVxuQHV0aWxpdHkgcGF1c2VkIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cbkB1dGlsaXR5IHBsYXktc3RhdGUtKiB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiAtLXZhbHVlKFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgZmFkZS1pbiB7XG4gIC0tdHctZW50ZXItb3BhY2l0eTogMDtcbn1cbkB1dGlsaXR5IGZhZGUtaW4tKiB7XG4gIC0tdHctZW50ZXItb3BhY2l0eTogY2FsYygtLXZhbHVlKG51bWJlcikgLyAxMDApO1xuICAtLXR3LWVudGVyLW9wYWNpdHk6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgZmFkZS1vdXQge1xuICAtLXR3LWV4aXQtb3BhY2l0eTogMDtcbn1cbkB1dGlsaXR5IGZhZGUtb3V0LSoge1xuICAtLXR3LWV4aXQtb3BhY2l0eTogY2FsYygtLXZhbHVlKG51bWJlcikgLyAxMDApO1xuICAtLXR3LWV4aXQtb3BhY2l0eTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xufVxuXG5AdXRpbGl0eSB6b29tLWluIHtcbiAgLS10dy1lbnRlci1zY2FsZTogMDtcbn1cbkB1dGlsaXR5IHpvb20taW4tKiB7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShbcGVyY2VudGFnZV0pIC8gMTAwJSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IGNhbGMoLS12YWx1ZShbcmF0aW9dLCBbbnVtYmVyXSkpO1xuICAtLXR3LWVudGVyLXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0gKik7XG59XG5cbkB1dGlsaXR5IHpvb20tb3V0IHtcbiAgLS10dy1leGl0LXNjYWxlOiAwO1xufVxuQHV0aWxpdHkgem9vbS1vdXQtKiB7XG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKFtwZXJjZW50YWdlXSkgLyAxMDAlKTtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUoW3JhdGlvXSwgW251bWJlcl0pKTtcbiAgLS10dy1leGl0LXNjYWxlOiAtLXZhbHVlKC0tcGVyY2VudGFnZS0gKik7XG59XG5cbkB1dGlsaXR5IHNwaW4taW4ge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogMzBkZWc7XG59XG5AdXRpbGl0eSBzcGluLWluLSoge1xuICAtLXR3LWVudGVyLXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxZGVnKTtcbiAgLS10dy1lbnRlci1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtICosIFthbmdsZV0pO1xufVxuXG5AdXRpbGl0eSBzcGluLW91dCB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IDMwZGVnO1xufVxuQHV0aWxpdHkgc3Bpbi1vdXQtKiB7XG4gIC0tdHctZXhpdC1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMWRlZyk7XG4gIC0tdHctZXhpdC1yb3RhdGU6IC0tdmFsdWUoLS1yb3RhdGUtICosIFthbmdsZV0pO1xufVxuXG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXRvcCB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS10b3AtKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIC0xMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tYm90dG9tIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tYm90dG9tLSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWxlZnQge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tbGVmdC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXJpZ2h0IHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tcmlnaHQtKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cblxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXRvcCB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tdG9wLSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWJvdHRvbSB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1ib3R0b20tKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWxlZnQge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWxlZnQtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tcmlnaHQge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tcmlnaHQtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuXG4vKipcbiAqIFxcYHNoYWRjblxcYCBnbG9iYWxzXG4gKi9cblxuQGN1c3RvbS12YXJpYW50IGRhcmsgKCY6aXMoLmRhcmsgKikpO1xuXG5AdGhlbWUgaW5saW5lIHtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgLS1jb2xvci1mb3JlZ3JvdW5kOiB2YXIoLS1mb3JlZ3JvdW5kKTtcbiAgLS1mb250LXNhbnM6IHZhcigtLWZvbnQtZ2Vpc3Qtc2Fucyk7XG4gIC0tZm9udC1tb25vOiB2YXIoLS1mb250LWdlaXN0LW1vbm8pO1xuICAtLWNvbG9yLXNpZGViYXItcmluZzogdmFyKC0tc2lkZWJhci1yaW5nKTtcbiAgLS1jb2xvci1zaWRlYmFyLWJvcmRlcjogdmFyKC0tc2lkZWJhci1ib3JkZXIpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50OiB2YXIoLS1zaWRlYmFyLWFjY2VudCk7XG4gIC0tY29sb3Itc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnk6IHZhcigtLXNpZGViYXItcHJpbWFyeSk7XG4gIC0tY29sb3Itc2lkZWJhci1mb3JlZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXI6IHZhcigtLXNpZGViYXIpO1xuICAtLWNvbG9yLWNoYXJ0LTU6IHZhcigtLWNoYXJ0LTUpO1xuICAtLWNvbG9yLWNoYXJ0LTQ6IHZhcigtLWNoYXJ0LTQpO1xuICAtLWNvbG9yLWNoYXJ0LTM6IHZhcigtLWNoYXJ0LTMpO1xuICAtLWNvbG9yLWNoYXJ0LTI6IHZhcigtLWNoYXJ0LTIpO1xuICAtLWNvbG9yLWNoYXJ0LTE6IHZhcigtLWNoYXJ0LTEpO1xuICAtLWNvbG9yLXJpbmc6IHZhcigtLXJpbmcpO1xuICAtLWNvbG9yLWlucHV0OiB2YXIoLS1pbnB1dCk7XG4gIC0tY29sb3ItYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAtLWNvbG9yLWRlc3RydWN0aXZlOiB2YXIoLS1kZXN0cnVjdGl2ZSk7XG4gIC0tY29sb3ItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLWFjY2VudC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1hY2NlbnQ6IHZhcigtLWFjY2VudCk7XG4gIC0tY29sb3ItbXV0ZWQtZm9yZWdyb3VuZDogdmFyKC0tbXV0ZWQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItbXV0ZWQ6IHZhcigtLW11dGVkKTtcbiAgLS1jb2xvci1zZWNvbmRhcnktZm9yZWdyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXByaW1hcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XG4gIC0tY29sb3ItcG9wb3Zlci1mb3JlZ3JvdW5kOiB2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXBvcG92ZXI6IHZhcigtLXBvcG92ZXIpO1xuICAtLWNvbG9yLWNhcmQtZm9yZWdyb3VuZDogdmFyKC0tY2FyZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1jYXJkOiB2YXIoLS1jYXJkKTtcbiAgLS1yYWRpdXMtc206IGNhbGModmFyKC0tcmFkaXVzKSAtIDRweCk7XG4gIC0tcmFkaXVzLW1kOiBjYWxjKHZhcigtLXJhZGl1cykgLSAycHgpO1xuICAtLXJhZGl1cy1sZzogdmFyKC0tcmFkaXVzKTtcbiAgLS1yYWRpdXMteGw6IGNhbGModmFyKC0tcmFkaXVzKSArIDRweCk7XG59XG5cbjpyb290IHtcbiAgLS1yYWRpdXM6IDAuNjI1cmVtO1xuICAtLWJhY2tncm91bmQ6IG9rbGNoKDEgMCAwKTtcbiAgLS1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLWNhcmQ6IG9rbGNoKDEgMCAwKTtcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tcG9wb3Zlcjogb2tsY2goMSAwIDApO1xuICAtLXBvcG92ZXItZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1wcmltYXJ5OiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zZWNvbmRhcnk6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1tdXRlZDogb2tsY2goMC45NyAwIDApO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNTU2IDAgMCk7XG4gIC0tYWNjZW50OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tZGVzdHJ1Y3RpdmU6IG9rbGNoKDAuNTc3IDAuMjQ1IDI3LjMyNSk7XG4gIC0tYm9yZGVyOiBva2xjaCgwLjkyMiAwIDApO1xuICAtLWlucHV0OiBva2xjaCgwLjkyMiAwIDApO1xuICAtLXJpbmc6IG9rbGNoKDAuNzA4IDAgMCk7XG4gIC0tY2hhcnQtMTogb2tsY2goMC42NDYgMC4yMjIgNDEuMTE2KTtcbiAgLS1jaGFydC0yOiBva2xjaCgwLjYgMC4xMTggMTg0LjcwNCk7XG4gIC0tY2hhcnQtMzogb2tsY2goMC4zOTggMC4wNyAyMjcuMzkyKTtcbiAgLS1jaGFydC00OiBva2xjaCgwLjgyOCAwLjE4OSA4NC40MjkpO1xuICAtLWNoYXJ0LTU6IG9rbGNoKDAuNzY5IDAuMTg4IDcwLjA4KTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQ6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItYm9yZGVyOiBva2xjaCgwLjkyMiAwIDApO1xuICAtLXNpZGViYXItcmluZzogb2tsY2goMC43MDggMCAwKTtcbn1cblxuLmRhcmsge1xuICAtLWJhY2tncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1jYXJkOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLWNhcmQtZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1wb3BvdmVyOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXBvcG92ZXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1wcmltYXJ5OiBva2xjaCgwLjkyMiAwIDApO1xuICAtLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zZWNvbmRhcnk6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tc2Vjb25kYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tbXV0ZWQ6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tbXV0ZWQtZm9yZWdyb3VuZDogb2tsY2goMC43MDggMCAwKTtcbiAgLS1hY2NlbnQ6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tZGVzdHJ1Y3RpdmU6IG9rbGNoKDAuNzA0IDAuMTkxIDIyLjIxNik7XG4gIC0tYm9yZGVyOiBva2xjaCgxIDAgMCAvIDEwJSk7XG4gIC0taW5wdXQ6IG9rbGNoKDEgMCAwIC8gMTUlKTtcbiAgLS1yaW5nOiBva2xjaCgwLjU1NiAwIDApO1xuICAtLWNoYXJ0LTE6IG9rbGNoKDAuNDg4IDAuMjQzIDI2NC4zNzYpO1xuICAtLWNoYXJ0LTI6IG9rbGNoKDAuNjk2IDAuMTcgMTYyLjQ4KTtcbiAgLS1jaGFydC0zOiBva2xjaCgwLjc2OSAwLjE4OCA3MC4wOCk7XG4gIC0tY2hhcnQtNDogb2tsY2goMC42MjcgMC4yNjUgMzAzLjkpO1xuICAtLWNoYXJ0LTU6IG9rbGNoKDAuNjQ1IDAuMjQ2IDE2LjQzOSk7XG4gIC0tc2lkZWJhcjogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1wcmltYXJ5OiBva2xjaCgwLjQ4OCAwLjI0MyAyNjQuMzc2KTtcbiAgLS1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudDogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYm9yZGVyOiBva2xjaCgxIDAgMCAvIDEwJSk7XG4gIC0tc2lkZWJhci1yaW5nOiBva2xjaCgwLjU1NiAwIDApO1xufVxuXG5AbGF5ZXIgYmFzZSB7XG4gICoge1xuICAgIEBhcHBseSBib3JkZXItYm9yZGVyIG91dGxpbmUtcmluZy81MDtcbiAgfVxuICBib2R5IHtcbiAgICBAYXBwbHkgYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmQ7XG4gIH1cbn1cblxuaHRtbCB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZXMpO1xufSkoKTtcbiJdfQ==