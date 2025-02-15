import { useState } from 'react';
import { Button, Combobox, useCombobox} from '@mantine/core';
import adjustments from '@img/adjustments.svg';

const opt = [
  'Relevance',
  'Most Recent',
  'Salary (Low to High)',
  'Salary (High to Low)'
];

function Sort() {
  const [selectedItem, setSelectedItem] = useState('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption()
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      width={150}
      position='bottom-start'
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <div onClick={()=>combobox.toggleDropdown()} className='cursor-pointer gap-2 text-sm border border-java-400 flex items-center px-2 py-1 rounded-xl'>
          {selectedItem} <img className='h-5 w-5' src={adjustments} alt='' />
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default Sort;
