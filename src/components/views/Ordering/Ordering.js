import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails, 
  Button, 
  TableContainer, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell, 
  Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PUBLIC_URL } from '../../../settings';
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
  },
  {
    id: 2,
    tableId: 2,
  },
  {
    id: 3,
    tableId: 3,
  },
];

function TablePanel({id, orders}) {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        className={styles.header}
      >
        <Typography>Table #{id}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              <Link className={styles.link} to={`${PUBLIC_URL}/ordering/new?id=${id}`}>New Order</Link>            
            </Button>
          </Grid>
          <Grid>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Created at</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Sum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map(order => (
                    <TableRow key={order.id}>
                      <TableCell component="th" scope="row">
                        {order.id}
                      </TableCell>
                      <TableCell align="right">{order.id}</TableCell>
                      <TableCell align="right">{order.id}</TableCell>
                      <TableCell align="right">{order.id}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
       
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

TablePanel.propTypes = {
  id: PropTypes.number.isRequired,
  orders: PropTypes.array.isRequired,
};

function Ordering({tables, orders}) {
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
              orders={orders.filter(order => order.tableId === table.id)}
            />
          )
          }
        </Grid>
      </Grid>
      <Link to="/ordering/new/">Make new order</Link>
      <Link to="/ordering/order/nice-order">Nice order</Link>
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
};

export default Ordering;
