import AppBar from './AppBar';
import Canvas from './Canvas';
import ResizablePanel from './ResizablePanel';
import OptionsPanel from './OptionsPanel';

export default function EditorContent() {
    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <AppBar />
            <ResizablePanel 
                rightPanel={<OptionsPanel />}
                defaultRightPanelWidth={30}
                minRightPanelWidth={20}
                maxRightPanelWidth={50}
            >
                <Canvas />
            </ResizablePanel>
        </div>
    );
}
