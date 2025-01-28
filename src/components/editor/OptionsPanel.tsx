export default function OptionsPanel() {
  return (
    <div className="h-full bg-white border-l border-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Canvas Options</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Background Color</label>
            <input 
              type="color" 
              className="h-8 w-full rounded border border-gray-300"
              defaultValue="#ffffff"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Width</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              defaultValue={1024}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Height</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              defaultValue={768}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
