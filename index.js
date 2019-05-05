
const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

// sync the databasee
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: './franklin.db'
});

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* Users table API
  supports GET    /        - all users
           GET    /:id     - get user by id
           POST   /        - post new user from body
           PUT    /:id     - update user by id 
           DELETE /:id     - delete by id 
*/
// GET Users
app.get('/api/user', (req, res) => {
  return sequelize.query('SELECT * FROM users').then(result => {
    res.send(result[0]);
  })
});

// GET User by Id
app.get('/api/user/:id', (req, res) => {
  return sequelize.query(`SELECT * FROM users WHERE id=${req.params.id}`).then(result => {
    res.send(result[0]);
  })
});

// POST User
app.post('/api/user', (req, res) => {
  return sequelize.query(`INSERT INTO users (name)
                          VALUES (${req.body.name})`).then(result => {
    res.send(result[0])
  })

});

// PUT User by Id
app.put('/api/user/:id', (req, res) => {
  return sequelize.query(`UPDATE users
                          SET name = ${req.body.name}
                          WHERE id = ${req.params.id}`).then(result => {
    res.send('Succesful PUT')
  });
});

// Delete User by Id
app.delete('/api/user/:id', (req, res) => {
  return sequelize.query(`DELETE FROM users
                          WHERE id = ${req.params.id}`).then(result => {
    res.send('Succesful Delete')
  });
});

/* Items table API
  supports GET    /        - all users
           GET    /:id     - get user by id
           POST   /        - post new user from body
           PUT    /:id     - update user by id 
           DELETE /:id     - delete by id 
*/

// GET all Items
app.get('/api/item', (req, res) => {
  return sequelize.query('SELECT * FROM items').then(result => {
    res.send(result[0]);
  })
});

// GET Item by Id
app.get('/api/item/:id', (req, res) => {
  return sequelize.query(`SELECT * FROM items WHERE id=${req.params.id}`).then(result => {
    res.send(result[0]);
  })
});

// POST to Item
app.post('/api/item', (req, res) => {
  return sequelize.query(`INSERT INTO items (name)
                          VALUES (${req.body.name})`).then(result => {
    res.send(result[0])
  })

});

// PUT an Item by Id
app.put('/api/item/:id', (req, res) => {
  return sequelize.query(`UPDATE items
                          SET name = ${req.body.name}
                          WHERE id = ${req.params.id}`).then(result => {
    res.send(result[0])
  });
});

// Delete a item
app.delete('/api/item/:id', (req, res) => {
  return sequelize.query(`DELETE FROM items
                          WHERE id = ${req.params.id}`).then(result => {
    res.send(result[0])
  });
});

/* Orders table API
  supports GET    /        - all orders
           GET    /:id     - get order by id
           POST   /        - post new order from body
           PUT    /:id     - update order by id 
           DELETE /:id     - delete by id 
*/

// GET all Orders
app.get('/api/order', (req, res) => {
  return sequelize.query('SELECT * FROM orders').then(result => {
    res.send(result[0]);
  })
});

// GET Order by Id
app.get('/api/order/:id', (req, res) => {
  return sequelize.query(`SELECT * FROM orders WHERE id=${req.params.id}`).then(result => {
    res.send(result[0]);
  })
});

// POST to Order
app.post('/api/order', (req, res) => {
  return sequelize.query(`INSERT INTO orders (user_id)
                          VALUES (${req.body.user_id})`).then(result => {
    res.send(result[0])
  })

});

// PUT an Order by Id
app.put('/api/order/:id', (req, res) => {
  return sequelize.query(`UPDATE orders
                          SET user_id = ${req.body.user_id}
                          WHERE id = ${req.params.id}`).then(result => {
    res.send(result[0])
  });
});

// Delete an order by Id
app.delete('/api/order/:id', (req, res) => {
  return sequelize.query(`DELETE FROM orders
                          WHERE id = ${req.params.id}`).then(result => {
    res.send(result[0])
  });
});

/* Orders-items table API
  supports GET    /        - all orders
           GET    /order/:order_id     - get order by id
           POST   /        - post new order from body
           PUT    /:id     - update order by id 
           DELETE /:id     - delete by id 
*/
// GET all Orders-Items
app.get('/api/order_item', (req, res) => {
  return sequelize.query('SELECT * FROM order_items').then(result => {
    res.send(result[0]);
  })
});

// GET Order-Item by Order Id
app.get('/api/order_item/order/:order_id', (req, res) => {
  return sequelize.query(`SELECT * FROM order_items 
                          WHERE order_id = ${req.params.order_id}`
                        ).then(result => {
    res.send(result[0]);
  })
});

// GET Order-Item by Item Id
app.get('/api/order_item/item/:item_id', (req, res) => {
  return sequelize.query(`SELECT * FROM order_items 
                          WHERE item_id = ${req.params.item_id}`
                        ).then(result => {
    res.send(result[0]);
  })
});

// POST to Order
app.post('/api/order_item', (req, res) => {
  return sequelize.query(`INSERT INTO order_items (order_id, item_id)
                          VALUES (${req.body.order_id}, ${req.body.item_id})`).then(result => {
    res.send(result[0])
  })
});

// Delete an order by Id
app.delete('/api/order_item/:order_id', (req, res) => {
  return sequelize.query(`DELETE FROM order_items
                          WHERE order_id = ${req.params.order_id}`).then(result => {
    res.send(result[0])
  });
});


app.listen(3000, () => console.log(`listening on port 3000!`));


