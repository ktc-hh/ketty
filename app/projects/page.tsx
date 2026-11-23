export const metadata = { title: "Projects | Your Name" };

const projects = [
  { id: 1, name: "Portfolio Site", description: "This personal site built with Next.js and Tailwind." },
  { id: 2, name: "Todo App", description: "A simple task list built with React state." },
  { id: 3, name: "Weather App", description: "Shows the current weather for a city I search." },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="rounded border border-gray-200 p-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-700">{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
