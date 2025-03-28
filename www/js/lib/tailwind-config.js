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

  --animate-accordion-down: accordion-down var(--tw-duration, 200ms) ease-out;
  --animate-accordion-up: accordion-up var(--tw-duration, 200ms) ease-out;
  --animate-caret-blink: caret-blink 1.25s ease-out infinite;

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

  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height, var(--bits-accordion-content-height));
    }
  }

  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height, var(--bits-accordion-content-height));
    }
    to {
      height: 0;
    }
  }

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
  animation-delay: --value(--animation-delay- *, [duration], [ *]);
}

@utility repeat-* {
  animation-iteration-count: --value(--animation-repeat- *, number);
}

@utility direction-* {
  animation-direction: --value(--animation-direction- *);
}

@utility fill-mode-* {
  animation-fill-mode: --value(--animation-fill-mode- *);
}

@utility running {
  animation-play-state: running;
}
@utility paused {
  animation-play-state: paused;
}

@utility fade-in {
  --tw-enter-opacity: 0;
}
@utility fade-in-* {
  --tw-enter-opacity: --value(--percentage- *, [ *]);
}

@utility fade-out {
  --tw-exit-opacity: 0;
}
@utility fade-out-* {
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
  --tw-enter-translate-y: calc(--value(ratio) * 100%);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtYTFCLENBQUM7SUFDQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwZW5kIGdsb2JhbCB0YWlsd2luZCBzdHlsZXNoZWV0XG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBnbG9iYWxTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGdsb2JhbFN0eWxlcy50eXBlID0gXCJ0ZXh0L3RhaWx3aW5kY3NzXCI7XG4gIGdsb2JhbFN0eWxlcy5pbm5lckhUTUwgPSBgQGltcG9ydCBcInRhaWx3aW5kY3NzXCI7XG5cbi8qKlxuICogVGFpbHdpbmRDU1MgdjQuMCBjb21wYXRpYmxlIHJlcGxhY2VtZW50IGZvciBcXGB0YWlsd2luZGNzcy1hbmltYXRlXFxgLlxuICpcbiAqIEBhdXRob3IgTHVjYSBCb3NpbiA8aHR0cHM6Ly9naXRodWIuY29tL1dvbWJvc3ZpZGVvPlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuQHRoZW1lIGlubGluZSB7XG4gIC8qIFByZWRlZmluZWQgdmFsdWVzICovXG5cbiAgLS1hbmltYXRpb24tZGVsYXktMDogMHM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTc1OiA3NW1zO1xuICAtLWFuaW1hdGlvbi1kZWxheS0xMDA6IDAuMXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTE1MDogMC4xNXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTIwMDogMC4ycztcbiAgLS1hbmltYXRpb24tZGVsYXktMzAwOiAwLjNzO1xuICAtLWFuaW1hdGlvbi1kZWxheS01MDA6IDAuNXM7XG4gIC0tYW5pbWF0aW9uLWRlbGF5LTcwMDogMC43cztcbiAgLS1hbmltYXRpb24tZGVsYXktMTAwMDogMXM7XG5cbiAgLS1hbmltYXRpb24tcmVwZWF0LTA6IDA7XG4gIC0tYW5pbWF0aW9uLXJlcGVhdC0xOiAxO1xuICAtLWFuaW1hdGlvbi1yZXBlYXQtaW5maW5pdGU6IGluZmluaXRlO1xuXG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1ub3JtYWw6IG5vcm1hbDtcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLXJldmVyc2U6IHJldmVyc2U7XG4gIC0tYW5pbWF0aW9uLWRpcmVjdGlvbi1hbHRlcm5hdGU6IGFsdGVybmF0ZTtcbiAgLS1hbmltYXRpb24tZGlyZWN0aW9uLWFsdGVybmF0ZS1yZXZlcnNlOiBhbHRlcm5hdGUtcmV2ZXJzZTtcblxuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtbm9uZTogbm9uZTtcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWZvcndhcmRzOiBmb3J3YXJkcztcbiAgLS1hbmltYXRpb24tZmlsbC1tb2RlLWJhY2t3YXJkczogYmFja3dhcmRzO1xuICAtLWFuaW1hdGlvbi1maWxsLW1vZGUtYm90aDogYm90aDtcblxuICAtLXBlcmNlbnRhZ2UtMDogMDtcbiAgLS1wZXJjZW50YWdlLTU6IDAuMDU7XG4gIC0tcGVyY2VudGFnZS0xMDogMC4xO1xuICAtLXBlcmNlbnRhZ2UtMTU6IDAuMTU7XG4gIC0tcGVyY2VudGFnZS0yMDogMC4yO1xuICAtLXBlcmNlbnRhZ2UtMjU6IDAuMjU7XG4gIC0tcGVyY2VudGFnZS0zMDogMC4zO1xuICAtLXBlcmNlbnRhZ2UtMzU6IDAuMzU7XG4gIC0tcGVyY2VudGFnZS00MDogMC40O1xuICAtLXBlcmNlbnRhZ2UtNDU6IDAuNDU7XG4gIC0tcGVyY2VudGFnZS01MDogMC41O1xuICAtLXBlcmNlbnRhZ2UtNTU6IDAuNTU7XG4gIC0tcGVyY2VudGFnZS02MDogMC42O1xuICAtLXBlcmNlbnRhZ2UtNjU6IDAuNjU7XG4gIC0tcGVyY2VudGFnZS03MDogMC43O1xuICAtLXBlcmNlbnRhZ2UtNzU6IDAuNzU7XG4gIC0tcGVyY2VudGFnZS04MDogMC44O1xuICAtLXBlcmNlbnRhZ2UtODU6IDAuODU7XG4gIC0tcGVyY2VudGFnZS05MDogMC45O1xuICAtLXBlcmNlbnRhZ2UtOTU6IDAuOTU7XG4gIC0tcGVyY2VudGFnZS0xMDA6IDE7XG4gIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtZnVsbDogMTtcblxuICAvKiBBbmltYXRpb25zIGFuZCBrZXlmcmFtZXMgKi9cblxuICAtLWFuaW1hdGUtaW46IGVudGVyIHZhcigtLXR3LWR1cmF0aW9uLCAxNTBtcykgdmFyKC0tdHctZWFzZSwgZWFzZSk7XG4gIC0tYW5pbWF0ZS1vdXQ6IGV4aXQgdmFyKC0tdHctZHVyYXRpb24sIDE1MG1zKSB2YXIoLS10dy1lYXNlLCBlYXNlKTtcblxuICAtLWFuaW1hdGUtYWNjb3JkaW9uLWRvd246IGFjY29yZGlvbi1kb3duIHZhcigtLXR3LWR1cmF0aW9uLCAyMDBtcykgZWFzZS1vdXQ7XG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tdXA6IGFjY29yZGlvbi11cCB2YXIoLS10dy1kdXJhdGlvbiwgMjAwbXMpIGVhc2Utb3V0O1xuICAtLWFuaW1hdGUtY2FyZXQtYmxpbms6IGNhcmV0LWJsaW5rIDEuMjVzIGVhc2Utb3V0IGluZmluaXRlO1xuXG4gIEBrZXlmcmFtZXMgZW50ZXIge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogdmFyKC0tdHctZW50ZXItb3BhY2l0eSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXR3LWVudGVyLXRyYW5zbGF0ZS14LCAwKSwgdmFyKC0tdHctZW50ZXItdHJhbnNsYXRlLXksIDApLCAwKVxuICAgICAgICBzY2FsZTNkKHZhcigtLXR3LWVudGVyLXNjYWxlLCAxKSwgdmFyKC0tdHctZW50ZXItc2NhbGUsIDEpLCB2YXIoLS10dy1lbnRlci1zY2FsZSwgMSkpXG4gICAgICAgIHJvdGF0ZSh2YXIoLS10dy1lbnRlci1yb3RhdGUsIDApKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGV4aXQge1xuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IHZhcigtLXR3LWV4aXQtb3BhY2l0eSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHZhcigtLXR3LWV4aXQtdHJhbnNsYXRlLXgsIDApLCB2YXIoLS10dy1leGl0LXRyYW5zbGF0ZS15LCAwKSwgMClcbiAgICAgICAgc2NhbGUzZCh2YXIoLS10dy1leGl0LXNjYWxlLCAxKSwgdmFyKC0tdHctZXhpdC1zY2FsZSwgMSksIHZhcigtLXR3LWV4aXQtc2NhbGUsIDEpKVxuICAgICAgICByb3RhdGUodmFyKC0tdHctZXhpdC1yb3RhdGUsIDApKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIHZhcigtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tdXAge1xuICAgIGZyb20ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQsIHZhcigtLWJpdHMtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KSk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNhcmV0LWJsaW5rIHtcbiAgICAwJSxcbiAgICA3MCUsXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyMCUsXG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG59XG5cbi8qIFV0aWxpdHkgY2xhc3NlcyAqL1xuXG4vKlxuICogVGFpbHdpbmQncyBkZWZhdWx0IFxcYGR1cmF0aW9uXFxgIHV0aWxpdHkgc2V0cyB0aGUgXFxgLS10dy1kdXJhdGlvblxcYCB2YXJpYWJsZSwgc29cbiAqIGNhbiBzZXQgXFxgYW5pbWF0aW9uLWR1cmF0aW9uXFxgIGRpcmVjdGx5IGluIHRoZSBhbmltYXRpb24gZGVmaW5pdGlvbiBpbiB0aGVcbiAqIFxcYEB0aGVtZVxcYCBzZWN0aW9uIGFib3ZlLiBTYW1lIGdvZXMgZm9yIHRoZSBcXGBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXFxgLCBzZXRcbiAqIHdpdGggXFxgLS10dy1lYXNlXFxgLlxuICovXG5cbkB1dGlsaXR5IGRlbGF5LSoge1xuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMW1zKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRlbGF5LSAqLCBbZHVyYXRpb25dLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgcmVwZWF0LSoge1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAtLXZhbHVlKC0tYW5pbWF0aW9uLXJlcGVhdC0gKiwgbnVtYmVyKTtcbn1cblxuQHV0aWxpdHkgZGlyZWN0aW9uLSoge1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiAtLXZhbHVlKC0tYW5pbWF0aW9uLWRpcmVjdGlvbi0gKik7XG59XG5cbkB1dGlsaXR5IGZpbGwtbW9kZS0qIHtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogLS12YWx1ZSgtLWFuaW1hdGlvbi1maWxsLW1vZGUtICopO1xufVxuXG5AdXRpbGl0eSBydW5uaW5nIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XG59XG5AdXRpbGl0eSBwYXVzZWQge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG5AdXRpbGl0eSBmYWRlLWluIHtcbiAgLS10dy1lbnRlci1vcGFjaXR5OiAwO1xufVxuQHV0aWxpdHkgZmFkZS1pbi0qIHtcbiAgLS10dy1lbnRlci1vcGFjaXR5OiAtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgWyAqXSk7XG59XG5cbkB1dGlsaXR5IGZhZGUtb3V0IHtcbiAgLS10dy1leGl0LW9wYWNpdHk6IDA7XG59XG5AdXRpbGl0eSBmYWRlLW91dC0qIHtcbiAgLS10dy1leGl0LW9wYWNpdHk6IC0tdmFsdWUoLS1wZXJjZW50YWdlLSAqLCBbICpdKTtcbn1cblxuQHV0aWxpdHkgem9vbS1pbiB7XG4gIC0tdHctZW50ZXItc2NhbGU6IDA7XG59XG5AdXRpbGl0eSB6b29tLWluLSoge1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUoW3BlcmNlbnRhZ2VdKSAvIDEwMCUpO1xuICAtLXR3LWVudGVyLXNjYWxlOiBjYWxjKC0tdmFsdWUoW3JhdGlvXSwgW251bWJlcl0pKTtcbiAgLS10dy1lbnRlci1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICopO1xufVxuXG5AdXRpbGl0eSB6b29tLW91dCB7XG4gIC0tdHctZXhpdC1zY2FsZTogMDtcbn1cbkB1dGlsaXR5IHpvb20tb3V0LSoge1xuICAtLXR3LWV4aXQtc2NhbGU6IGNhbGMoLS12YWx1ZShbcGVyY2VudGFnZV0pIC8gMTAwJSk7XG4gIC0tdHctZXhpdC1zY2FsZTogY2FsYygtLXZhbHVlKFtyYXRpb10sIFtudW1iZXJdKSk7XG4gIC0tdHctZXhpdC1zY2FsZTogLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICopO1xufVxuXG5AdXRpbGl0eSBzcGluLWluIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IDMwZGVnO1xufVxuQHV0aWxpdHkgc3Bpbi1pbi0qIHtcbiAgLS10dy1lbnRlci1yb3RhdGU6IGNhbGMoLS12YWx1ZShudW1iZXIpICogMWRlZyk7XG4gIC0tdHctZW50ZXItcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSAqLCBbYW5nbGVdKTtcbn1cblxuQHV0aWxpdHkgc3Bpbi1vdXQge1xuICAtLXR3LWV4aXQtcm90YXRlOiAzMGRlZztcbn1cbkB1dGlsaXR5IHNwaW4tb3V0LSoge1xuICAtLXR3LWV4aXQtcm90YXRlOiBjYWxjKC0tdmFsdWUobnVtYmVyKSAqIDFkZWcpO1xuICAtLXR3LWV4aXQtcm90YXRlOiAtLXZhbHVlKC0tcm90YXRlLSAqLCBbYW5nbGVdKTtcbn1cblxuQHV0aWxpdHkgc2xpZGUtaW4tZnJvbS10b3Age1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tdG9wLSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSAqIC0xKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKSAqIC0xKTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tYm90dG9tIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tYm90dG9tLSoge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoaW50ZWdlcikgKiB2YXIoLS1zcGFjaW5nKSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteTogLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLWxlZnQge1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tbGVmdC0qIHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiBjYWxjKC0tdmFsdWUocmF0aW8pICogMTAwJSk7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1pbi1mcm9tLXJpZ2h0IHtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLWluLWZyb20tcmlnaHQtKiB7XG4gIC0tdHctZW50ZXItdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAxMDAlKTtcbiAgLS10dy1lbnRlci10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWVudGVyLXRyYW5zbGF0ZS14OiAtLXZhbHVlKC0tdHJhbnNsYXRlLSAqLCBbcGVyY2VudGFnZV0sIFtsZW5ndGhdKTtcbn1cblxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLXRvcCB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogLTEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tdG9wLSoge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShpbnRlZ2VyKSAqIHZhcigtLXNwYWNpbmcpICogLTEpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogLTEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZShyYXRpbykgKiAxMDAlKTtcbiAgLS10dy1leGl0LXRyYW5zbGF0ZS15OiBjYWxjKC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pICogLTEpO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWJvdHRvbSB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogMTAwJTtcbn1cbkB1dGlsaXR5IHNsaWRlLW91dC10by1ib3R0b20tKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteTogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXk6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWxlZnQge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0xMDAlO1xufVxuQHV0aWxpdHkgc2xpZGUtb3V0LXRvLWxlZnQtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykgKiAtMSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKC0tcGVyY2VudGFnZS0gKiwgLS1wZXJjZW50YWdlLXRyYW5zbGF0ZS0gKikgKiAtMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXRyYW5zbGF0ZS0gKiwgW3BlcmNlbnRhZ2VdLCBbbGVuZ3RoXSkgKiAtMSk7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tcmlnaHQge1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IDEwMCU7XG59XG5AdXRpbGl0eSBzbGlkZS1vdXQtdG8tcmlnaHQtKiB7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKGludGVnZXIpICogdmFyKC0tc3BhY2luZykpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IGNhbGMoLS12YWx1ZSgtLXBlcmNlbnRhZ2UtICosIC0tcGVyY2VudGFnZS10cmFuc2xhdGUtICopICogMTAwJSk7XG4gIC0tdHctZXhpdC10cmFuc2xhdGUteDogY2FsYygtLXZhbHVlKHJhdGlvKSAqIDEwMCUpO1xuICAtLXR3LWV4aXQtdHJhbnNsYXRlLXg6IC0tdmFsdWUoLS10cmFuc2xhdGUtICosIFtwZXJjZW50YWdlXSwgW2xlbmd0aF0pO1xufVxuXG4vKipcbiAqIFxcYHNoYWRjblxcYCBnbG9iYWxzXG4gKi9cblxuQGN1c3RvbS12YXJpYW50IGRhcmsgKCY6aXMoLmRhcmsgKikpO1xuXG5AdGhlbWUgaW5saW5lIHtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgLS1jb2xvci1mb3JlZ3JvdW5kOiB2YXIoLS1mb3JlZ3JvdW5kKTtcbiAgLS1mb250LXNhbnM6IHZhcigtLWZvbnQtZ2Vpc3Qtc2Fucyk7XG4gIC0tZm9udC1tb25vOiB2YXIoLS1mb250LWdlaXN0LW1vbm8pO1xuICAtLWNvbG9yLXNpZGViYXItcmluZzogdmFyKC0tc2lkZWJhci1yaW5nKTtcbiAgLS1jb2xvci1zaWRlYmFyLWJvcmRlcjogdmFyKC0tc2lkZWJhci1ib3JkZXIpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50OiB2YXIoLS1zaWRlYmFyLWFjY2VudCk7XG4gIC0tY29sb3Itc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnk6IHZhcigtLXNpZGViYXItcHJpbWFyeSk7XG4gIC0tY29sb3Itc2lkZWJhci1mb3JlZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXI6IHZhcigtLXNpZGViYXIpO1xuICAtLWNvbG9yLWNoYXJ0LTU6IHZhcigtLWNoYXJ0LTUpO1xuICAtLWNvbG9yLWNoYXJ0LTQ6IHZhcigtLWNoYXJ0LTQpO1xuICAtLWNvbG9yLWNoYXJ0LTM6IHZhcigtLWNoYXJ0LTMpO1xuICAtLWNvbG9yLWNoYXJ0LTI6IHZhcigtLWNoYXJ0LTIpO1xuICAtLWNvbG9yLWNoYXJ0LTE6IHZhcigtLWNoYXJ0LTEpO1xuICAtLWNvbG9yLXJpbmc6IHZhcigtLXJpbmcpO1xuICAtLWNvbG9yLWlucHV0OiB2YXIoLS1pbnB1dCk7XG4gIC0tY29sb3ItYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAtLWNvbG9yLWRlc3RydWN0aXZlOiB2YXIoLS1kZXN0cnVjdGl2ZSk7XG4gIC0tY29sb3ItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLWFjY2VudC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1hY2NlbnQ6IHZhcigtLWFjY2VudCk7XG4gIC0tY29sb3ItbXV0ZWQtZm9yZWdyb3VuZDogdmFyKC0tbXV0ZWQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItbXV0ZWQ6IHZhcigtLW11dGVkKTtcbiAgLS1jb2xvci1zZWNvbmRhcnktZm9yZWdyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXByaW1hcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XG4gIC0tY29sb3ItcG9wb3Zlci1mb3JlZ3JvdW5kOiB2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXBvcG92ZXI6IHZhcigtLXBvcG92ZXIpO1xuICAtLWNvbG9yLWNhcmQtZm9yZWdyb3VuZDogdmFyKC0tY2FyZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1jYXJkOiB2YXIoLS1jYXJkKTtcbiAgLS1yYWRpdXMtc206IGNhbGModmFyKC0tcmFkaXVzKSAtIDRweCk7XG4gIC0tcmFkaXVzLW1kOiBjYWxjKHZhcigtLXJhZGl1cykgLSAycHgpO1xuICAtLXJhZGl1cy1sZzogdmFyKC0tcmFkaXVzKTtcbiAgLS1yYWRpdXMteGw6IGNhbGModmFyKC0tcmFkaXVzKSArIDRweCk7XG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tZG93bjogYWNjb3JkaW9uLWRvd24gMC4ycyBlYXNlLW91dDtcbiAgLS1hbmltYXRlLWFjY29yZGlvbi11cDogYWNjb3JkaW9uLXVwIDAuMnMgZWFzZS1vdXQ7XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tZG93biB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogdmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi11cCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuOnJvb3Qge1xuICAtLXJhZGl1czogMC42MjVyZW07XG4gIC0tYmFja2dyb3VuZDogb2tsY2goMSAwIDApO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tY2FyZDogb2tsY2goMSAwIDApO1xuICAtLWNhcmQtZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1wb3BvdmVyOiBva2xjaCgxIDAgMCk7XG4gIC0tcG9wb3Zlci1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXByaW1hcnk6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNlY29uZGFyeTogb2tsY2goMC45NyAwIDApO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tbXV0ZWQtZm9yZWdyb3VuZDogb2tsY2goMC41NTYgMCAwKTtcbiAgLS1hY2NlbnQ6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1kZXN0cnVjdGl2ZTogb2tsY2goMC41NzcgMC4yNDUgMjcuMzI1KTtcbiAgLS1ib3JkZXI6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0taW5wdXQ6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tcmluZzogb2tsY2goMC43MDggMCAwKTtcbiAgLS1jaGFydC0xOiBva2xjaCgwLjY0NiAwLjIyMiA0MS4xMTYpO1xuICAtLWNoYXJ0LTI6IG9rbGNoKDAuNiAwLjExOCAxODQuNzA0KTtcbiAgLS1jaGFydC0zOiBva2xjaCgwLjM5OCAwLjA3IDIyNy4zOTIpO1xuICAtLWNoYXJ0LTQ6IG9rbGNoKDAuODI4IDAuMTg5IDg0LjQyOSk7XG4gIC0tY2hhcnQtNTogb2tsY2goMC43NjkgMC4xODggNzAuMDgpO1xuICAtLXNpZGViYXI6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeTogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWFjY2VudDogb2tsY2goMC45NyAwIDApO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tc2lkZWJhci1yaW5nOiBva2xjaCgwLjcwOCAwIDApO1xufVxuXG4uZGFyayB7XG4gIC0tYmFja2dyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWNhcmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXBvcG92ZXI6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tcG9wb3Zlci1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXByaW1hcnk6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNlY29uZGFyeTogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1tdXRlZDogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjcwOCAwIDApO1xuICAtLWFjY2VudDogb2tsY2goMC4yNjkgMCAwKTtcbiAgLS1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1kZXN0cnVjdGl2ZTogb2tsY2goMC43MDQgMC4xOTEgMjIuMjE2KTtcbiAgLS1ib3JkZXI6IG9rbGNoKDEgMCAwIC8gMTAlKTtcbiAgLS1pbnB1dDogb2tsY2goMSAwIDAgLyAxNSUpO1xuICAtLXJpbmc6IG9rbGNoKDAuNTU2IDAgMCk7XG4gIC0tY2hhcnQtMTogb2tsY2goMC40ODggMC4yNDMgMjY0LjM3Nik7XG4gIC0tY2hhcnQtMjogb2tsY2goMC42OTYgMC4xNyAxNjIuNDgpO1xuICAtLWNoYXJ0LTM6IG9rbGNoKDAuNzY5IDAuMTg4IDcwLjA4KTtcbiAgLS1jaGFydC00OiBva2xjaCgwLjYyNyAwLjI2NSAzMDMuOSk7XG4gIC0tY2hhcnQtNTogb2tsY2goMC42NDUgMC4yNDYgMTYuNDM5KTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IG9rbGNoKDAuNDg4IDAuMjQzIDI2NC4zNzYpO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IG9rbGNoKDEgMCAwIC8gMTAlKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNTU2IDAgMCk7XG59XG5cbkBsYXllciBiYXNlIHtcbiAgKiB7XG4gICAgQGFwcGx5IGJvcmRlci1ib3JkZXIgb3V0bGluZS1yaW5nLzUwO1xuICB9XG4gIGJvZHkge1xuICAgIEBhcHBseSBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZDtcbiAgfVxufVxuXG5odG1sIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5gO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdsb2JhbFN0eWxlcyk7XG59KSgpO1xuIl19