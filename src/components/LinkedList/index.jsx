import React, { useState } from 'react';
import { Button, InputDebounced, Node, Pointer } from '../../shared/components'
import { List, Operations, OpWrapper } from './Styles';

function LinkedList() {
  
  const [addVal, setAddVal] = useState();
  const [list, setList] = useState([1]);

  return (
    <div>
      <List id="list">
        {list.map((value, idx) => (
          <>
            <Node key={idx} value={value} className='node'/>
            <Pointer />
          </>
        ))}
      </List>
      <Operations>
        <OpWrapper>
          <div>
            <Button
              variant="primary"
              onClick={() => {
                setList([
                  ...list, addVal
                ])
              }}
            >
              Add
            </Button>
            <InputDebounced
              placeholder="Data"
              filter={/^\d{0,6}$/}
              value={1}
              onChange={stringValue => {
                const value = stringValue.trim() ? Number(stringValue) : null;
                setAddVal(value);
              }}
            />
          </div> 
        </OpWrapper>
      </Operations>
    </div>
  );
}

export default LinkedList;