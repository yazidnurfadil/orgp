import {
  // component
  User as NextUiUser,
  // hook
  useUser as nextUiUseUser,
} from "@nextui-org/user";

// type
import type { UserProps as NextUiUserProps } from "@nextui-org/user";

// export type
export interface UserProps extends NextUiUserProps {}

// export component
export const User = NextUiUser;

// export hook
export const useUser = nextUiUseUser;
