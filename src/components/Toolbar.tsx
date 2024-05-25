import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { SketchPicker } from 'react-color';
import './Toolbar.css'; 
interface ToolbarProps {
  onColorChange: (color: string) => void;
  onBrushSizeChange: (size: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onColorChange, onBrushSizeChange }) => {
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  const handleColorChange = (color: any) => {
    setColor(color.hex);
    onColorChange(color.hex);
  };

  const handleBrushSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(event.target.value);
    setBrushSize(size);
    onBrushSizeChange(size);
  };

  return (
    <div className="toolbar">
      <div className="color-picker">
        <SketchPicker color={color} onChangeComplete={handleColorChange} />
      </div>
      <div className="brush-size">
        <label htmlFor="brushSize">Brush Size:</label>
        <input
          type="range"
          id="brushSize"
          min="1"
          max="20"
          value={brushSize}
          onChange={handleBrushSizeChange}
        />
      </div>
      <Button variant="contained" color="secondary">
        Undo
      </Button>
      <Button variant="contained" color="secondary">
        Redo
      </Button>
    </div>
  );
};

export default Toolbar;
