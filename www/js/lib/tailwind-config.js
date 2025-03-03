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
  --foreground: oklch(0.141 0.005 285.823);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.141 0.005 285.823);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.141 0.005 285.823);
  --primary: oklch(0.21 0.006 285.885);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.967 0.001 286.375);
  --secondary-foreground: oklch(0.21 0.006 285.885);
  --muted: oklch(0.967 0.001 286.375);
  --muted-foreground: oklch(0.552 0.016 285.938);
  --accent: oklch(0.967 0.001 286.375);
  --accent-foreground: oklch(0.21 0.006 285.885);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0.004 286.32);
  --input: oklch(0.92 0.004 286.32);
  --ring: oklch(0.705 0.015 286.067);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.141 0.005 285.823);
  --sidebar-primary: oklch(0.21 0.006 285.885);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.967 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
  --sidebar-border: oklch(0.92 0.004 286.32);
  --sidebar-ring: oklch(0.705 0.015 286.067);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.141 0.005 285.823);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.141 0.005 285.823);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.21 0.006 285.885);
  --secondary: oklch(0.274 0.006 286.033);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.274 0.006 286.033);
  --muted-foreground: oklch(0.705 0.015 286.067);
  --accent: oklch(0.274 0.006 286.033);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.274 0.006 286.033);
  --input: oklch(0.274 0.006 286.033);
  --ring: oklch(0.442 0.017 285.786);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.21 0.006 285.885);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.274 0.006 286.033);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.274 0.006 286.033);
  --sidebar-ring: oklch(0.442 0.017 285.786);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;
    document.head.appendChild(globalStyles);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFpbHdpbmQtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi90YWlsd2luZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLENBQUM7SUFDQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELFlBQVksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDdkMsWUFBWSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUoxQixDQUFDO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcGVuZCBnbG9iYWwgdGFpbHdpbmQgc3R5bGVzaGVldFxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2xvYmFsU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBnbG9iYWxTdHlsZXMudHlwZSA9IFwidGV4dC90YWlsd2luZGNzc1wiO1xuICBnbG9iYWxTdHlsZXMuaW5uZXJIVE1MID0gYC8qIGdsb2JhbCBzdHlsZXMgKi9cbkBpbXBvcnQgXCJ0YWlsd2luZGNzc1wiO1xuXG5AcGx1Z2luIFwidGFpbHdpbmRjc3MtYW5pbWF0ZVwiO1xuXG5AY3VzdG9tLXZhcmlhbnQgZGFyayAoJjppcyguZGFyayAqKSk7XG5cbkB0aGVtZSBpbmxpbmUge1xuICAtLWNvbG9yLWJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAtLWNvbG9yLWZvcmVncm91bmQ6IHZhcigtLWZvcmVncm91bmQpO1xuICAtLWZvbnQtc2FuczogdmFyKC0tZm9udC1nZWlzdC1zYW5zKTtcbiAgLS1mb250LW1vbm86IHZhcigtLWZvbnQtZ2Vpc3QtbW9ubyk7XG4gIC0tY29sb3Itc2lkZWJhci1yaW5nOiB2YXIoLS1zaWRlYmFyLXJpbmcpO1xuICAtLWNvbG9yLXNpZGViYXItYm9yZGVyOiB2YXIoLS1zaWRlYmFyLWJvcmRlcik7XG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1hY2NlbnQtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhci1hY2NlbnQ6IHZhcigtLXNpZGViYXItYWNjZW50KTtcbiAgLS1jb2xvci1zaWRlYmFyLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tc2lkZWJhci1wcmltYXJ5LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLXNpZGViYXItcHJpbWFyeTogdmFyKC0tc2lkZWJhci1wcmltYXJ5KTtcbiAgLS1jb2xvci1zaWRlYmFyLWZvcmVncm91bmQ6IHZhcigtLXNpZGViYXItZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2lkZWJhcjogdmFyKC0tc2lkZWJhcik7XG4gIC0tY29sb3ItY2hhcnQtNTogdmFyKC0tY2hhcnQtNSk7XG4gIC0tY29sb3ItY2hhcnQtNDogdmFyKC0tY2hhcnQtNCk7XG4gIC0tY29sb3ItY2hhcnQtMzogdmFyKC0tY2hhcnQtMyk7XG4gIC0tY29sb3ItY2hhcnQtMjogdmFyKC0tY2hhcnQtMik7XG4gIC0tY29sb3ItY2hhcnQtMTogdmFyKC0tY2hhcnQtMSk7XG4gIC0tY29sb3ItcmluZzogdmFyKC0tcmluZyk7XG4gIC0tY29sb3ItaW5wdXQ6IHZhcigtLWlucHV0KTtcbiAgLS1jb2xvci1ib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gIC0tY29sb3ItZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZDogdmFyKC0tZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItZGVzdHJ1Y3RpdmU6IHZhcigtLWRlc3RydWN0aXZlKTtcbiAgLS1jb2xvci1hY2NlbnQtZm9yZWdyb3VuZDogdmFyKC0tYWNjZW50LWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWFjY2VudDogdmFyKC0tYWNjZW50KTtcbiAgLS1jb2xvci1tdXRlZC1mb3JlZ3JvdW5kOiB2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1tdXRlZDogdmFyKC0tbXV0ZWQpO1xuICAtLWNvbG9yLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZm9yZWdyb3VuZCk7XG4gIC0tY29sb3Itc2Vjb25kYXJ5OiB2YXIoLS1zZWNvbmRhcnkpO1xuICAtLWNvbG9yLXByaW1hcnktZm9yZWdyb3VuZDogdmFyKC0tcHJpbWFyeS1mb3JlZ3JvdW5kKTtcbiAgLS1jb2xvci1wcmltYXJ5OiB2YXIoLS1wcmltYXJ5KTtcbiAgLS1jb2xvci1wb3BvdmVyLWZvcmVncm91bmQ6IHZhcigtLXBvcG92ZXItZm9yZWdyb3VuZCk7XG4gIC0tY29sb3ItcG9wb3ZlcjogdmFyKC0tcG9wb3Zlcik7XG4gIC0tY29sb3ItY2FyZC1mb3JlZ3JvdW5kOiB2YXIoLS1jYXJkLWZvcmVncm91bmQpO1xuICAtLWNvbG9yLWNhcmQ6IHZhcigtLWNhcmQpO1xuICAtLXJhZGl1cy1zbTogY2FsYyh2YXIoLS1yYWRpdXMpIC0gNHB4KTtcbiAgLS1yYWRpdXMtbWQ6IGNhbGModmFyKC0tcmFkaXVzKSAtIDJweCk7XG4gIC0tcmFkaXVzLWxnOiB2YXIoLS1yYWRpdXMpO1xuICAtLXJhZGl1cy14bDogY2FsYyh2YXIoLS1yYWRpdXMpICsgNHB4KTtcbiAgLS1hbmltYXRlLWFjY29yZGlvbi1kb3duOiBhY2NvcmRpb24tZG93biAwLjJzIGVhc2Utb3V0O1xuICAtLWFuaW1hdGUtYWNjb3JkaW9uLXVwOiBhY2NvcmRpb24tdXAgMC4ycyBlYXNlLW91dDtcblxuICBAa2V5ZnJhbWVzIGFjY29yZGlvbi1kb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpeC1hY2NvcmRpb24tY29udGVudC1oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYWNjb3JkaW9uLXVwIHtcbiAgICBmcm9tIHtcbiAgICAgIGhlaWdodDogdmFyKC0tcmFkaXgtYWNjb3JkaW9uLWNvbnRlbnQtaGVpZ2h0KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG46cm9vdCB7XG4gIC0tYmFja2dyb3VuZDogb2tsY2goMSAwIDApO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQxIDAuMDA1IDI4NS44MjMpO1xuICAtLWNhcmQ6IG9rbGNoKDEgMCAwKTtcbiAgLS1jYXJkLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQxIDAuMDA1IDI4NS44MjMpO1xuICAtLXBvcG92ZXI6IG9rbGNoKDEgMCAwKTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IG9rbGNoKDAuMTQxIDAuMDA1IDI4NS44MjMpO1xuICAtLXByaW1hcnk6IG9rbGNoKDAuMjEgMC4wMDYgMjg1Ljg4NSk7XG4gIC0tcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNlY29uZGFyeTogb2tsY2goMC45NjcgMC4wMDEgMjg2LjM3NSk7XG4gIC0tc2Vjb25kYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjEgMC4wMDYgMjg1Ljg4NSk7XG4gIC0tbXV0ZWQ6IG9rbGNoKDAuOTY3IDAuMDAxIDI4Ni4zNzUpO1xuICAtLW11dGVkLWZvcmVncm91bmQ6IG9rbGNoKDAuNTUyIDAuMDE2IDI4NS45MzgpO1xuICAtLWFjY2VudDogb2tsY2goMC45NjcgMC4wMDEgMjg2LjM3NSk7XG4gIC0tYWNjZW50LWZvcmVncm91bmQ6IG9rbGNoKDAuMjEgMC4wMDYgMjg1Ljg4NSk7XG4gIC0tZGVzdHJ1Y3RpdmU6IG9rbGNoKDAuNTc3IDAuMjQ1IDI3LjMyNSk7XG4gIC0tZGVzdHJ1Y3RpdmUtZm9yZWdyb3VuZDogb2tsY2goMC41NzcgMC4yNDUgMjcuMzI1KTtcbiAgLS1ib3JkZXI6IG9rbGNoKDAuOTIgMC4wMDQgMjg2LjMyKTtcbiAgLS1pbnB1dDogb2tsY2goMC45MiAwLjAwNCAyODYuMzIpO1xuICAtLXJpbmc6IG9rbGNoKDAuNzA1IDAuMDE1IDI4Ni4wNjcpO1xuICAtLWNoYXJ0LTE6IG9rbGNoKDAuNjQ2IDAuMjIyIDQxLjExNik7XG4gIC0tY2hhcnQtMjogb2tsY2goMC42IDAuMTE4IDE4NC43MDQpO1xuICAtLWNoYXJ0LTM6IG9rbGNoKDAuMzk4IDAuMDcgMjI3LjM5Mik7XG4gIC0tY2hhcnQtNDogb2tsY2goMC44MjggMC4xODkgODQuNDI5KTtcbiAgLS1jaGFydC01OiBva2xjaCgwLjc2OSAwLjE4OCA3MC4wOCk7XG4gIC0tcmFkaXVzOiAwLjYyNXJlbTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC4xNDEgMC4wMDUgMjg1LjgyMyk7XG4gIC0tc2lkZWJhci1wcmltYXJ5OiBva2xjaCgwLjIxIDAuMDA2IDI4NS44ODUpO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjk2NyAwLjAwMSAyODYuMzc1KTtcbiAgLS1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjIxIDAuMDA2IDI4NS44ODUpO1xuICAtLXNpZGViYXItYm9yZGVyOiBva2xjaCgwLjkyIDAuMDA0IDI4Ni4zMik7XG4gIC0tc2lkZWJhci1yaW5nOiBva2xjaCgwLjcwNSAwLjAxNSAyODYuMDY3KTtcbn1cblxuLmRhcmsge1xuICAtLWJhY2tncm91bmQ6IG9rbGNoKDAuMTQxIDAuMDA1IDI4NS44MjMpO1xuICAtLWZvcmVncm91bmQ6IG9rbGNoKDAuOTg1IDAgMCk7XG4gIC0tY2FyZDogb2tsY2goMC4xNDEgMC4wMDUgMjg1LjgyMyk7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXBvcG92ZXI6IG9rbGNoKDAuMTQxIDAuMDA1IDI4NS44MjMpO1xuICAtLXBvcG92ZXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1wcmltYXJ5OiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXByaW1hcnktZm9yZWdyb3VuZDogb2tsY2goMC4yMSAwLjAwNiAyODUuODg1KTtcbiAgLS1zZWNvbmRhcnk6IG9rbGNoKDAuMjc0IDAuMDA2IDI4Ni4wMzMpO1xuICAtLXNlY29uZGFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLW11dGVkOiBva2xjaCgwLjI3NCAwLjAwNiAyODYuMDMzKTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiBva2xjaCgwLjcwNSAwLjAxNSAyODYuMDY3KTtcbiAgLS1hY2NlbnQ6IG9rbGNoKDAuMjc0IDAuMDA2IDI4Ni4wMzMpO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLWRlc3RydWN0aXZlOiBva2xjaCgwLjM5NiAwLjE0MSAyNS43MjMpO1xuICAtLWRlc3RydWN0aXZlLWZvcmVncm91bmQ6IG9rbGNoKDAuNjM3IDAuMjM3IDI1LjMzMSk7XG4gIC0tYm9yZGVyOiBva2xjaCgwLjI3NCAwLjAwNiAyODYuMDMzKTtcbiAgLS1pbnB1dDogb2tsY2goMC4yNzQgMC4wMDYgMjg2LjAzMyk7XG4gIC0tcmluZzogb2tsY2goMC40NDIgMC4wMTcgMjg1Ljc4Nik7XG4gIC0tY2hhcnQtMTogb2tsY2goMC40ODggMC4yNDMgMjY0LjM3Nik7XG4gIC0tY2hhcnQtMjogb2tsY2goMC42OTYgMC4xNyAxNjIuNDgpO1xuICAtLWNoYXJ0LTM6IG9rbGNoKDAuNzY5IDAuMTg4IDcwLjA4KTtcbiAgLS1jaGFydC00OiBva2xjaCgwLjYyNyAwLjI2NSAzMDMuOSk7XG4gIC0tY2hhcnQtNTogb2tsY2goMC42NDUgMC4yNDYgMTYuNDM5KTtcbiAgLS1zaWRlYmFyOiBva2xjaCgwLjIxIDAuMDA2IDI4NS44ODUpO1xuICAtLXNpZGViYXItZm9yZWdyb3VuZDogb2tsY2goMC45ODUgMCAwKTtcbiAgLS1zaWRlYmFyLXByaW1hcnk6IG9rbGNoKDAuNDg4IDAuMjQzIDI2NC4zNzYpO1xuICAtLXNpZGViYXItcHJpbWFyeS1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYWNjZW50OiBva2xjaCgwLjI3NCAwLjAwNiAyODYuMDMzKTtcbiAgLS1zaWRlYmFyLWFjY2VudC1mb3JlZ3JvdW5kOiBva2xjaCgwLjk4NSAwIDApO1xuICAtLXNpZGViYXItYm9yZGVyOiBva2xjaCgwLjI3NCAwLjAwNiAyODYuMDMzKTtcbiAgLS1zaWRlYmFyLXJpbmc6IG9rbGNoKDAuNDQyIDAuMDE3IDI4NS43ODYpO1xufVxuXG5AbGF5ZXIgYmFzZSB7XG4gICoge1xuICAgIEBhcHBseSBib3JkZXItYm9yZGVyIG91dGxpbmUtcmluZy81MDtcbiAgfVxuICBib2R5IHtcbiAgICBAYXBwbHkgYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmQ7XG4gIH1cbn1cbmA7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZ2xvYmFsU3R5bGVzKTtcbn0pKCk7XG4iXX0=