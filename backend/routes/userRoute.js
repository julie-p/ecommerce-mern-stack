import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();

router.get('/createadmin', async (req, res) => {
    try {
        const user = new User({ 
            email: '****@gmail.com',
            password: '****',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({ msg: error.message });
    };
});

router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({ 
        email: req.body.email,
        password: req.body.password
    });

    if (signinUser) {
        res.send({ 
            _id: signinUser._id,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    } else {
        res.status(401).send({ msg: 'Invalid email or password' });
    }
});

router.post('/signup', async (req, res) => {
    const user = new User({ 
        email: req.body.email, 
        password: req.body.password
    });

    const newUser = await user.save();

    if (newUser) {
        res.send({
            _id: newUser._id,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    } else {
        res.status(401).send({ msg: 'Invalid email or password' });
    };
});

export default router;