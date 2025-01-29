import { useAppSelector } from "@/store/hooks";

export default function AppBar() {
  const handlePreview = () => {
    // Open preview in new tab
    window.open('/preview', '_blank');
  };

  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="!text-xl font-semibold text-gray-800">Wedding Website Editor</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={handlePreview}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          Preview
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
          Deploy
        </button>
      </div>
    </div>
  );
}
