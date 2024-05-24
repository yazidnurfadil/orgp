import {
  AccordionItem as NextUiAccordionItem,
  Accordion as NextUiAccordion,
  useAccordionItem as nextUiUseAccordionItem,
  useAccordion as nextUiUseAccordion,
} from "@nextui-org/accordion";

import type {
  AccordionProps as NextUiAccordionProps,
  AccordionItemIndicatorProps as NextUiAccordionItemIndicatorProps,
  AccordionItemProps as NextUiAccordionItemProps,
} from "@nextui-org/accordion";

export const AccordionItem = NextUiAccordionItem;
export const Accordion = NextUiAccordion;
export const useAccordionItem = nextUiUseAccordionItem;
export const useAccordion = nextUiUseAccordion;

export type AccordionProps = NextUiAccordionProps;
export type AccordionItemIndicatorProps = NextUiAccordionItemIndicatorProps;
export type AccordionItemProps = NextUiAccordionItemProps;
