import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getNestedListData } from '../actions';
import { getNestedList } from '../selectors';

import NestedList from '../components/NestedList';

class NestedListContainer extends Component {
  componentWillMount() {
    const { getNestedListData } = this.props;

    getNestedListData();
  }

  render() {
    const { fetching, data } = this.props;

    return (
      fetching ?
        <span>Loading...</span> :
        data ?
          <NestedList data={data} /> :
          null
    )
  }
}

NestedListContainer.propTypes = {
  data: PropTypes.object,
  fetching: PropTypes.bool,
  getNestedListData: PropTypes.func
};

const mapStateToProps = state => ({
  data: getNestedList(state),
  fetching: state.categories.fetching
});

const mapDispatchToProps = dispatch => ({
  getNestedListData: bindActionCreators(getNestedListData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NestedListContainer);