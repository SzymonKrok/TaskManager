import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const columns = [
  { id: "todo", title: "To Do" },
  { id: "inProgress", title: "In Progress" },
  { id: "review", title: "Review" },
  { id: "done", title: "Done" },
]

const tasks = [
  {
    id: 1,
    title: "Design new landing page",
    description: "Create a modern and engaging landing page design",
    tag: "Design",
    priority: "High",
    status: "todo",
  },
  {
    id: 2,
    title: "Implement user authentication",
    description: "Set up secure user authentication system",
    tag: "Backend",
    priority: "High",
    status: "inProgress",
  },
  {
    id: 3,
    title: "Write API documentation",
    description: "Document all API endpoints and their usage",
    tag: "Documentation",
    priority: "Medium",
    status: "review",
  },
  {
    id: 4,
    title: "Fix navigation bug",
    description: "Resolve issue with navigation menu on mobile devices",
    tag: "Bug",
    priority: "Low",
    status: "done",
  },
  {
    id: 5,
    title: "Create user onboarding flow",
    description: "Design and implement a smooth onboarding experience for new users",
    tag: "UX",
    priority: "Medium",
    status: "todo",
  },
  {
    id: 6,
    title: "Optimize database queries",
    description: "Improve performance by optimizing slow database queries",
    tag: "Backend",
    priority: "High",
    status: "inProgress",
  },
  {
    id: 7,
    title: "Implement dark mode",
    description: "Add a dark mode option for better user experience",
    tag: "Frontend",
    priority: "Low",
    status: "todo",
  },
  {
    id: 8,
    title: "Set up CI/CD pipeline",
    description: "Configure continuous integration and deployment for the project",
    tag: "DevOps",
    priority: "Medium",
    status: "inProgress",
  },
  {
    id: 9,
    title: "Create email templates",
    description: "Design and code responsive email templates for notifications",
    tag: "Design",
    priority: "Low",
    status: "review",
  },
  {
    id: 10,
    title: "Implement search functionality",
    description: "Add search feature to allow users to find tasks quickly",
    tag: "Frontend",
    priority: "Medium",
    status: "todo",
  },
]

function TaskCard({ task }) {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-gray-500 mb-2">{task.description}</p>
        <div className="flex justify-between items-center">
          <Badge variant="secondary" className="text-xs">
            {task.tag}
          </Badge>
          <Badge
            variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "outline"}
            className="text-xs"
          >
            {task.priority}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TaskBoard() {
  return (
    <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col h-full">
          <h2 className="font-semibold mb-4 text-lg">{column.title}</h2>
          <div
            className="bg-gray-100 p-4 rounded-lg flex-grow overflow-y-auto"
            style={{
              backgroundImage: "radial-gradient(#cbd5e0 0.5px, transparent 0.5px)",
              backgroundSize: "10px 10px",
            }}
          >
            {tasks
              .filter((task) => task.status === column.id)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

