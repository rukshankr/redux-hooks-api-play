import React from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { AppStore, Product } from '../types';
import { actions } from '../actions/constants';

// TODO Fix all the types. 
const mapStateToProps = (state: AppStore) => ({
  products: state.productsModule.products
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (product: Product) => dispatch({ type: actions.ADD_TO_CART, payload: product })
  }
}

const ProductListContainer: React.FC = (props: any) => {
  const { products } = props;
  return (
    <>
      <h1>This is the tried and trusty connect</h1>
      <div>
        {
          products.map((product: Product) => {
            return (
              <ProductItem product={product} key={product.id} dispatchToStore={props.addItem} />
            )
          })
        }
      </div>
      <hr></hr>
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
