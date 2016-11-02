import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/';
import Link from './Link.jsx'

function mapStateToLinkProps(state, ownProps) {
  return {active: ownProps.filter === state.visibilityFilter};
}
function mapDispatchToLinkProps(dispatch, ownProps) {
  return {
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

export default FilterLink;