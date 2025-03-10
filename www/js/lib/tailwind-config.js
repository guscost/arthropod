// Append global tailwind stylesheet
(function () {
    const globalStyles = document.createElement("style");
    globalStyles.type = "text/tailwindcss";
    globalStyles.innerHTML = `/* global styles */
@import "tailwindcss";

@plugin "tailwindcss-animate";

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
  --color-destructive-foreground: var(--destructive-foreground);
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
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
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
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
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
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVKMUIsQ0FBQztJQUNBLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBlbmQgZ2xvYmFsIHRhaWx3aW5kIHN0eWxlc2hlZXRcbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGdsb2JhbFN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgZ2xvYmFsU3R5bGVzLnR5cGUgPSBcInRleHQvdGFpbHdpbmRjc3NcIjtcbiAgZ2xvYmFsU3R5bGVzLmlubmVySFRNTCA9IGAvKiBnbG9iYWwgc3R5bGVzICovXG5AaW1wb3J0IFwidGFpbHdpbmRjc3NcIjtcblxuQHBsdWdpbiBcInRhaWx3aW5kY3NzLWFuaW1hdGVcIjtcblxuQGN1c3RvbS12YXJpYW50IGRhcmsgKCY6aXMoLmRhcmsgKikpO1xuXG5AdGhlbWUgaW5saW5lIHtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgLS1jb2xvci1mb3JlZ3JvdW5kOiB2YXIoLS1mb3JlZ3JvdW5kKTtcbiAgLS1mb250LXNhbnM6IHZhcigtLWZvbnQtZ2Vpc3Qtc2Fucyk7XG4gIC0tZm9udC1tb25vOiB2YXIoLS1mb250LWdlaXN0LW1vbm8pO1xuICAtLWNvbG9yLXNpZGViYXItcmluZzogdmFyKC0tc2lkZWJhci1yaW5nKTtcbiAgLS1jb2xvci1zaWRlYmFyLWJvcmRlcjogdmFyKC0tc2lkZWJhci1ib3JkZXIpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItYWNjZW50OiB2YXIoLS1zaWRlYmFyLWFjY2VudCk7XG4gIC0tY29sb3Itc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnk6IHZhcigtLXNpZGViYXItcHJpbWFyeSk7XG4gIC0tY29sb3Itc2lkZWJhci1mb3JlZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXI6IHZhcigtLXNpZGViYXIpO1xuICAtLWNvbG9yLWNoYXJ0LTU6IHZhcigtLWNoYXJ0LTUpO1xuICAtLWNvbG9yLWNoYXJ0LTQ6IHZhcigtLWNoYXJ0LTQpO1xuICAtLWNvbG9yLWNoYXJ0LTM6IHZhcigtLWNoYXJ0LTMpO1xuICAtLWNvbG9yLWNoYXJ0LTI6IHZhcigtLWNoYXJ0LTIpO1xuICAtLWNvbG9yLWNoYXJ0LTE6IHZhcigtLWNoYXJ0LTEpO1xuICAtLWNvbG9yLXJpbmc6IHZhcigtLXJpbmcpO1xuICAtLWNvbG9yLWlucHV0OiB2YXIoLS1pbnB1dCk7XG4gIC0tY29sb3ItYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAtLWNvbG9yLWRlc3RydWN0aXZlLWZvcmVncm91bmQ6IHZhcigtLWRlc3RydWN0aXZlLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWRlc3RydWN0aXZlOiB2YXIoLS1kZXN0cnVjdGl2ZSk7XG4gIC0tY29sb3ItYWNjZW50LWZvcmVncm91bmQ6IHZhcigtLWFjY2VudC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1hY2NlbnQ6IHZhcigtLWFjY2VudCk7XG4gIC0tY29sb3ItbXV0ZWQtZm9yZWdyb3VuZDogdmFyKC0tbXV0ZWQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItbXV0ZWQ6IHZhcigtLW11dGVkKTtcbiAgLS1jb2xvci1zZWNvbmRhcnktZm9yZWdyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNlY29uZGFyeTogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgLS1jb2xvci1wcmltYXJ5LWZvcmVncm91bmQ6IHZhcigtLXByaW1hcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcHJpbWFyeTogdmFyKC0tcHJpbWFyeSk7XG4gIC0tY29sb3ItcG9wb3Zlci1mb3JlZ3JvdW5kOiB2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXBvcG92ZXI6IHZhcigtLXBvcG92ZXIpO1xuICAtLWNvbG9yLWNhcmQtZm9yZWdyb3VuZDogdmFyKC0tY2FyZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1jYXJkOiB2YXIoLS1jYXJkKTtcbiAgLS1yYWRpdXMtc206IGNhbGModmFyKC0tcmFkaXVzKSAtIDRweCk7XG4gIC0tcmFkaXVzLW1kOiBjYWxjKHZhcigtLXJhZGl1cykgLSAycHgpO1xuICAtLXJhZGl1cy1sZzogdmFyKC0tcmFkaXVzKTtcbiAgLS1yYWRpdXMteGw6IGNhbGModmFyKC0tcmFkaXVzKSArIDRweCk7XG4gIC0tYW5pbWF0ZS1hY2NvcmRpb24tZG93bjogYWNjb3JkaW9uLWRvd24gMC4ycyBlYXNlLW91dDtcbiAgLS1hbmltYXRlLWFjY29yZGlvbi11cDogYWNjb3JkaW9uLXVwIDAuMnMgZWFzZS1vdXQ7XG5cbiAgQGtleWZyYW1lcyBhY2NvcmRpb24tZG93biB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogdmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi11cCB7XG4gICAgZnJvbSB7XG4gICAgICBoZWlnaHQ6IHZhcigtLXJhZGl4LWFjY29yZGlvbi1jb250ZW50LWhlaWdodCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuOnJvb3Qge1xuICAtLWJhY2tncm91bmQ6IG9rbGNoKDEgMCAwKTtcbiAgLS1mb3JlZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLWNhcmQ6IG9rbGNoKDEgMCAwKTtcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tcG9wb3Zlcjogb2tsY2goMSAwIDApO1xuICAtLXBvcG92ZXItZm9yZWdyb3VuZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1wcmltYXJ5OiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zZWNvbmRhcnk6IG9rbGNoKDAuOTcgMCAwKTtcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1tdXRlZDogb2tsY2goMC45NyAwIDApO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNTU2IDAgMCk7XG4gIC0tYWNjZW50OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tZGVzdHJ1Y3RpdmU6IG9rbGNoKDAuNTc3IDAuMjQ1IDI3LjMyNSk7XG4gIC0tZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZDogb2tsY2goMC41NzcgMC4yNDUgMjcuMzI1KTtcbiAgLS1ib3JkZXI6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0taW5wdXQ6IG9rbGNoKDAuOTIyIDAgMCk7XG4gIC0tcmluZzogb2tsY2goMC43MDggMCAwKTtcbiAgLS1jaGFydC0xOiBva2xjaCgwLjY0NiAwLjIyMiA0MS4xMTYpO1xuICAtLWNoYXJ0LTI6IG9rbGNoKDAuNiAwLjExOCAxODQuNzA0KTtcbiAgLS1jaGFydC0zOiBva2xjaCgwLjM5OCAwLjA3IDIyNy4zOTIpO1xuICAtLWNoYXJ0LTQ6IG9rbGNoKDAuODI4IDAuMTg5IDg0LjQyOSk7XG4gIC0tY2hhcnQtNTogb2tsY2goMC43NjkgMC4xODggNzAuMDgpO1xuICAtLXJhZGl1czogMC42MjVyZW07XG4gIC0tc2lkZWJhcjogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQ1IDAgMCk7XG4gIC0tc2lkZWJhci1wcmltYXJ5OiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjk3IDAgMCk7XG4gIC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogb2tsY2goMC4yMDUgMCAwKTtcbiAgLS1zaWRlYmFyLWJvcmRlcjogb2tsY2goMC45MjIgMCAwKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNzA4IDAgMCk7XG59XG5cbi5kYXJrIHtcbiAgLS1iYWNrZ3JvdW5kOiBva2xjaCgwLjE0NSAwIDApO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tY2FyZDogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tcG9wb3Zlcjogb2tsY2goMC4xNDUgMCAwKTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tcHJpbWFyeTogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjA1IDAgMCk7XG4gIC0tc2Vjb25kYXJ5OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjI2OSAwIDApO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNzA4IDAgMCk7XG4gIC0tYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjM5NiAwLjE0MSAyNS43MjMpO1xuICAtLWRlc3RydWN0aXZlLWZvcmVncm91bmQ6IG9rbGNoKDAuNjM3IDAuMjM3IDI1LjMzMSk7XG4gIC0tYm9yZGVyOiBva2xjaCgwLjI2OSAwIDApO1xuICAtLWlucHV0OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXJpbmc6IG9rbGNoKDAuNDM5IDAgMCk7XG4gIC0tY2hhcnQtMTogb2tsY2goMC40ODggMC4yNDMgMjY0LjM3Nik7XG4gIC0tY2hhcnQtMjogb2tsY2goMC42OTYgMC4xNyAxNjIuNDgpO1xuICAtLWNoYXJ0LTM6IG9rbGNoKDAuNzY5IDAuMTg4IDcwLjA4KTtcbiAgLS1jaGFydC00OiBva2xjaCgwLjYyNyAwLjI2NSAzMDMuOSk7XG4gIC0tY2hhcnQtNTogb2tsY2goMC42NDUgMC4yNDYgMTYuNDM5KTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjIwNSAwIDApO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IG9rbGNoKDAuNDg4IDAuMjQzIDI2NC4zNzYpO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjI2OSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tc2lkZWJhci1ib3JkZXI6IG9rbGNoKDAuMjY5IDAgMCk7XG4gIC0tc2lkZWJhci1yaW5nOiBva2xjaCgwLjQzOSAwIDApO1xufVxuXG5AbGF5ZXIgYmFzZSB7XG4gICoge1xuICAgIEBhcHBseSBib3JkZXItYm9yZGVyIG91dGxpbmUtcmluZy81MDtcbiAgfVxuICBib2R5IHtcbiAgICBAYXBwbHkgYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmQ7XG4gIH1cbn1cblxuaHRtbCB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChnbG9iYWxTdHlsZXMpO1xufSkoKTtcbiJdfQ==