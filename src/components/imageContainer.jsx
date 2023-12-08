import { useDrop } from 'react-dnd';

const ImageContainer = ({ onDrop, children }) => {
  const [, drop] = useDrop({
    accept: 'CLOUD',
    drop: (item, monitor) => onDrop(item, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ position: 'relative', width: '400px', height: '300px', border: '1px solid #ddd' }}>
      {children}
    </div>
  );
};

export default ImageContainer;