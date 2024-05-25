import {
  Popover as NextUIPopover,
  PopoverTrigger as NextUIPopoverTrigger,
  PopoverContent as NextUIPopoverContent,
  PopoverProvider as NextUIPopoverProvider,
  FreeSoloPopover as NextUIFreeSoloPopover,
  usePopover as useNextUIPopover,
  usePopoverContext as useNextUIPopoverContext,
} from "@nextui-org/popover";

// export types
export type { PopoverProps } from "@nextui-org/popover";

// export hooks
export const usePopover = useNextUIPopover;

// export context
export const PopoverProvider = NextUIPopoverProvider;
export const usePopoverContext = useNextUIPopoverContext;

// export components
export const Popover = NextUIPopover;
export const PopoverTrigger = NextUIPopoverTrigger;
export const PopoverContent = NextUIPopoverContent;
export const FreeSoloPopover = NextUIFreeSoloPopover;
