import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

type Token = {
  id: number,
  username: string,
};

const tokenGenerator = (id: number, username: string) => jwt
  .sign({ id, username }, secret as string, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

const tokenVerify = (authorization: string) => {
  try {
    const payload = jwt.verify(authorization, secret as string);
    return payload as Token; 
  } catch (error) {
    const payload: Token = {
      id: 0,
      username: 'Invalid',
    };
    return payload;
  }
}; 

// const tokenDecode = (authorization) => {
//   const { data } = jwt.decode(authorization);
//   return data.id;
// };

export default {
  tokenGenerator,
  tokenVerify,
  // tokenDecode,
};
