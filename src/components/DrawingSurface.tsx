import React, { useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

import './DrawingSurface.css';

interface DrawingSurfaceProps {
  color: string;
  brushSize: number;
}

const DrawingSurface: React.FC<DrawingSurfaceProps> = ({ color, brushSize }) => {
  const [lines, setLines] = useState<any[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = (e: any) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
    >
      <Layer>
        {lines.map((line, i) => (
          <Line key={i} points={line.points} stroke="black" strokeWidth={5} />
        ))}
      </Layer>
    </Stage>
  );
};

export default DrawingSurface;
