import { Plus, Filter, SortAsc, Users, Tag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState, useEffect } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return (
    <>
      {isMobile && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? "block" : "hidden"}`}
          onClick={onClose}
        ></div>
      )}
      <aside
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "w-64 border-r"
        } p-4 h-full bg-gray-50 flex flex-col`}
      >
        {isMobile && (
          <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        )}
        <Link href="/add-task" passHref>
          <Button className="w-full mb-4">
            <Plus className="mr-2 h-4 w-4" /> Add New Task
          </Button>
        </Link>

        <div className="mb-4">
          <Select onValueChange={(value) => console.log("Filter changed:", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter Tasks" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tasks</SelectItem>
              <SelectItem value="todo">To Do</SelectItem>
              <SelectItem value="inProgress">In Progress</SelectItem>
              <SelectItem value="review">Review</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <SortAsc className="mr-2 h-4 w-4" /> Sort Tasks
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" /> Team Members
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Tag className="mr-2 h-4 w-4" /> Labels
              </Button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

