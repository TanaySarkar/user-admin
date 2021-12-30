import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Cart from './Cart';
import ItemsDragLayer from './ItemsDragLayer';
import './index.css';

const styles = {
  main: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'left',
    alignItems: 'stretch',
    alignContent: 'stretch',
  },
  arrow: {
    fontSize: 50,
    display: 'inline-block',
    marginBottom: 20,
    border: '2px solid',
    borderRadius: 6,
    lineHeight: 1,
    color: '#464646',
    padding: 7,
  },
};

const DragMultySelect = () => {
  const [leftItems, setLeftItems] = useState([
    'Code - Property Name #1',
    'Code - Property Name #2',
    'Code - Property Name #3',
    'Code - Property Name #4',
    'Code - Property Name #5',
    'Code - Property Name #6',
    'Code - Property Name #7',
    'Code - Property Name #8',
  ]);
  const [rightItems, setRightItems] = useState([]);

  const addItemsToCart = (items, source, dropResult) => {
    const newLeftItems =
      source === 'left'
        ? leftItems.filter((x) => items.findIndex((y) => x === y) < 0)
        : leftItems.concat(items);
    const newRightItems =
      source === 'left'
        ? rightItems.concat(items)
        : rightItems.filter((x) => items.findIndex((y) => x === y) < 0);
    setLeftItems(newLeftItems);
    setRightItems(newRightItems);
  };
  return (
    <div className="text-center">
      <DndProvider backend={HTML5Backend}>
        <ItemsDragLayer />
        <div className="d-inline-flex align-items-center">
          <Cart
            id="left"
            fields={leftItems}
            addItemsToCart={addItemsToCart}
            header="Property List"
          />
          <div style={{ maxWidth: 200 }}>
            <div style={styles.arrow}>
              <i className="mdi mdi-arrow-right"></i>
            </div>
            <p className="mb-0">
              Drag and Drop property name from the Property List
            </p>
          </div>
          <Cart
            id="right"
            fields={rightItems}
            addItemsToCart={addItemsToCart}
            header="Selected Property List"
          />
        </div>
      </DndProvider>
    </div>
  );
};

export default DragMultySelect;
