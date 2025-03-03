import { Link, Route, Switch } from "wouter";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/title";
import { SinkPage } from "@/components/demo-v4/index";
import { FormDemo } from "@/components/demo-form/index";
import { KanbanBoard } from "@/components/demo-kanban/KanbanBoard";

export function App() {
  return (
    <div className="p-8">
      <Title />

      <div className="flex gap-2 my-4">
        <Link href="/">
          <Button>Cards</Button>
        </Link>
        <Link href="/form">
          <Button>Form</Button>
        </Link>
        <Link href="/drag-n-drop">
          <Button>Drag 'n Drop</Button>
        </Link>
      </div>

      <Switch>
        <Route path="/drag-n-drop">
          <KanbanBoard />
          <h2 className="my-2">
            @dnd-kit demo from{" "}
            <a
              href="https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui"
              className="underline"
            >
              react-dnd-kit-tailwind-shadcn-ui
            </a>
            .
          </h2>
        </Route>
        <Route path="/form">
          <FormDemo />
        </Route>
        <Route path="*">
          <SinkPage />
        </Route>
      </Switch>
    </div>
  );
}
