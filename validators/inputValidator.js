function validateInput(data) {
    const { age, symptoms, pain_level, duration_days } = data;

    if (typeof age !== "number" || age <= 0) {
        return "Age must be a positive number.";
    }

    if (typeof symptoms !== "string" || symptoms.trim() === "") {
        return "Symptoms must be a non-empty string.";
    }

    if (typeof pain_level !== "number" || pain_level < 1 || pain_level > 10) {
        return "Pain level must be between 1 and 10.";
    }

    if (typeof duration_days !== "number" || duration_days < 0) {
        return "Duration must be 0 or greater.";
    }

    return null;
}

module.exports = validateInput;
