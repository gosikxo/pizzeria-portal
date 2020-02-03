import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import TablePanel from './TablePanel';
import styles from './Ordering.module.scss';

const tables = [
  {
    id: 1, 
  },
  {
    id: 2, 
  },
  {
    id: 3, 
  },
];

const orders = [
  {
    id: 1,
    tableId: 1,
    status: 'ready',
    sum: 112.1,
  },
  {
    id: 2,
    tableId: 2,
    status: 'delivered',
    sum: 10.5,
  },
  {
    id: 3,
    tableId: 3,
    status: 'done',
    sum: 20.5,
  },
];


function filterOrders(orders, table) {
  return orders.filter(order => order.tableId === table.id && order.status !== 'done' && order.status !== 'cancelled');
}

function Ordering({tables, orders, history}) {
  return (
    <div className={styles.component}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
      Ordering
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {tables.map(table => 
            <TablePanel 
              {...table} 
              key={table.id} 
              orders={filterOrders(orders, table)}
              goToOrder={(id) => { history.push(`/ordering/${id}`);}}
              deliverOrder={(orderId) => { window.alert(`Order ${orderId} delivered mocked`); }}
            />
          )
          }
        </Grid>
      </Grid>
    </div>
  );
}

Ordering.defaultProps = {
  tables: tables,
  orders: orders,
};

Ordering.propTypes = {
  tables: PropTypes.array,
  orders: PropTypes.array,
  history: PropTypes.object,
};

export default Ordering;
