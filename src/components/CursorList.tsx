// CursorList.tsx

import React from 'react';
import './CursorList.css'; 

interface Cursor {
  id: string;
  x: number;
  y: number;
  color: string;
}

interface CursorListProps {
  cursors: Cursor[];
}

const CursorList: React.FC<CursorListProps> = ({ cursors }) => {
  return (
    <div className="cursor-list">
      {cursors.map((cursor) => (
        <div
          key={cursor.id}
          className="cursor"
          style={{
            left: cursor.x,
            top: cursor.y,
            backgroundColor: cursor.color,
          }}
        />
      ))}
    </div>
  );
};

export default CursorList;
