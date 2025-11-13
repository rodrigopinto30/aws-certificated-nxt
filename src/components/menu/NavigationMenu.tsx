import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";

const NavigationMenuComponent = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[60px]">
      {/* <Link href="/">icon</Link> */}
      <NavigationMenu className="border-1 border-gray-500 p-1 rounded-2xl">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>References</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>
                <Link href="/login">Link a AWS Login</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/signup">Link a AWS SignUp</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/signup">About us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="flex flex-row space-x-1 pl-5">
          <Button asChild className="rounded-2xl">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="rounded-2xl">
            <Link href="/signup">Signup</Link>
          </Button>
        </div>
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuComponent;
