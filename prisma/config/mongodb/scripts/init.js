rs.status();
db.createUser({user: 'admin', pwd: 'R30nchimal', roles: [ { role: 'root', db: 'admin' } ]});