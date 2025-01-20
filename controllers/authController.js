const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register new user
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await User.create({ name, email, password: bcrypt.hashSync(password, 10) });
        res.status(201).json({
            success: true,
            message: 'User created'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Login user
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || passwor !== user.password) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({
            success: true,
            message: "login successfull",
            token: token
        });
    } catch (error) {
      return  res.status(500).json({
            success: true,
            message: error.message
        });
    }
}

module.exports = {
    register,
    login
}