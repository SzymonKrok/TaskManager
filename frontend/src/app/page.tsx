"use client"

import { useState } from "react"
import TaskBoard from "../components/TaskBoard"
import TopMenu from "../components/TopMenu"
import Sidebar from "../components/Sidebar"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen flex-col">
      <TopMenu onOpenSidebar={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 overflow-x-auto p-4">
          <TaskBoard />
        </main>
      </div>
    </div>
  )
}

