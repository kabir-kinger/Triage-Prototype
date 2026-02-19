const express = require("express");
const router = express.Router();

const validateInput = require("../validators/inputValidator");
const evaluateTriage = require("../services/decisionEngine");

router.post("/triage-evaluation", (req, res) => {
    const error = validateInput(req.body);

    if (error) {
        return res.status(400).json({ 
            error: error,
        disclaimer: "Invalid input. This prototype does not provide medical advice."
    });
    }

    const result = evaluateTriage(req.body);

    return res.status(200).json(result);
});

module.exports = router;
