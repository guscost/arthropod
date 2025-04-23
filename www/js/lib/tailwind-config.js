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
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1YzFCLENBQUM7SUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwZW5kIGdsb2JhbCB0YWlsd2luZCBzdHlsZXNoZWV0XG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBnbG9iYWxTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGdsb2JhbFN0eWxlcy50eXBlID0gXCJ0ZXh0L3RhaWx3aW5kY3NzXCI7XG4gIGdsb2JhbFN0eWxlcy5pbm5lckhUTUwgPSBgQGltcG9ydCBcInRhaWx3aW5kY3NzXCI7XG5cbi8qKlxuICogVGFpbHdpbmRDU1MgdjQuMCBjb21wYXRpYmxlIHJlcGxhY2VtZW50IGZvciBcXGB0YWlsd2luZGNzcy1hbmltYXRlXFxgLlxuICpcbiAqIEBhdXRob3IgTHVjYSBCb3NpbiA8aHR0cHM6Ly9naXRodWIuY29tL1dvbWJvc3ZpZGVvPlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuQHRoZW1lIGlubGluZSB7XG4gIC8qIFByZWRlZmluZWQgdmFsdWVzICovXG5cbiAgLS1hbmltYXRpb24tZGVsYXktMDogMHM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTc1OiA3NW1zO1xuICAtLWFuaW1hdGlvbi1kZWxheS0xMDA6IDAuMXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTE1MDogMC4xNXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTIwMDogMC4ycztcbiAgLS1hbmltYXRpb24tZGVsYXktMzAwOiAwLjNzO1xuICAtLWFuaW1hdGlvbi1kZWxheS01MDA6IDAuNXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTcwMDogMC43cztcbiAgLS1hbmltYXRpb24tZGVsYXktMTAwMDogMXM7XG5cbiAgLS1hbmltYXRpb24tcmVwZWF0LTA6IDA7XG4gIC0tYW5pbWF0aW9uLXJlcGVhdC0xOiAxO1xuICAtLWFuaW1hdGlvbi1yZXBlYXQtaW5maW5pdGU6IGluZmluaXRlO1xuXG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1ub3JtYWw6IG5vcm1hbDtcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLXJldmVyc2U6IHJldmVyc2U7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1hbHRlcm5hdGU6IGFsdGVybmF0ZTtcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLWFsdGVybmF0ZS1yZXZlcnNlOiBhbHRlcm5hdGUtcmV2ZXJzZTtcblxuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtbm9uZTogbm9uZTtcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWZvcndhcmRzOiBmb3J3YXJkcztcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWJhY2t3YXJkczogYmFja3dhcmRzO1xuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtYm90aDogYm90aDtcblxuICAtLXBlcmNlbnRhZ2UtMDogMDtcbiAgLS1wZXJjZW50YWdlLTU6IDAuMDU7XG4gIC0tcGVyY2VudGFnZS0xMDogMC4xO1xuICAtLXBlcmNlbnRhZ2UtMTU6IDAuMTU7XG4gIC0tcGVyY2VudGFnZS0yMDogMC4yO1xuICAtLXBlcmNlbnRhZ2UtMjU6IDAuMjU7XG4gIC0tcGVyY2VudGFnZS0zMDogMC4zO1xuICAtLXBlcmNlbnRhZ2UtMzU6IDAuMzU7XG4gIC0tcGVyY2VudGFnZS00MDogMC40O1xuICAtLXBlcmNlbnRhZ2UtNDU6IDAuNDU7XG4gIC0tcGVyY2VudGFnZS01MDogMC41O1xuICAtLXBlcmNlbnRhZ2UtNTU6IDAuNTU7XG4gIC0tcGVyY2VudGFnZS02MDogMC42O1xuICAtLXBlcmNlbnRhZ2UtNjU6IDAuNjU7XG4gIC0tcGVyY2VudGFnZS03MDogMC43O1xuICAtLXBlcmNlbnRhZ2UtNzU6IDAuNzU7XG4gIC0tcGVyY2VudGFnZS04MDogMC44O1xuICAtLXBlcmNlbnRhZ2UtODU6IDAuODU7XG4gIC0tcGVyY2VudGFnZS05MDogMC45O1xuICAtLXBlcmNlbnRhZ2UtOTU6IDAuOTU7XG4gIC0tcGVyY2VudGFnZS0xMDA6IDE7XG4gIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtZnVsbDogMTtcblxuICAvKiBBbmltYXRpb25zIGFuZCBrZXlmcmFtZXMgKi9cblxuICAtLWFuaW1hdGUtaW46IGVudGVyIHZhcigtLXR3LWR1cmF0aW9uLCAxNTBtcykgdmFyKC0tdHctZWFzZSwgZWFzZSk7XG4gIC0tYW5pbWF0ZS1vdXQ6IGV4aXQgdmFyKC0tdHctZHVyYXRpb24sIDE1MG1zKSB2YXIoLS10dy1lYXNlLCBlYXNlKTtcblxuICBAa2V5ZnJhbWVzIGVudGVyIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IHZhcigtLXR3LWVudGVyLW9wYWNpdHksIDEpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS10dy1lbnRlci10cmFuc2xhdGUteCwgMCksIHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS15LCAwKSwgMClcbiAgICAgICAgc2NhbGUzZCh2YXIoLS10dy1lbnRlci1zY2FsZSwgMSksIHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSwgdmFyKC0tdHctZW50ZXItc2NhbGUsIDEpKVxuICAgICAgICByb3RhdGUodmFyKC0tdHctZW50ZXItcm90YXRlLCAwKSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBleGl0IHtcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiB2YXIoLS10dy1leGl0LW9wYWNpdHksIDEpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh2YXIoLS10dy1leGl0LXRyYW5zbGF0ZS14LCAwKSwgdmFyKC0tdHctZXhpdC10cmFuc2xhdGUteSwgMCksIDApXG4gICAgICAgIHNjYWxlM2QodmFyKC0tdHctZXhpdC1zY2FsZSwgMSksIHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpLCB2YXIoLS10dy1leGl0LXNjYWxlLCAxKSlcbiAgICAgICAgcm90YXRlKHZhcigtLXR3LWV4aXQtcm90YXRlLCAwKSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgKiBSYWRpeCBhbmQgQml0cyBVSSB1dGlsaXplIENTUyB2YXJpYWJsZXMgdG8gZGVmaW5lIHRoZSBoZWlnaHQgb2YgQWNjb3JkaW9uIGFuZCBDb2xsYXBzaWJsZVxuICAqIGNvbnRlbnQgZHVyaW5nIG9wZW4vY2xvc2UgYW5pbWF0aW9ucy4gVGhlIFxcYC0tcmFkaXgvYml0cy1hY2NvcmRpb24tY29udGVudC1oZWlnaHRcXGAgdmFyaWFibGVzXG4gICogY29udHJvbCB0aGUgaGVpZ2h0IG9mIEFjY29yZGlvbiBjb250ZW50LCB3aGlsZSBjb2xsYXBzaWJsZSB2YXJpYWJsZXMgYXJlIHVzZWQgZm9yIENvbGxhcHNpYmxlcy5cbiAgKlxuICAqIFRoZSBmYWxsYmFjayB2YWx1ZSBcXGBhdXRvXFxgIGlzIHVzZWQgaGVyZSwgYnV0IGl0IGRlcGVuZHMgb24gdGhlIFxcYGludGVycG9sYXRlLXNpemU6IGFsbG93LWtleXdvcmRzXFxgXG4gICogcHJvcGVydHksIHdoaWNoIGN1cnJlbnRseSBoYXMgbGltaXRlZCBicm93c2VyIHN1cHBvcnQuIEZvciBtb3JlIGRldGFpbHMsIHNlZTogXG4gICogPGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9pbnRlcnBvbGF0ZS1zaXplPlxuICAqL1xuXG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tZG93bjogYWNjb3JkaW9uLWRvd24gdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSBlYXNlLW91dDtcbiAgLS1hbmltYXRlLWFjY29yZGlvbi11cDogYWNjb3JkaW9uLXVwIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykgZWFzZS1vdXQ7XG4gIC0tYW5pbWF0ZS1jb2xsYXBzaWJsZS1kb3duOiBjb2xsYXBzaWJsZS1kb3duIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykgZWFzZS1vdXQ7XG4gIC0tYW5pbWF0ZS1jb2xsYXBzaWJsZS11cDogY29sbGFwc2libGUtdXAgdmFyKC0tdHctZHVyYXRpb24sIDIwMG1zKSBlYXNlLW91dDtcblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIHZhcigtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tdXAge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIHZhcigtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNvbGxhcHNpYmxlLWRvd24ge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXJhZGl4LWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1iaXRzLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjb2xsYXBzaWJsZS11cCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXJhZGl4LWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCB2YXIoLS1iaXRzLWNvbGxhcHNpYmxlLWNvbnRlbnQtaGVpZ2h0LCBhdXRvKSk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAtLWFuaW1hdGUtY2FyZXQtYmxpbms6IGNhcmV0LWJsaW5rIDEuMjVzIGVhc2Utb3V0IGluZmluaXRlO1xuXG4gIEBrZXlmcmFtZXMgY2FyZXQtYmxpbmsge1xuICAgIDAlLFxuICAgIDcwJSxcbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDIwJSxcbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbn1cblxuLyogVXRpbGl0eSBjbGFzc2VzICovXG5cbi8qXG4gKiBUYWlsd2luZCdzIGRlZmF1bHQgXFxgZHVyYXRpb25cXGAgdXRpbGl0eSBzZXRzIHRoZSBcXGAtLXR3LWR1cmF0aW9uXFxgIHZhcmlhYmxlLCBzb1xuICogY2FuIHNldCBcXGBhbmltYXRpb24tZHVyYXRpb25cXGAgZGlyZWN0bHkgaW4gdGhlIGFuaW1hdGlvbiBkZWZpbml0aW9uIGluIHRoZVxuICogXFxgQHRoZW1lXFxgIHNlY3Rpb24gYWJvdmUuIFNhbWUgZ29lcyBmb3IgdGhlIFxcYGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cXGAsIHNldFxuICogd2l0aCBcXGAtLXR3LWVhc2VcXGAuXG4gKi9cblxuQHV0aWxpdHkgZGVsYXktKiB7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxbXMpO1xuICBhbmltYXRpb24tZGVsYXk6IC0tdmFsdWUoLS1hbmltYXRpb24tZGVsYXktICosIFtkdXJhdGlvbl0sIFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgcmVwZWF0LSoge1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAtLXZhbHVlKC0tYW5pbWF0aW9uLXJlcGVhdC0gKiwgbnVtYmVyLCBcImluaXRpYWxcIiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IGRpcmVjdGlvbi0qIHtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogLS12YWx1ZSgtLWFuaW1hdGlvbi1kaXJlY3Rpb24tICosIFwiaW5pdGlhbFwiLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgZmlsbC1tb2RlLSoge1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWZpbGwtbW9kZS0gKiwgXCJpbml0aWFsXCIsIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBydW5uaW5nIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG5AdXRpbGl0eSBwYXVzZWQge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuQHV0aWxpdHkgcGxheS1zdGF0ZS0qIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IC0tdmFsdWUoXCJpbml0aWFsXCIsIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBmYWRlLWluIHtcbiAgLS10dy1lbnRlci1vcGFjaXR5OiAwO1xufVxuQHV0aWxpdHkgZmFkZS1pbi0qIHtcbiAgLS10dy1lbnRlci1vcGFjaXR5OiBjYWxjKC0tdmFsdWUobnVtYmVyKSAvIDEwMCk7XG4gIC0tdHctZW50ZXItb3BhY2l0eTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIFsgKl0pO1xufVxuXG5AdXRpbGl0eSBmYWRlLW91dCB7XG4gIC0tdHctZXhpdC1vcGFjaXR5OiAwO1xufVxuQHV0aWxpdHkgZmFkZS1vdXQtKiB7XG4gIC0tdHctZXhpdC1vcGFjaXR5OiBjYWxjKC0tdmFsdWUobnVtYmVyKSAvIDEwMCk7XG4gIC0tdHctZXhpdC1vcGFjaXR5OiAtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IHpvb20taW4ge1xuICAtLXR3LWVudGVyLXNjYWxlOiAwO1xufVxuQHV0aWxpdHkgem9vbS1pbi0qIHtcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKFtwZXJjZW50YWdlXSkgLyAxMDAlKTtcbiAgLS10dy1lbnRlci1zY2FsZTogY2FsYygtLXZhbHVlKFtyYXRpb10sIFtudW1iZXJdKSk7XG4gIC0tdHctZW50ZXItc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqKTtcbn1cblxuQHV0aWxpdHkgem9vbS1vdXQge1xuICAtLXR3LWV4aXQtc2NhbGU6IDA7XG59XG5AdXRpbGl0eSB6b29tLW91dC0qIHtcbiAgLS10dy1leGl0LXNjYWxlOiBjYWxjKC0tdmFsdWUoW3BlcmNlbnRhZ2VdKSAvIDEwMCUpO1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShbcmF0aW9dLCBbbnVtYmVyXSkpO1xuICAtLXR3LWV4aXQtc2NhbGU6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqKTtcbn1cblxuQHV0aWxpdHkgc3Bpbi1pbiB7XG4gIC0tdHctZW50ZXItcm90YXRlOiAzMGRlZztcbn1cbkB1dGlsaXR5IHNwaW4taW4tKiB7XG4gIC0tdHctZW50ZXItcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFkZWcpO1xuICAtLXR3LWVudGVyLXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0gKiwgW2FuZ2xlXSk7XG59XG5cbkB1dGlsaXR5IHNwaW4tb3V0IHtcbiAgLS10dy1leGl0LXJvdGF0ZTogMzBkZWc7XG59XG5AdXRpbGl0eSBzcGluLW91dC0qIHtcbiAgLS10dy1leGl0LXJvdGF0ZTogY2FsYygtLXZhbHVlKG51bWJlcikgKiAxZGVnKTtcbiAgLS10dy1leGl0LXJvdGF0ZTogLS12YWx1ZSgtLXJvdGF0ZS0gKiwgW2FuZ2xlXSk7XG59XG5cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tdG9wIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXRvcC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1ib3R0b20ge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1ib3R0b20tKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tbGVmdCB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1sZWZ0LSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tcmlnaHQge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS1yaWdodC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuXG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tdG9wIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by10b3AtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tYm90dG9tIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiAxMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWJvdHRvbS0qIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tbGVmdCB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tbGVmdC0qIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCAtLXBlcmNlbnRhZ2UtdHJhbnNsYXRlLSAqKSAqIC0xMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1yaWdodCB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1yaWdodC0qIHtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5cbi8qKlxuICogXFxgc2hhZGNuXFxgIGdsb2JhbHNcbiAqL1xuXG5AY3VzdG9tLXZhcmlhbnQgZGFyayAoJjppcyguZGFyayAqKSk7XG5cbkB0aGVtZSBpbmxpbmUge1xuICAtLWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAtLWNvbG9yLWZvcmVncm91bmQ6IHZhcigtLWZvcmVncm91bmQpO1xuICAtLWZvbnQtc2FuczogdmFyKC0tZm9udC1nZWlzdC1zYW5zKTtcbiAgLS1mb250LW1vbm86IHZhcigtLWZvbnQtZ2Vpc3QtbW9ubyk7XG4gIC0tY29sb3Itc2lkZWJhci1yaW5nOiB2YXIoLS1zaWRlYmFyLXJpbmcpO1xuICAtLWNvbG9yLXNpZGViYXItYm9yZGVyOiB2YXIoLS1zaWRlYmFyLWJvcmRlcik7XG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQ6IHZhcigtLXNpZGViYXItYWNjZW50KTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItcHJpbWFyeTogdmFyKC0tc2lkZWJhci1wcmltYXJ5KTtcbiAgLS1jb2xvci1zaWRlYmFyLWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhcjogdmFyKC0tc2lkZWJhcik7XG4gIC0tY29sb3ItY2hhcnQtNTogdmFyKC0tY2hhcnQtNSk7XG4gIC0tY29sb3ItY2hhcnQtNDogdmFyKC0tY2hhcnQtNCk7XG4gIC0tY29sb3ItY2hhcnQtMzogdmFyKC0tY2hhcnQtMyk7XG4gIC0tY29sb3ItY2hhcnQtMjogdmFyKC0tY2hhcnQtMik7XG4gIC0tY29sb3ItY2hhcnQtMTogdmFyKC0tY2hhcnQtMSk7XG4gIC0tY29sb3ItcmluZzogdmFyKC0tcmluZyk7XG4gIC0tY29sb3ItaW5wdXQ6IHZhcigtLWlucHV0KTtcbiAgLS1jb2xvci1ib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIC0tY29sb3ItZGVzdHJ1Y3RpdmU6IHZhcigtLWRlc3RydWN0aXZlKTtcbiAgLS1jb2xvci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWFjY2VudDogdmFyKC0tYWNjZW50KTtcbiAgLS1jb2xvci1tdXRlZC1mb3JlZ3JvdW5kOiB2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1tdXRlZDogdmFyKC0tbXV0ZWQpO1xuICAtLWNvbG9yLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2Vjb25kYXJ5OiB2YXIoLS1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1wcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcbiAgLS1jb2xvci1wb3BvdmVyLWZvcmVncm91bmQ6IHZhcigtLXBvcG92ZXItZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcG9wb3ZlcjogdmFyKC0tcG9wb3Zlcik7XG4gIC0tY29sb3ItY2FyZC1mb3JlZ3JvdW5kOiB2YXIoLS1jYXJkLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWNhcmQ6IHZhcigtLWNhcmQpO1xuICAtLXJhZGl1cy1zbTogY2FsYyh2YXIoLS1yYWRpdXMpIC0gNHB4KTtcbiAgLS1yYWRpdXMtbWQ6IGNhbGModmFyKC0tcmFkaXVzKSAtIDJweCk7XG4gIC0tcmFkaXVzLWxnOiB2YXIoLS1yYWRpdXMpO1xuICAtLXJhZGl1cy14bDogY2FsYyh2YXIoLS1yYWRpdXMpICsgNHB4KTtcbiAgLS1hbmltYXRlLWFjY29yZGlvbi1kb3duOiBhY2NvcmRpb24tZG93biAwLjJzIGVhc2Utb3V0O1xuICAtLWFuaW1hdGUtYWNjb3JkaW9uLXVwOiBhY2NvcmRpb24tdXAgMC4ycyBlYXNlLW91dDtcblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLXVwIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogdmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG46cm9vdCB7XG4gIC0tcmFkaXVzOiAwLjYyNXJlbTtcbiAgLS1iYWNrZ3JvdW5kOiBva2xjaCgxIDAgMCk7XG4gIC0tZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1jYXJkOiBva2xjaCgxIDAgMCk7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXBvcG92ZXI6IG9rbGNoKDEgMCAwKTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tcHJpbWFyeTogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tc2Vjb25kYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tbXV0ZWQ6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjU1NiAwIDApO1xuICAtLWFjY2VudDogb2tsY2goMC45NyAwIDApO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjU3NyAwLjI0NSAyNy4zMjUpO1xuICAtLWJvcmRlcjogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1pbnB1dDogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1yaW5nOiBva2xjaCgwLjcwOCAwIDApO1xuICAtLWNoYXJ0LTE6IG9rbGNoKDAuNjQ2IDAuMjIyIDQxLjExNik7XG4gIC0tY2hhcnQtMjogb2tsY2goMC42IDAuMTE4IDE4NC43MDQpO1xuICAtLWNoYXJ0LTM6IG9rbGNoKDAuMzk4IDAuMDcgMjI3LjM5Mik7XG4gIC0tY2hhcnQtNDogb2tsY2goMC44MjggMC4xODkgODQuNDI5KTtcbiAgLS1jaGFydC01OiBva2xjaCgwLjc2OSAwLjE4OCA3MC4wOCk7XG4gIC0tc2lkZWJhcjogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tc2lkZWJhci1wcmltYXJ5OiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLWJvcmRlcjogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNzA4IDAgMCk7XG59XG5cbi5kYXJrIHtcbiAgLS1iYWNrZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tY2FyZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tcG9wb3Zlcjogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tcHJpbWFyeTogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjI2OSAwIDApO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNzA4IDAgMCk7XG4gIC0tYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjcwNCAwLjE5MSAyMi4yMTYpO1xuICAtLWJvcmRlcjogb2tsY2goMSAwIDAgLyAxMCUpO1xuICAtLWlucHV0OiBva2xjaCgxIDAgMCAvIDE1JSk7XG4gIC0tcmluZzogb2tsY2goMC41NTYgMCAwKTtcbiAgLS1jaGFydC0xOiBva2xjaCgwLjQ4OCAwLjI0MyAyNjQuMzc2KTtcbiAgLS1jaGFydC0yOiBva2xjaCgwLjY5NiAwLjE3IDE2Mi40OCk7XG4gIC0tY2hhcnQtMzogb2tsY2goMC43NjkgMC4xODggNzAuMDgpO1xuICAtLWNoYXJ0LTQ6IG9rbGNoKDAuNjI3IDAuMjY1IDMwMy45KTtcbiAgLS1jaGFydC01OiBva2xjaCgwLjY0NSAwLjI0NiAxNi40MzkpO1xuICAtLXNpZGViYXI6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeTogb2tsY2goMC40ODggMC4yNDMgMjY0LjM3Nik7XG4gIC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQ6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWJvcmRlcjogb2tsY2goMSAwIDAgLyAxMCUpO1xuICAtLXNpZGViYXItcmluZzogb2tsY2goMC41NTYgMCAwKTtcbn1cblxuQGxheWVyIGJhc2Uge1xuICAqIHtcbiAgICBAYXBwbHkgYm9yZGVyLWJvcmRlciBvdXRsaW5lLXJpbmcvNTA7XG4gIH1cbiAgYm9keSB7XG4gICAgQGFwcGx5IGJnLWJhY2tncm91bmQgdGV4dC1mb3JlZ3JvdW5kO1xuICB9XG59XG5cbmh0bWwge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cbmA7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZ2xvYmFsU3R5bGVzKTtcbn0pKCk7XG4iXX0=