import React from 'react';
import { Trash2, Pencil } from 'lucide-react';

const Item = (props) => {

  return (
    <div className='mx-3 my-5 p-6 flex  justify-between item-center  bg-white rounded-xl text-gray-500'>

        <div className='flex gap-4 items-center w-[75%]'>
             <input type="checkbox" checked={props.data.checked}
        onChange={props.onToggle} className='w-6 h-6 accent-violet-500 cursor-pointer '/>
             <span className="break-words whitespace-normal w-full text-l" >{props.data.text}</span>
        </div>

        <div className='flex gap-3 ml-3'>
            <Pencil onClick={props.onChange} className='hover:text-blue-700 cursor-pointer'/>
            <Trash2 onClick={props.onDelete} className='hover:text-blue-700 cursor-pointer'/>
        </div>

    </div>
  );
};

export default Item;