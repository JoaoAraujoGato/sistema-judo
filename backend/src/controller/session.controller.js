const Firebase = require('../utils/firebase');
const SenseiModel = require("../models/sensei.model");
const jwt = require('jsonwebtoken');

module.exports = {
    async signIn(req, res) {
        try {
            const { email, senha } = req?.body;

            let firebaseId;
            try {
                const user = await Firebase.login(email, senha);
                firebaseId = user?.uid;
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
    },
    async forgotPassword(req, res) {
        try {
            const { email } = req.body;

            const result = await Firebase.resetPassword(email);

            if (result.success) {
                return res.status(200).json({ message: result.message });
            } else {
                return res.status(400).json({ message: result.message });
            }
        } catch (error) {
            console.warn(error);
            return res.status(500).json({ message: "Erro ao tentar recuperar a senha" });
        }
    }
}