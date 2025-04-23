db = db.getSiblingDB('training-node-mongodb');

db.createUser({
  user: 'app-user',
  pwd: 'app-passw0rd',
  roles: [
    {
      role: 'readWrite',
      db: 'training-node-mongodb'
    }
  ]
}); 