import React from 'react'
var ShopifyBuy = require('@shopify/buy-button-js')

class Store extends React.Component {
    state = {  }

    componentDidMount() {
        var client = ShopifyBuy.buildClient({
            domain: 'subtleorange.myshopify.com',
            storefrontAccessToken: '24113dd2db4c23c1c4518123e7f40d40', // previously apiKey, now deprecated
        });

        var ui = ShopifyBuy.UI.init(client);

        ui.createComponent('collection', {
            id: 235486675101,
            node: document.getElementById('my-collection')
          });

    }

    render() { 
        return ( 
            <div id="my-collection">Store</div>
         );
    }
}
 
export default Store;