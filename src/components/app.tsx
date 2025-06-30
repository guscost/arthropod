import { Link, Route, Switch } from "wouter";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/title";
import { CardsDemo } from "@/components/demo-cards/index";
import { FormDemo } from "@/components/demo-form/index";
import { SwrDemo } from "@/components/demo-swr/index";
import { KanbanBoard } from "@/components/demo-kanban/KanbanBoard";

export function App() {
  return (
    <div className="p-8">
      <Title />

      <div className="flex gap-2 my-4">
        <Link asChild href="/">
          <Button>Cards</Button>
        </Link>
        <Link asChild href="/form">
          <Button>Form</Button>
        </Link>
        <Link asChild href="/drag-n-drop">
          <Button>Drag 'n Drop</Button>
        </Link>
        <Link asChild href="/swr">
          <Button>SWR</Button>
        </Link>
      </div>

      <Switch>
        <Route path="/swr">
          <SwrDemo />
        </Route>
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
          <CardsDemo />
        </Route>
      </Switch>
    </div>
  );
}
