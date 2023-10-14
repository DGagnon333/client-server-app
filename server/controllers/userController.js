const db = require('../db/db-access');

// Get all users
const getAllUsers = async (req, res) => {
    try {
      db.all('SELECT * FROM users', (err, users) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.json(users);
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

// Get a specific user by ID
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        db.get('SELECT * FROM users WHERE id = ?', [userId], (err, user) => {
            if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            } else if (!user) {
            res.status(404).send('User not found');
            } else {
            res.json(user);
            }
        });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

// Create a new user
const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email } = req.body;

        db.run('INSERT INTO users (username, email) VALUES (?, ?)', [username, email], function (err) {
            if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            } else {
            db.get('SELECT * FROM users WHERE id = ?', [this.lastID], (err, user) => {
                if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                } else {
                res.json(user);
                }
            });
            }
        });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  

// Update a user by ID
const updateUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email } = req.body;

      db.run('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, userId], function (err) {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        } else if (this.changes === 0) {
          res.status(404).send('User not found');
        } else {
          db.get('SELECT * FROM users WHERE id = ?', [userId], (err, user) => {
            if (err) {
              console.error(err);
              res.status(500).send('Internal Server Error');
            } else {
              res.json(user);
            }
          });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

// Delete a user by ID
const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id;

        db.get('SELECT * FROM users WHERE id = ?', [userId], (err, user) => {
            if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            } else if (!user) {
            res.status(404).send('User not found');
            } else {
            db.run('DELETE FROM users WHERE id = ?', [userId], (err) => {
                if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                } else {
                res.json(user);
                }
            });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
