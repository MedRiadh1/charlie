import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const Cloud = ({ id, left, top }) => {
  const [, drag, preview] = useDrag({
    type: 'CLOUD',
    item: { id },
  });

  return (
    <>
      <div ref={preview} style={{ display: 'none' }}>
        ☁️
      </div>
      <div
        ref={(node) => drag(node)}
        style={{ position: 'absolute', left, top, cursor: 'move' }}
      >
        <FontAwesomeIcon icon={faCloud} />
      </div>
    </>
  );
};

export default Cloud;