import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';

class NewOrder extends React.Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    products: PropTypes.array,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.any,
    }),
  }

  componentDidMount(){
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { loading: { active, error }, products } = this.props;

    const Wrapper = props => (
      <div className={styles.component}>
        <h2>NewOrder view</h2>
        {props.children}
      </div>
    );

    if(active || !products.length){
      return (
        <Wrapper>
          <p>Loading...</p>
        </Wrapper>
      );
    } else if(error) {
      return (
        <Wrapper>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <ul>
            {products.map(({id, name, price}) => (
              <li key={id}>{name}, {price}</li>
            ))}
          </ul>
        </Wrapper>
      );
    }
  }
}

export default NewOrder;