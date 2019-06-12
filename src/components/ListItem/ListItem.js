import React from 'react';
import PropTypes from 'prop-types';
import { useDrag, useEffect } from 'react-dnd';

import { ItemTypes } from '../../constants/dnd';

const ListItem = ({ id, order, name, highlight }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.LIST, id, order, name },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),

    }),
  });

  const textStyle = highlight
    ? {textShadow: '0 0 8px #000', color: 'transparent'}
    : {textShadow: 'none', color: 'inherit'};

  return <div style={textStyle} ref={drag}>{`Id: ${id}, order: ${order}, name: ${name}`}</div>;
};

ListItem.propTypes = {
  id: PropTypes.string,
  order: PropTypes.number,
  name: PropTypes.string,
  highlight: PropTypes.bool,
};

export default ListItem;
