import jwt from 'jsonwebtoken';

const findToken = async (req,res,next) => {
    try {
        const token = req.header('Auth-Token') || req.header('auth-token');
        if (!token) {
            return res.status(401).send({ message: 'Access denied. No token provided.' });
        }
        const secrete = 'VivekIsACollageStudent';
        const decoded = jwt.verify(token, secrete);
        if(!decoded){
            return res.status(401).send({ message: 'Access denied. Invalid token.' });
        }
        req.user = decoded.userId.id;
        req.userRole = decoded.userId.role;
        console.log(req.userRole);
        next();
    } catch (error) {
        console.log(error.message);
        res.status(400).send({error:'Internal Error Occurred'});
    }
}

// Authorization middleware
const authorize = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.userRole)) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      next();
    };
  };
  
  export { findToken, authorize };

export default findToken;