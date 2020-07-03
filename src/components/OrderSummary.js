import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

const products = [
  { name: 'Product 1', desc: 'Product 1 description', price: '$10.00' },
  { name: 'Product 2', desc: 'Product 2 description', price: '$5.50' },
  { name: 'Product 3', desc: 'Product 4 description', price: '$20.00' },
  { name: 'Shipping', desc: 'Express', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

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

export default () => {
  const classes = useStyles();

  return (
    <>
      <List>
        {products.map(({ name, desc, price }) => (
          <ListItem key={name} className={classes.listItem}>
            <ListItemText primary={name} secondary={desc} />
            <Typography variant="body2">{price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}> $35.50 </Typography>
        </ListItem>
      </List>

      <Divider />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}> Shipping </Typography>
          <Typography gutterBottom> John Smith </Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}> Payment details </Typography>
          <Grid container>
            {payments.map(({ name, detail }) => (
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
