export default function Canvas() {
  return (
    <div className="w-full h-full bg-gray-50 overflow-auto p-4">
      <div className="max-w-4xl mx-auto min-h-[150vh] bg-white rounded-lg shadow-lg">
        {/* Canvas content will go here */}
        <div className="p-8">
          <p className="text-gray-400 text-center">Drag and drop components here</p>
        </div>
      </div>
    </div>
  );
}
