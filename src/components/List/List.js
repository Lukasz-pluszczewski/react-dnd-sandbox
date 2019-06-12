import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ListPlaceholder from '../ListPlaceholder/ListPlaceholder';

const reindexElements = (items, targetOrder, element) => {
  return _.chain(items)
    .cloneDeep()
    .map(item => {
      if (item.id === element.id && element.order !== targetOrder) {
        return {
          ...item,
          order: element.order > targetOrder ? (targetOrder - 0.5) : (targetOrder + 0.5),
        };
      }
      return item;
    })
    .sortBy(['order'])
    .map((item, index) => ({ ...item, order: index + 1 }))
    .value();
};

const List = ({ initialItems }) => {
  const [{ items, tempItems }, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'updateSorting': {
        const { targetOrder, element } = action.payload;
        const newList = reindexElements(state.items, targetOrder, element);
        return {
          ...state,
          items: newList,
          tempItems: newList,
        };
      }
      case 'updateTempSorting': {
        const { targetOrder, element } = action.payload;
        return {
          ...state,
          tempItems: reindexElements(state.items, targetOrder, element),
        };
      }
    }

  }, { items: initialItems, tempItems: initialItems });



  return (
    <div>
      <ul>
        {tempItems.map((item) => (<ListPlaceholder key={item.id} item={item} dispatch={dispatch} />))}
      </ul>
    </div>
  );
};

List.propTypes = {
  initialItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    order: PropTypes.number,
    name: PropTypes.string,
  }))
};

export default List;
