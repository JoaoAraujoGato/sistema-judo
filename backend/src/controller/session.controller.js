const Firebase = require('../utils/firebase');
const SenseiModel = require("../models/sensei.model");
const jwt = require('jsonwebtoken');

module.exports = {
    async signIn(req, res) {
        try {
            const { email, senha } = req?.body;

            let firebaseId;
            try {
                firebaseId = await Firebase.login(email, senha);
            } catch (error) {
                console.warn(error);
                return res.status(403).json({ notification: "Invalid credentials"});
            }

            const sensei = await SenseiModel.getByFields({firebase_id: firebaseId});

            const accessToken = jwt.sign({sensei}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });

            return res.status(200).json({sensei, accessToken});
        } catch (error) {
            console.warn(error);
            return res.status(500).json({ message: "Error while trying to validade credentials"});
        }
    }
}