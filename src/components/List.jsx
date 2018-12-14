import React, { PureComponent } from "react";
import { arrayOf, shape, string } from "prop-types";
import ListItem from "./ListItem";

class List extends PureComponent {
  static propTypes = {
    items: arrayOf(
      shape({
        id: string,
        title: string,
        url: string,
        tags: string
      })
    )
  };

  static defaultProps = {
    items: []
  };

  render() {
    const { items, remove, edit, allVideos } = this.props;
    const list = items.map(item => (
      <ListItem key={item.id} {...item} removeVideo={remove} editVideo={edit} />
    ));

    return (
      <ul>
        <p>
          Videos: {items.length}/{allVideos}
        </p>
        {list}
      </ul>
    );
  }
}

export default List;
