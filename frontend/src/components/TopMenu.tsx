import { Bell, Search, Settings, User, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface TopMenuProps {
  onOpenSidebar: () => void
}

export default function TopMenu({ onOpenSidebar }: TopMenuProps) {
  return (
    <header className="flex items-center justify-between border-b px-6 py-2">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onOpenSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">TaskMaster</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Boards
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Calendar
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Input type="text" placeholder="Search..." className="w-64 hidden md:inline-flex" />
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Settings size={20} />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem>Login</DropdownMenuItem>
            <DropdownMenuItem>Register</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

