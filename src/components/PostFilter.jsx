import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return ( 
        <div>
        <MyInput
          placeholder='Search...'
          value={filter.query}
          onChange={event => setFilter({...filter, query: event.target.value})}
        />

        <MySelect
          defaultValue={'Сортировка по'}
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
          value={filter.sort}
          onChange={ selectedSort => setFilter({...filter, sort: selectedSort}) }
        />
      </div>
     );
}
 
export default PostFilter;