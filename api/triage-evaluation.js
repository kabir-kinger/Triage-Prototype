export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const DISCLAIMER =
        "This is a decision-support prototype and not a medical diagnosis.";

    const { age, symptoms, pain_level, duration_days } = req.body;

    if (!age || !symptoms || !pain_level || duration_days === undefined) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const symptomText = symptoms.toLowerCase();

    const criticalKeywords = [
        "chest pain",
        "severe bleeding",
        "heart attack",
        "stroke",
        "unconscious"
    ];

    const hasCriticalSymptom = criticalKeywords.some(keyword =>
        symptomText.includes(keyword)
    );

    const extremePain = pain_level >= 8;
    const suddenSeverePain = duration_days === 0 && pain_level >= 9;

    if (hasCriticalSymptom || extremePain || suddenSeverePain) {
        return res.status(200).json({
            urgency: "Emergency",
            recommended_action: "Visit emergency department immediately.",
            reasoning: "Emergency rule triggered.",
            disclaimer: DISCLAIMER
        });
    }

    if (
        (symptomText.includes("fever") && duration_days > 3) ||
        (pain_level >= 5 && pain_level <= 7)
    ) {
        return res.status(200).json({
            urgency: "Same-Day",
            recommended_action: "Schedule same-day consultation.",
            reasoning: "Moderate symptoms detected.",
            disclaimer: DISCLAIMER
        });
    }

    return res.status(200).json({
        urgency: "Routine",
        recommended_action: "Schedule routine appointment.",
        reasoning: "Symptoms classified as mild.",
        disclaimer: DISCLAIMER
    });
}
