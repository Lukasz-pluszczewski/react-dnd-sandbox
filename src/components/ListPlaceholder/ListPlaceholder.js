import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../../constants/dnd';

import ListItem from '../ListItem/ListItem';

const ListPlaceholder = ({ item, dispatch }) => {
  const [{ isOver, canDrop, element }, drop] = useDrop({
    accept: ItemTypes.LIST,
    drop: (element) => dispatch({ type: 'updateSorting', payload: { targetOrder: item.order, element } }),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      element: monitor.getItem(),
    }),
  });

  useEffect(
    () => {
      if (isOver && canDrop) {
        dispatch({ type: 'updateTempSorting', payload: { targetOrder: item.order, element } });
      }
    },
    [isOver, canDrop],
  );

  if (item) {
    return (
      <li ref={drop}>
        <ListItem highlight={isOver} id={item.id} order={item.order} name={item.name} />
      </li>
    );
  }
  return <li>ListPlaceholder</li>
};

ListPlaceholder.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string,
      order: PropTypes.number,
      name: PropTypes.string,
    }),
    PropTypes.oneOf([null]),
  ]),
  dispatch: PropTypes.func,
};

export default ListPlaceholder;
