import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        name="filter"
        type="text"
        placeholder="Name"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};