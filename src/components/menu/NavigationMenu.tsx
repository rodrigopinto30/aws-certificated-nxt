import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";

const NavigationMenuComponent = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-center items-center h-[60px] bg-white">
      {/* <Link href="/">icon</Link> */}
      <NavigationMenu className="border-1 border-gray-500 p-1 rounded-2xl">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
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
              <Link href="/career">Career</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/pricing">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about-us">About us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="flex flex-row space-x-1 pl-5">
          <Button asChild className="rounded-2xl">
            <Link href="/login">Login</Link>
          </Button>
          {/* <Button asChild className="rounded-2xl">
            <Link href="/signup">Signup</Link>
          </Button> */}
        </div>
      </NavigationMenu>
    </header>
  );
};

export default NavigationMenuComponent;
