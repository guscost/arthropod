## Updating dependencies

Set versions in `package.json` and run:

```
npm run update
```

A few dependencies need additional steps to update the types. See commented-out lines in update.js.

## Updating shadcn

To get the shadcn components, it's a bit more work.

1. Init shadcn from somewhere outside this directory:

```
npx shadcn@latest init -d

pnpm dlx shadcn@canary init -d
```

2. `cd` to the new folder and add the components:

```
npx shadcn@latest add accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button card carousel chart checkbox collapsible command context-menu dialog drawer dropdown-menu form hover-card input input-otp label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet sidebar skeleton slider sonner switch table tabs textarea toast toggle toggle-group tooltip

pnpm dlx shadcn@canary add accordion alert alert-dialog aspect-ratio avatar badge breadcrumb button card carousel chart checkbox collapsible command context-menu dialog drawer dropdown-menu form hover-card input input-otp label menubar navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet sidebar skeleton slider sonner switch table tabs textarea toggle toggle-group tooltip
```

3. Copy the contents of `@` into `src`, run `tsc` and fix any type issues.
