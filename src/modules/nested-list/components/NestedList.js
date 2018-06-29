import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

const NestedList = ({
  data
}) => {
  return (
    Object.keys(data).length ?
      <List data={data} />
      : <div>List is empty</div>
  );
};

NestedList.propTypes = {
  data: PropTypes.object
};

export default NestedList;