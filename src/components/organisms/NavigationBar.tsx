"use client";

import { Button } from "@/components/atoms/Button";
import { Link } from "@/components/atoms/Link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@/components/molecules/Navbar";

const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const NavigationBar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <AcmeLogo />
          <p className="font-bold hidden sm:block text-inherit">ACME</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex">
        <NavbarItem isActive>
          <Link href="/calon-peserta">Calon Peserta</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/daftar" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
