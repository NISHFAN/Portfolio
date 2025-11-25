export default function Footer(){
  return (
    <footer className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex justify-between items-center">
        <div>© {new Date().getFullYear()} Mohamed Nishfan </div>
      </div>
    </footer>
  )
}