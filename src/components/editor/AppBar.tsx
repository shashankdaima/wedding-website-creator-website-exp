export default function AppBar() {
  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-gray-800">Wedding Website Editor</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Save
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
          Preview
        </button>
      </div>
    </div>
  );
}
