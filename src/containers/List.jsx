import { connect } from "react-redux";
import List from "../components/List";

import { filteredVideos } from "../selectors";
import { removeVideo } from "../reducers/videos";
import { editVideo } from "../reducers/videos";

const mapStateToProps = state => ({
  items: filteredVideos(state),
  allVideos: state.videos.length
});

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeVideo(id)),
    edit: (id, newTitle, newTags) => dispatch(editVideo(id, newTitle, newTags))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
