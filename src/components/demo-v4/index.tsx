import { AccordionDemo } from "@/components/demo-v4/accordion-demo";
import { AlertDemo } from "@/components/demo-v4/alert-demo";
import { AlertDialogDemo } from "@/components/demo-v4/alert-dialog-demo";
import { AspectRatioDemo } from "@/components/demo-v4/aspect-ratio-demo";
import { AvatarDemo } from "@/components/demo-v4/avatar-demo";
import { BadgeDemo } from "@/components/demo-v4/badge-demo";
import { BreadcrumbDemo } from "@/components/demo-v4/breadcrumb-demo";
import { ButtonDemo } from "@/components/demo-v4/button-demo";
import { CalendarDemo } from "@/components/demo-v4/calendar-demo";
import { CardDemo } from "@/components/demo-v4/card-demo";
import { CarouselDemo } from "@/components/demo-v4/carousel-demo";
import { ChartDemo } from "@/components/demo-v4/chart-demo";
import { CheckboxDemo } from "@/components/demo-v4/checkbox-demo";
import { CollapsibleDemo } from "@/components/demo-v4/collapsible-demo";
import { ComboboxDemo } from "@/components/demo-v4/combobox-demo";
import { CommandDemo } from "@/components/demo-v4/command-demo";
import { ComponentWrapper } from "@/components/demo-v4/component-wrapper";
import { ContextMenuDemo } from "@/components/demo-v4/context-menu-demo";
import { DatePickerDemo } from "@/components/demo-v4/date-picker-demo";
import { DialogDemo } from "@/components/demo-v4/dialog-demo";
import { DrawerDemo } from "@/components/demo-v4/drawer-demo";
import { DropdownMenuDemo } from "@/components/demo-v4/dropdown-menu-demo";
import { FormDemo } from "@/components/demo-v4/form-demo";
import { HoverCardDemo } from "@/components/demo-v4/hover-card-demo";
import { InputDemo } from "@/components/demo-v4/input-demo";
import { InputOTPDemo } from "@/components/demo-v4/input-otp-demo";
import { LabelDemo } from "@/components/demo-v4/label-demo";
import { MenubarDemo } from "@/components/demo-v4/menubar-demo";
import { NavigationMenuDemo } from "@/components/demo-v4/navigation-menu-demo";
import { PaginationDemo } from "@/components/demo-v4/pagination-demo";
import { PopoverDemo } from "@/components/demo-v4/popover-demo";
import { ProgressDemo } from "@/components/demo-v4/progress-demo";
import { RadioGroupDemo } from "@/components/demo-v4/radio-group-demo";
import { ResizableDemo } from "@/components/demo-v4/resizable-demo";
import { ScrollAreaDemo } from "@/components/demo-v4/scroll-area-demo";
import { SelectDemo } from "@/components/demo-v4/select-demo";
import { SeparatorDemo } from "@/components/demo-v4/separator-demo";
import { SheetDemo } from "@/components/demo-v4/sheet-demo";
import { SkeletonDemo } from "@/components/demo-v4/skeleton-demo";
import { SliderDemo } from "@/components/demo-v4/slider-demo";
import { SonnerDemo } from "@/components/demo-v4/sonner-demo";
import { SwitchDemo } from "@/components/demo-v4/switch-demo";
import { TableDemo } from "@/components/demo-v4/table-demo";
import { TabsDemo } from "@/components/demo-v4/tabs-demo";
import { TextareaDemo } from "@/components/demo-v4/textarea-demo";
import { ToggleDemo } from "@/components/demo-v4/toggle-demo";
import { ToggleGroupDemo } from "@/components/demo-v4/toggle-group-demo";
import { TooltipDemo } from "@/components/demo-v4/tooltip-demo";

export function SinkPage() {
  return (
    <div className="grid gap-4">
      <ComponentWrapper name="chart" className="w-full">
        <ChartDemo />
      </ComponentWrapper>
      <ComponentWrapper name="accordion">
        <AccordionDemo />
      </ComponentWrapper>
      <ComponentWrapper name="alert">
        <AlertDemo />
      </ComponentWrapper>
      <ComponentWrapper name="alert-dialog">
        <AlertDialogDemo />
      </ComponentWrapper>
      <ComponentWrapper name="aspect-ratio">
        <AspectRatioDemo />
      </ComponentWrapper>
      <ComponentWrapper name="avatar">
        <AvatarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="badge">
        <BadgeDemo />
      </ComponentWrapper>
      <ComponentWrapper name="breadcrumb">
        <BreadcrumbDemo />
      </ComponentWrapper>
      <ComponentWrapper name="button">
        <ButtonDemo />
      </ComponentWrapper>
      <ComponentWrapper name="calendar">
        <CalendarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="card">
        <CardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="carousel" className="hidden md:flex">
        <CarouselDemo />
      </ComponentWrapper>
      <ComponentWrapper name="checkbox">
        <CheckboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name="collapsible">
        <CollapsibleDemo />
      </ComponentWrapper>
      <ComponentWrapper name="combobox">
        <ComboboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name="command">
        <CommandDemo />
      </ComponentWrapper>
      <ComponentWrapper name="context-menu">
        <ContextMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="date-picker">
        <DatePickerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="dialog">
        <DialogDemo />
      </ComponentWrapper>
      <ComponentWrapper name="drawer">
        <DrawerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="dropdown-menu">
        <DropdownMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="form">
        <FormDemo />
      </ComponentWrapper>
      <ComponentWrapper name="hover-card">
        <HoverCardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="input">
        <InputDemo />
      </ComponentWrapper>
      <ComponentWrapper name="input-otp">
        <InputOTPDemo />
      </ComponentWrapper>
      <ComponentWrapper name="label">
        <LabelDemo />
      </ComponentWrapper>
      <ComponentWrapper name="menubar">
        <MenubarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="navigation-menu">
        <NavigationMenuDemo />
      </ComponentWrapper>
      <ComponentWrapper name="pagination">
        <PaginationDemo />
      </ComponentWrapper>
      <ComponentWrapper name="popover">
        <PopoverDemo />
      </ComponentWrapper>
      <ComponentWrapper name="progress">
        <ProgressDemo />
      </ComponentWrapper>
      <ComponentWrapper name="radio-group">
        <RadioGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="resizable">
        <ResizableDemo />
      </ComponentWrapper>
      <ComponentWrapper name="scroll-area">
        <ScrollAreaDemo />
      </ComponentWrapper>
      <ComponentWrapper name="select">
        <SelectDemo />
      </ComponentWrapper>
      <ComponentWrapper name="separator">
        <SeparatorDemo />
      </ComponentWrapper>
      <ComponentWrapper name="sheet">
        <SheetDemo />
      </ComponentWrapper>
      <ComponentWrapper name="skeleton">
        <SkeletonDemo />
      </ComponentWrapper>
      <ComponentWrapper name="slider">
        <SliderDemo />
      </ComponentWrapper>
      <ComponentWrapper name="sonner">
        <SonnerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="switch">
        <SwitchDemo />
      </ComponentWrapper>
      <ComponentWrapper name="table">
        <TableDemo />
      </ComponentWrapper>
      <ComponentWrapper name="tabs">
        <TabsDemo />
      </ComponentWrapper>
      <ComponentWrapper name="textarea">
        <TextareaDemo />
      </ComponentWrapper>
      <ComponentWrapper name="toggle">
        <ToggleDemo />
      </ComponentWrapper>
      <ComponentWrapper name="toggle-group">
        <ToggleGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="tooltip">
        <TooltipDemo />
      </ComponentWrapper>
    </div>
  );
}
