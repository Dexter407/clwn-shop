import "./shop.styles.scss";
import React from "react"
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-review.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections.map(({id, ...otherCollectionsProps}) => (
          <CollectionPreview key={id} {...otherCollectionsProps}  />
        ))}
      </div>
    )
  }
}

export default ShopPage;
