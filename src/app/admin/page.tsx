"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { UserEditDialog } from "@/components/UserEditDialog"; // Uncomment if exists

const navItems = [
  { label: "Użytkownicy", href: "/users" },
  { label: "Role", href: "/roles" },
  { label: "Ośrodki", href: "/osrodki" },
  { label: "Zamówienia (Mock)", href: "/zamowienia" },
  { label: "Produkty (Mock)", href: "/produkty" },
];

function Sidebar() {
  const pathname = usePathname();
  return (
   <aside className="w-64 bg-gray-900 p-4 flex flex-col text-white">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-wide text-white">🔐 PKL Admin Panel</h1>
        <div className="mt-2 text-xs text-gray-400">
          Jan Kowalski<br />
          <span className="bg-blue-900 px-2 py-1 rounded">Administrator</span>
        </div>
      </div>
      <nav className="flex-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-2 rounded mb-1 ${pathname === item.href ? "bg-[#23233a] text-white" : "text-gray-400 hover:bg-[#23233a]"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="text-xs text-gray-500 mt-auto">PKL Permission PoC v1.0</div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="h-16 flex items-center px-6 border-b border-gray-700 bg-gray-800 text-white">
      <h2 className="text-xl font-semibold">PKL Permission PoC</h2>
    </header>
  );
}

const users = [
  {
    name: "Jan Kowalski",
    email: "jan.kowalski@pkl.com",
    role: "Administrator",
    osrodki: "Kasprowy, Wierch",
  },
  {
    name: "Anna Nowak",
    email: "anna.nowak@pkl.com",
    role: "Support",
    osrodki: "Kasprowy, Wierch, Gubałówka",
  },
  {
    name: "Piotr Wiśniewski",
    email: "piotr.wisniewski@pkl.com",
    role: "Viewer",
    osrodki: "PKL Palenica",
  },
];

function UserTable() {
  return (
    
    <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden">
      <thead>
        <tr className="text-left text-gray-400">
          <th className="p-3">Nazwa</th>
          <th className="p-3">Email</th>
          <th className="p-3">Rola</th>
          <th className="p-3">Ośrodki</th>
          <th className="p-3">Akcje</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, i) => (
          <tr key={i} className={`border-t border-gray-700 ${i % 2 === 0 ? "bg-gray-800" : "bg-gray-900"} hover:bg-gray-700 transition-colors`}>
            <td className="p-3">{u.name}</td>
            <td className="p-3">{u.email}</td>
            <td className="p-3">
              <span className={`px-2 py-1 rounded text-xs text-white ${
  u.role === "Administrator"
    ? "bg-blue-600"
    : u.role === "Support"
    ? "bg-purple-600"
    : "bg-gray-600"
}`}>
                {u.role}
              </span>
            </td>
            <td className="p-3">{u.osrodki}</td>
            <td className="p-3">
              <Button size="sm" variant="outline">Edytuj</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function AdminPanelPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Zarządzanie Użytkownikami</h1>
              <p className="text-gray-400 text-sm">Manage system users and their assignments</p>
            </div>
           <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpen(true)}>
  + Dodaj Użytkownika
</Button>

          </div>
          <UserTable />
          {/* <UserEditDialog open={open} onOpenChange={setOpen} /> */}
        </main>
      </div>
    </div>
  );
}