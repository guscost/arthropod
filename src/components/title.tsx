import { useTheme } from "next-themes";
import { Github, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Title() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex justify-between mb-4">
      <div>
        <h1 className="text-2xl">Arthropod</h1>
        <p>
          A bundle-free typescript react app kit that includes{" "}
          <a className="underline" href="https://ui.shadcn.com">
            shadcn/ui
          </a>{" "}
          and its dependencies.
        </p>
      </div>
      <div className="flex gap-1">
        <Button asChild size="icon" variant="ghost">
          <a href="https://github.com/guscost/arthropod" target="_blank">
            <Github fill="currentColor" />
          </a>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          {resolvedTheme === "light" ? (
            <Moon fill="currentColor" />
          ) : (
            <Sun fill="currentColor" />
          )}
        </Button>
      </div>
    </div>
  );
}
