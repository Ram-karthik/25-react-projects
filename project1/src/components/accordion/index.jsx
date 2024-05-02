import React, { useState } from 'react';
import data from './data';
import '../accordion/style.css';

const Accordian = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelect = (getId) => {
    setSelected(getId === selected ? null : getId);
  }
  const handleMultiSelect = (getId) => {
    let cpymultiple = [...multiple];
    const findCurrentIndexId = cpymultiple.indexOf(getId);
    if (findCurrentIndexId === -1) cpymultiple.push(getId);
    else cpymultiple.splice(findCurrentIndexId, 1);
    setMultiple(cpymultiple);
  }

  return (
    <div>
      <button className="multi-sel-btn btn c-point" onClick={() => setEnableMultiSelect(!enableMultiSelect)}>Multi-select button</button>
      <div className='accordion'>
        {
          data && data.length > 0 ?
            (
              data.map(dataItem => (
                <div className='acc-item'>
                  <div className='title d-flex c-point' onClick={() => enableMultiSelect ? handleMultiSelect(dataItem.id) : handleSingleSelect(dataItem.id)}>
                    <h3>{dataItem.name}</h3>
                    <span>+</span>
                  </div>
                  {
                    enableMultiSelect ?
                      multiple.indexOf(dataItem.id) !== -1 && (
                        <div className='acc-content'>
                          {dataItem.skill}
                        </div>)
                      :
                      selected === dataItem.id &&
                      (
                        <div className='acc-content'>
                          {dataItem.skill}
                        </div>
                      )
                  }
                </div>
              ))
            ) :
            (
              <div>Data Not Found!</div>
            )
        }
      </div>
    </div>
  )
}

export default Accordian

// 18.53