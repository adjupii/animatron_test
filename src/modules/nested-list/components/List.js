import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data }) => {
  return (
    <ul>
      {
        Object.keys(data).map(key => {
          return (
            <li key={key}>
              {key}
              {Object.keys(data[key]).length > 1 && <List data={data[key]} />}
            </li>
          );
        })
      }
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.object
};

export default List;