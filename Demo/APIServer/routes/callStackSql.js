var callStackSQL = {
    insert:'INSERT INTO callStack(id, callChain, service, serviceType) VALUES(?,?,?,?)',
    queryAll:'SELECT * FROM callStack',
    getUserById:'SELECT * FROM callStack WHERE uid = ? ',
};
module.exports = callStackSQL;
