import React, { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
  },
}));

const getProducts = ({ arrivingType }) => [
  { name: 'Product 1', description: 'Product 1 description', price: '10.00' },
  { name: 'Product 2', description: 'Product 2 description', price: '5.50' },
  { name: 'Product 3', description: 'Product 4 description', price: '20.99' },
  { name: 'Shipping', description: arrivingType, price: '0.00' },
];

const getTotalAmount = (values) => getProducts(values).reduce(
  (total, { price }) => total + Number(price), 0,
).toFixed(2);

const getAddressData = ({
  address,
  city,
  state,
  postalCode,
  country,
}) => [address, city, state, postalCode, country].join(', ');

const getPaymentsData = ({ cardHolder, cardNumber, expiryDate }) => [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: cardHolder },
  { name: 'Card number', detail: cardNumber },
  { name: 'Expiry date', detail: expiryDate },
];

const OrderSummary = ({ values }: any): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <List>
        {getProducts(values).map(({ name, description, price }) => (
          <ListItem key={name} className={classes.listItem}>
            <ListItemText primary={name} secondary={description} />
            <Typography variant="body2">
              $
              {price}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $
            {getTotalAmount(values)}
          </Typography>
        </ListItem>
      </List>

      <Divider />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}> Shipping </Typography>
          <Typography gutterBottom>
            {values.firstName}
            {' '}
            {values.lastName}
          </Typography>
          <Typography gutterBottom>{getAddressData(values)}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}> Payment details </Typography>
          <Grid container>
            {getPaymentsData(values).map(({ name, detail }) => (
              <Fragment key={name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{detail}</Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

OrderSummary.title = 'Order Summary';
OrderSummary.initialValues = {};
OrderSummary.validationSchema = Yup.object({});

export default OrderSummary;
