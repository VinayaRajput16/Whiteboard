import React, { useState } from 'react';
import Toolbar from './Toolbar';
import DrawingSurface from './DrawingSurface';
import CursorList from './CursorList';
import ChatWindow from './ChatWindow';
import './Whiteboard.css'; 

// Define the type for a chat message
interface ChatMessage {
  user: string;
  message: string;
}

const Whiteboard: React.FC = () => {
  const [color, setColor] = useState<string>('#000000');
  const [brushSize, setBrushSize] = useState<number>(5);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cursors, setCursors] = useState<Array<{ id: string; x: number; y: number; color: string }>>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  const handleBrushSizeChange = (newSize: number) => {
    setBrushSize(newSize);
  };

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { user: 'Me', message }]);
  };

  return (
    <div className="whiteboard">
      <Toolbar onColorChange={handleColorChange} onBrushSizeChange={handleBrushSizeChange} />
      <DrawingSurface color={color} brushSize={brushSize} />
      <CursorList cursors={cursors} />
      <ChatWindow onSendMessage={handleSendMessage} messages={messages} />
    </div>
  );
};

export default Whiteboard;
