import { ReactNode } from 'react';

export default function EditorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <aside className="w-1/6 bg-gray-800 p-2 text-sm">
        <div className="mb-2 font-bold">Hierarchy</div>
        <div className="space-y-1">Cube<br />Light<br />Camera</div>
      </aside>
      <main className="flex-1 flex flex-col bg-gray-900">
        <div className="h-10 bg-gray-800 flex items-center px-4 text-xs">
          <span className="mr-4">Scene</span>
          <span className="mr-4">Game</span>
          <span>Asset Store</span>
        </div>
        <div className="flex-1">{children}</div>
      </main>
      <aside className="w-1/6 bg-gray-800 p-2 text-sm">
        <div className="mb-2 font-bold">Inspector</div>
        <div>Transform<br />Position<br />Rotation<br />Scale</div>
      </aside>
    </div>
  );
}