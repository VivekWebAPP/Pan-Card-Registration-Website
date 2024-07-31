import express from "express";
import User from '../model/UserModel.js';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { findToken, authorize } from '../middleware/findToken.js';

const router = express.Router();

// Route to create a new user
router.post('/createNewUser', [
    body('pan').isLength({ max: 10 }).isAlphanumeric().withMessage('Enter a valid PanCard Number'),
    body('name').isLength({ max: 140 }).notEmpty().withMessage('Enter a valid Name'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('phone').isLength({ max: 10 }).isNumeric().withMessage('Enter a valid phone Number'),
    body('address').isString().notEmpty().withMessage('Enter a Valid address'),
    body('pincode').isLength({ max: 6 }).isNumeric().withMessage('Enter a Valid Pincode'),
    body('state').isString().notEmpty().withMessage('Enter a valid state'),
    body('city').isString().notEmpty().withMessage('Enter a valid city'),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        const { pan, name, email, phone, address, pincode, state, city,role } = req.body;

        let user = await User.findOne({ pan });

        if (user) {
            return res.status(400).send({ error: 'User Already Exists' });
        }

        user = await User.create({
            pan,
            name,
            email,
            phone,
            address,
            pincode,
            state,
            city,
            role:role==='admin'?'admin':'user',
        });

        const secret = 'VivekIsACollageStudent';

        const data = {
            userId: {
                id: user.id,
                role:user.role
            },
        };

        const jwtToken = jwt.sign(data, secret);

        res.status(200).send({ jwtToken });

    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.post('/verifyTheUser', [
    body('pan').isLength({ max: 10 }).isAlphanumeric().withMessage('Enter a valid pan card number'),
], async (req,res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).send({ error: 'Internal Server Error' });
        }
        const { pan } = req.body;
        const user = await User.findOne({ pan: pan });
        
        if (!user) {
            return res.status(400).send({ error: 'User does not exist' });
        }

        res.status(200).send({ user });

    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})

// Route to view all users (admin only)
router.get('/users', findToken, async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send({users});
    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

// Router to get the user details (individual user)
router.get('/usersDetails', findToken, async (req, res) => {
    try {
        const userId = await req.user;
        if (!userId) {
            return res.status(401).send({ error: 'Unauthorized' });
        }
        const user = await User.findById(userId);
        res.status(200).send({user});
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
})

// Route to view a single user's details (user can view only their details)
router.get('/users/:id', findToken, async (req, res) => {
    try {
        const userId = req.params.id;
        if (req.user.role === 'user' && req.user.toString() !== userId) {
            const Isuser = await User.findById(userId);
            if (!Isuser) {
                return res.status(404).send({ message: 'User not found' });
            }
            const user = {
                name:Isuser.name,
                email:Isuser.email,
                phone:Isuser.phone,
                address:Isuser.address,
                pincode:Isuser.pincode,
                state:Isuser.state,
                city:Isuser.city,
            }
            return res.status(200).send({user});
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({user});
        
    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

// Route to update a user's details (admin can update any user, user can update only their details)
router.put('/users/:id', findToken, async (req, res) => {
    try {
        const userId = req.params.id;
        if (req.userRole === 'user' && req.user.toString() !== userId) {
            return res.status(403).send({ message: 'Forbidden' });
        }

        const { pan, name, email, phone, address, pincode, state, city } = req.body;
        const updatedDetails = {};

        if (pan) updatedDetails.pan = pan;
        if (name) updatedDetails.name = name;
        if (email) updatedDetails.email = email;
        if (phone) updatedDetails.phone = phone;
        if (address) updatedDetails.address = address;
        if (pincode) updatedDetails.pincode = pincode;
        if (state) updatedDetails.state = state;
        if (city) updatedDetails.city = city;

        const user = await User.findByIdAndUpdate(userId, { $set: updatedDetails }, { new: true });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({user});
    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

// Route to delete a user (admin only)
router.delete('/users/:id', findToken, authorize(['admin']), async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User deleted' });
    } catch (error) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

export default router;
