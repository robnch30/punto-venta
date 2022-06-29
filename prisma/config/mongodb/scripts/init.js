rs.status();
db.createUser({user: 'admin', pwd: 'R30Nchimal', roles: [ { role: 'root', db: 'admin' } ]});