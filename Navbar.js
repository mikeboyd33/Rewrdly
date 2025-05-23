export default function Navbar({ onLogout }) {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h2 className="font-bold text-lg">Rewrdly</h2>
      <button
        onClick={onLogout}
        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
      >
        Log Out
      </button>
    </nav>
  )
}
