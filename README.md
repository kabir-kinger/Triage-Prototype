# AI Healthcare Appointment Triage Prototype

## Overview

This project is a rapid prototype of a symptom-based healthcare triage system designed to simulate early-stage patient urgency classification before clinical scheduling.

The objective of this MVP is to demonstrate structured product thinking, decision-engine design, technical feasibility analysis, and API-driven architecture for healthcare workflows.

---

## Problem Statement

Healthcare clinics often face delays in patient scheduling due to lack of structured pre-assessment systems. Manual triage increases operational overhead and may delay urgent cases.

This MVP demonstrates how a rule-based urgency classification system can assist clinics in prioritizing patient appointments.

---

## MVP Scope

The current version includes:

- Symptom input form
- Pain level (1–10 scale)
- Duration of symptoms
- Age input
- Rule-based urgency classification:
  - Emergency
  - Same-Day Appointment
  - Routine Scheduling
- Input validation and boundary handling
- Mock REST API contract (JSON format)
- QA test case documentation

---

## Tech Stack (Planned / In Progress)

- Frontend: React (AI-assisted development)
- Logic Layer: Rule-based decision engine
- API Design: Mock REST endpoints (JSON)
- Deployment: Vercel (Planned)
- Documentation: Structured PRD + QA test cases

---

## Decision Engine Logic Hierarchy
The triage engine follows a strict rule precedence to ensure deterministic and explainable outputs:

1. Emergency Rules Evaluated First
-Critical symptom keywords (e.g., chest pain, severe bleeding)
-High pain threshold (≥ 8)
-Sudden severe pain (duration = 0 with pain ≥ 9)

2. Same-Day Rules Evaluated Second
-Fever lasting more than 3 days
-Moderate pain levels (5–7)

3. Routine Fallback
-Mild symptoms
-Pain levels between 1–4
-Short symptom duration

This structured evaluation ensures:
-Deterministic classification
-Clear explainability
-Simplified QA coverage
-Reduced ambiguity in urgency determination


## API Contract (Mock)

### POST /triage-evaluation

Request:

{
  "age": 45,
  "symptoms": "chest pain",
  "pain_level": 8,
  "duration_days": 1
}

Response:

{
  "urgency": "Emergency",
  "recommended_action": "Visit emergency department immediately"
}

---

## Validation & Edge Cases

- Missing input fields
- Invalid pain level (outside 1–10 range)
- Negative duration values
- Boundary thresholds
- Symptom ambiguity

---

## QA & Testing

Structured test scenarios cover:

- Accuracy of urgency classification
- Logical consistency
- Incorrect input handling
- Boundary condition testing
- Risk disclaimer validation

---

## Compliance Considerations

Although this MVP is rule-based and educational, real-world implementation would require:

- HIPAA/GDPR compliance
- Medical validation
- Audit logging
- Clinical approval
- Risk disclaimers

---

## System Architecture (MVP)

User Input (Frontend Form)
        ↓
Rule-Based Triage Engine
        ↓
Urgency Classification Output
        ↓
Recommended Scheduling Action

Future Architecture:
Frontend → Backend API → Triage Engine → Database → Audit Logs

---

## Scalability Roadmap

Future improvements may include:

- ML-based triage recommendations
- EHR integration
- Authentication and user profiles
- Real-time clinician dashboard
- Appointment booking integration

---

## Status

🚧 MVP under active development. Core logic and documentation completed.
