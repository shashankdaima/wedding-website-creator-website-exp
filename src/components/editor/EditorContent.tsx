import AppBar from './AppBar';
import Canvas from './Canvas';
import ResizablePanel from './ResizablePanel';
import OptionsPanel from './OptionsPanel';
import { AnimationProvider } from '@/context/AnimationContext';
import TabView from './TabView';
import { useState } from 'react';

interface EditorContentProps {
    enableAnimations?: boolean;
}

export default function EditorContent({ enableAnimations = false }: EditorContentProps) {
    const[displayMode, setDisplayMode]=useState<"mobile"|"desktop"|"tablet">("desktop");
    return (
        <AnimationProvider enableAnimations={enableAnimations}>
            <div className="flex flex-col h-screen bg-gray-50">
                <AppBar />
                <ResizablePanel 
                    rightPanel={<OptionsPanel />}
                    defaultRightPanelWidth={30}
                    minRightPanelWidth={20}
                    maxRightPanelWidth={50}
                >
                    <TabView value={displayMode} setValue={setDisplayMode} />
                    
                    <Canvas displayMode={displayMode} />
                </ResizablePanel>
            </div>
        </AnimationProvider>
    );
}
