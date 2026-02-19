function evaluateTriage(data) {

    const DISCLAIMER =
        "This is a decision-support prototype and not a medical diagnosis.";

    const { symptoms, pain_level, duration_days } = data;
    const symptomText = symptoms.toLowerCase();

    // --- Emergency Rules ---
    const hasCriticalSymptom =
        symptomText.includes("chest pain") ||
        symptomText.includes("severe bleeding")||
         symptomText.includes("heart attack") ||
    symptomText.includes("stroke") ||
    symptomText.includes("unconscious");

    const extremePain = pain_level >= 8;

    const suddenSeverePain =
        duration_days === 0 && pain_level >= 9;

    if (hasCriticalSymptom || extremePain || suddenSeverePain) {

        let reasoning;

        if (hasCriticalSymptom) {
            reasoning = "Critical symptom detected.";
        } else if (extremePain) {
            reasoning = "High pain level detected (≥ 8).";
        } else {
            reasoning = "Sudden severe pain reported on same day.";
        }

        return {
            urgency: "Emergency",
            recommended_action: "Visit emergency department immediately.",
            reasoning: reasoning,
            disclaimer: DISCLAIMER
        };
    }

    // --- Same-Day Rules ---
    const prolongedFever =
        symptomText.includes("fever") && duration_days > 3;

    const moderatePain =
        pain_level >= 5 && pain_level <= 7;

    if (prolongedFever || moderatePain) {
        return {
            urgency: "Same-Day",
            recommended_action: "Schedule same-day consultation.",
            reasoning: "Moderate symptoms requiring prompt clinical review.",
            disclaimer: DISCLAIMER
        };
    }

    // --- Routine Fallback ---
    return {
        urgency: "Routine",
        recommended_action: "Schedule routine appointment.",
        reasoning: "Symptoms classified as mild based on rule evaluation.",
        disclaimer: DISCLAIMER
    };
}

module.exports = evaluateTriage;
