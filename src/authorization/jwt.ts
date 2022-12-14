import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

const tokenGenerator = (payload: string) => jwt
  .sign({ payload }, secret as string, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

// const tokenVerify = (authorization) => {
//   try {
//     const payload = jwt.verify(authorization, secret);
//     return { type: null, message: payload };
//   } catch (error) {
//     return { type: 401, message: 'Expired or invalid token' };
//   }
// }; 

// const tokenDecode = (authorization) => {
//   const { data } = jwt.decode(authorization);
//   return data.id;
// };

export {
  tokenGenerator,
  // tokenVerify,
  // tokenDecode,
};
