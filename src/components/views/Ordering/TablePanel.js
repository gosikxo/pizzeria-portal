import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Typography,
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

function TablePanel({ id, orders, goToOrder, deliverOrder }) {
  return (
    <ExpansionPanel elevation={5}>
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
            {orders.length > 0 &&
              <TableContainer className={styles.table}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Created at</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Sum</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map(order => (
                      <TableRow className={`${styles.row} ${order.status === 'ready' ? styles.ready : ' '}`} hover key={order.id}>
                        <TableCell component="th" scope="row" onClick={() => goToOrder(order.id)}>
                          {order.id}
                        </TableCell>
                        <TableCell align="right" onClick={() => goToOrder(order.id)}>{order.id}</TableCell>
                        <TableCell align="right" onClick={() => goToOrder(order.id)}>{order.status}</TableCell>
                        <TableCell align="right" onClick={() => goToOrder(order.id)}>{order.sum}</TableCell>
                        <TableCell align="right">{order.status === 'ready' && <Button size="small" color="primary" onClick={() => deliverOrder(order.id)}>Deliver order</Button>}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            }
          </Grid>
        </Grid>

      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

TablePanel.propTypes = {
  id: PropTypes.number.isRequired,
  orders: PropTypes.array.isRequired,
  goToOrder: PropTypes.func.isRequired,
  deliverOrder: PropTypes.func.isRequired,
};

export default TablePanel;