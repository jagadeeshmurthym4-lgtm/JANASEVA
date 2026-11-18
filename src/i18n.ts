import { useLayoutEffect } from "react";

export type Language = "kn" | "en" | "hi";

type Dictionary = Record<string, string>;

const kn: Dictionary = {
  "Government schemes, made simple.": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಸರಳವಾಗಿ.",
  "An independent concept project": "ಸ್ವತಂತ್ರ ಪರಿಕಲ್ಪನಾ ಯೋಜನೆ",
  "WELCOME TO JANASEVA": "ಜನಸೇವೆಗೆ ಸ್ವಾಗತ",
  "Your benefits.": "ನಿಮ್ಮ ಸೌಲಭ್ಯಗಳು.",
  "Your language.": "ನಿಮ್ಮ ಭಾಷೆ.",
  "Discover government schemes, check eligibility and understand how to apply.":
    "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ, ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿಧಾನವನ್ನು ತಿಳಿಯಿರಿ.",
  "Choose your preferred language": "ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
  "Get Started": "ಪ್ರಾರಂಭಿಸಿ",
  "You can change your language anytime.": "ನೀವು ಯಾವಾಗ ಬೇಕಾದರೂ ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಬಹುದು.",
  "A friendly illustration of Indian citizens using a public service on a phone":
    "ಫೋನ್‌ನಲ್ಲಿ ಸಾರ್ವಜನಿಕ ಸೇವೆ ಬಳಸುತ್ತಿರುವ ಭಾರತೀಯ ನಾಗರಿಕರ ಸ್ನೇಹಪರ ಚಿತ್ರ",
  "Namaste! Welcome back.": "ನಮಸ್ಕಾರ! ಮತ್ತೆ ಸ್ವಾಗತ.",
  "Find government schemes": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
  "Search schemes by name or category": "ಹೆಸರು ಅಥವಾ ವರ್ಗದ ಮೂಲಕ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
  "PERSONALISED FOR YOU": "ನಿಮಗಾಗಿ ವೈಯಕ್ತೀಕರಿಸಲಾಗಿದೆ",
  "Find schemes you’re eligible for": "ನೀವು ಅರ್ಹರಾಗಬಹುದಾದ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
  "Answer a few simple questions to discover benefits.":
    "ಸೌಲಭ್ಯಗಳನ್ನು ಕಂಡುಹಿಡಿಯಲು ಕೆಲವು ಸರಳ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.",
  "Check Eligibility": "ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ",
  "BROWSE BY NEED": "ಅಗತ್ಯದ ಪ್ರಕಾರ ವೀಕ್ಷಿಸಿ",
  Categories: "ವರ್ಗಗಳು",
  "View all": "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ",
  "ILLUSTRATIVE CONTENT": "ವಿವರಣಾತ್ಮಕ ವಿಷಯ",
  "Featured schemes": "ವಿಶೇಷ ಯೋಜನೆಗಳು",
  SAMPLE: "ಮಾದರಿ",
  "Sample content for demonstration only. Verify details on official sources before applying.":
    "ಇದು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ ಮಾದರಿ ವಿಷಯ. ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮೊದಲು ಅಧಿಕೃತ ಮೂಲಗಳಲ್ಲಿ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
  Home: "ಮುಖಪುಟ",
  Explore: "ಅನ್ವೇಷಿಸಿ",
  "My Applications": "ನನ್ನ ಅರ್ಜಿಗಳು",
  Profile: "ಪ್ರೊಫೈಲ್",
  Education: "ಶಿಕ್ಷಣ",
  Agriculture: "ಕೃಷಿ",
  Employment: "ಉದ್ಯೋಗ",
  "Women & Child Welfare": "ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಕಲ್ಯಾಣ",
  Healthcare: "ಆರೋಗ್ಯ ಸೇವೆ",
  Housing: "ವಸತಿ",
  "Student scholarship schemes": "ವಿದ್ಯಾರ್ಥಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಯೋಜನೆಗಳು",
  "Explore sample listings for education support and scholarships.":
    "ಶಿಕ್ಷಣ ನೆರವು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನಗಳ ಮಾದರಿ ಪಟ್ಟಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
  "Farmer support schemes": "ರೈತ ಬೆಂಬಲ ಯೋಜನೆಗಳು",
  "Browse illustrative examples of agriculture and farmer services.":
    "ಕೃಷಿ ಮತ್ತು ರೈತ ಸೇವೆಗಳ ವಿವರಣಾತ್ಮಕ ಉದಾಹರಣೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
  "Women welfare schemes": "ಮಹಿಳಾ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು",
  "Discover sample listings focused on women and family welfare.":
    "ಮಹಿಳೆ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಮಾದರಿ ಪಟ್ಟಿಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
  "Check Your Eligibility": "ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
  "Step 1 of 4": "4ರಲ್ಲಿ ಹಂತ 1",
  "TELL US A LITTLE ABOUT YOURSELF": "ನಿಮ್ಮ ಬಗ್ಗೆ ಸ್ವಲ್ಪ ತಿಳಿಸಿ",
  "Let’s find schemes for you": "ನಿಮಗಾಗಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕೋಣ",
  "Answer a few simple questions to discover government schemes that may match your profile.":
    "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ಗೆ ಹೊಂದಬಹುದಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಕಂಡುಹಿಡಿಯಲು ಕೆಲವು ಸರಳ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.",
  "State / Union Territory": "ರಾಜ್ಯ / ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶ",
  "Select where you currently live.": "ನೀವು ಪ್ರಸ್ತುತ ವಾಸಿಸುವ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
  "Select your state or territory": "ನಿಮ್ಮ ರಾಜ್ಯ ಅಥವಾ ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
  States: "ರಾಜ್ಯಗಳು",
  "Union Territories": "ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು",
  "Andhra Pradesh": "ಆಂಧ್ರ ಪ್ರದೇಶ",
  "Arunachal Pradesh": "ಅರುಣಾಚಲ ಪ್ರದೇಶ",
  Assam: "ಅಸ್ಸಾಂ",
  Bihar: "ಬಿಹಾರ",
  Chhattisgarh: "ಛತ್ತೀಸ್‌ಗಢ",
  Goa: "ಗೋವಾ",
  Gujarat: "ಗುಜರಾತ್",
  Haryana: "ಹರಿಯಾಣ",
  "Himachal Pradesh": "ಹಿಮಾಚಲ ಪ್ರದೇಶ",
  Jharkhand: "ಜಾರ್ಖಂಡ್",
  Karnataka: "ಕರ್ನಾಟಕ",
  Kerala: "ಕೇರಳ",
  "Madhya Pradesh": "ಮಧ್ಯ ಪ್ರದೇಶ",
  Maharashtra: "ಮಹಾರಾಷ್ಟ್ರ",
  Manipur: "ಮಣಿಪುರ",
  Meghalaya: "ಮೇಘಾಲಯ",
  Mizoram: "ಮಿಜೋರಾಂ",
  Nagaland: "ನಾಗಾಲ್ಯಾಂಡ್",
  Odisha: "ಒಡಿಶಾ",
  Punjab: "ಪಂಜಾಬ್",
  Rajasthan: "ರಾಜಸ್ಥಾನ",
  Sikkim: "ಸಿಕ್ಕಿಂ",
  "Tamil Nadu": "ತಮಿಳುನಾಡು",
  Telangana: "ತೆಲಂಗಾಣ",
  Tripura: "ತ್ರಿಪುರ",
  "Uttar Pradesh": "ಉತ್ತರ ಪ್ರದೇಶ",
  Uttarakhand: "ಉತ್ತರಾಖಂಡ್",
  "West Bengal": "ಪಶ್ಚಿಮ ಬಂಗಾಳ",
  "Andaman and Nicobar Islands": "ಅಂಡಮಾನ್ ಮತ್ತು ನಿಕೋಬಾರ್ ದ್ವೀಪಗಳು",
  Chandigarh: "ಚಂಡೀಗಢ",
  "Dadra and Nagar Haveli and Daman and Diu": "ದಾದ್ರಾ ಮತ್ತು ನಗರ ಹವೇಲಿ ಮತ್ತು ದಮನ್ ಮತ್ತು ದಿಯು",
  "Delhi (NCT)": "ದೆಹಲಿ (ಎನ್‌ಸಿಟಿ)",
  "Jammu and Kashmir": "ಜಮ್ಮು ಮತ್ತು ಕಾಶ್ಮೀರ",
  Ladakh: "ಲಡಾಖ್",
  Lakshadweep: "ಲಕ್ಷದ್ವೀಪ",
  Puducherry: "ಪುದುಚೇರಿ",
  "Age group": "ವಯೋಮಿತಿ",
  "Select your age group": "ನಿಮ್ಮ ವಯೋಮಿತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
  "Under 18 years": "18 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ",
  "18–24 years": "18–24 ವರ್ಷ",
  "25–39 years": "25–39 ವರ್ಷ",
  "40–59 years": "40–59 ವರ್ಷ",
  "60 years and above": "60 ವರ್ಷ ಮತ್ತು ಮೇಲ್ಪಟ್ಟು",
  Gender: "ಲಿಂಗ",
  "(optional)": "(ಐಚ್ಛಿಕ)",
  Woman: "ಮಹಿಳೆ",
  Man: "ಪುರುಷ",
  "Non-binary": "ದ್ವಿಲಿಂಗೇತರ",
  "Prefer not to say": "ಹೇಳಲು ಇಷ್ಟವಿಲ್ಲ",
  "Annual family income": "ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ",
  "Choose the closest approximate range.": "ಅತ್ಯಂತ ಸಮೀಪದ ಅಂದಾಜು ಶ್ರೇಣಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
  "Below ₹1 lakh": "₹1 ಲಕ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ",
  "₹1–3 lakh": "₹1–3 ಲಕ್ಷ",
  "₹3–6 lakh": "₹3–6 ಲಕ್ಷ",
  "Above ₹6 lakh": "₹6 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು",
  Occupation: "ಉದ್ಯೋಗ",
  Student: "ವಿದ್ಯಾರ್ಥಿ",
  Farmer: "ರೈತ",
  Employee: "ಉದ್ಯೋಗಿ",
  "Self-employed": "ಸ್ವಯಂ ಉದ್ಯೋಗಿ",
  Other: "ಇತರೆ",
  "Your privacy matters.": "ನಿಮ್ಮ ಗೌಪ್ಯತೆ ಮುಖ್ಯ.",
  "Your information is used only to help identify potentially relevant schemes.":
    "ಸಂಭಾವ್ಯವಾಗಿ ಸಂಬಂಧಿತ ಯೋಜನೆಗಳನ್ನು ಗುರುತಿಸಲು ಮಾತ್ರ ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.",
  "Results are suggestions only and do not guarantee eligibility. Always confirm requirements with the official scheme source.":
    "ಫಲಿತಾಂಶಗಳು ಸಲಹೆಗಳು ಮಾತ್ರ; ಅವು ಅರ್ಹತೆಯನ್ನು ಖಾತರಿಪಡಿಸುವುದಿಲ್ಲ. ಅಧಿಕೃತ ಯೋಜನಾ ಮೂಲದಲ್ಲಿ ಅವಶ್ಯಕತೆಗಳನ್ನು ದೃಢೀಕರಿಸಿ.",
  Continue: "ಮುಂದುವರಿಸಿ",
  "Back to Home": "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
  "Profile details saved for the next step.": "ಮುಂದಿನ ಹಂತಕ್ಕಾಗಿ ಪ್ರೊಫೈಲ್ ವಿವರಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ.",
  "Schemes for You": "ನಿಮಗಾಗಿ ಯೋಜನೆಗಳು",
  "YOUR PERSONALISED RESULTS": "ನಿಮ್ಮ ವೈಯಕ್ತೀಕೃತ ಫಲಿತಾಂಶಗಳು",
  "We found schemes for you": "ನಿಮಗಾಗಿ ಯೋಜನೆಗಳನ್ನು ಕಂಡುಕೊಂಡಿದ್ದೇವೆ",
  "Based on the information you provided.": "ನೀವು ನೀಡಿದ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ.",
  Filter: "ಫಿಲ್ಟರ್",
  "Sort:": "ವಿಂಗಡಿಸಿ:",
  Recommended: "ಶಿಫಾರಸು ಮಾಡಿದ",
  "Name A–Z": "ಹೆಸರು ಅ–ಹ",
  Category: "ವರ್ಗ",
  "Filter by category": "ವರ್ಗದ ಪ್ರಕಾರ ಫಿಲ್ಟರ್ ಮಾಡಿ",
  All: "ಎಲ್ಲಾ",
  "Illustrative samples": "ವಿವರಣಾತ್ಮಕ ಮಾದರಿಗಳು",
  "Potential match": "ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆ",
  "View Details": "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
  "These are potential matches, not confirmed eligibility. Final eligibility is determined by the official scheme authority.":
    "ಇವು ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆಗಳು ಮಾತ್ರ, ದೃಢೀಕೃತ ಅರ್ಹತೆ ಅಲ್ಲ. ಅಂತಿಮ ಅರ್ಹತೆಯನ್ನು ಅಧಿಕೃತ ಯೋಜನಾ ಪ್ರಾಧಿಕಾರ ನಿರ್ಧರಿಸುತ್ತದೆ.",
  "ILLUSTRATIVE SAMPLE": "ವಿವರಣಾತ್ಮಕ ಮಾದರಿ",
  "This sample is a potential match only. Check the official scheme source for current requirements and final eligibility.":
    "ಈ ಮಾದರಿ ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆ ಮಾತ್ರ. ಪ್ರಸ್ತುತ ಅವಶ್ಯಕತೆಗಳು ಮತ್ತು ಅಂತಿಮ ಅರ್ಹತೆಗೆ ಅಧಿಕೃತ ಮೂಲವನ್ನು ಪರಿಶೀಲಿಸಿ.",
  "Apply for this scheme": "ಈ ಯೋಜನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
  "Close details": "ವಿವರಗಳನ್ನು ಮುಚ್ಚಿ",
  "Education Scholarship": "ಶಿಕ್ಷಣ ವಿದ್ಯಾರ್ಥಿವೇತನ",
  "Financial assistance for eligible students.": "ಅರ್ಹ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಹಣಕಾಸು ನೆರವು.",
  "Farmer Support Scheme": "ರೈತ ಬೆಂಬಲ ಯೋಜನೆ",
  "Support programmes for eligible farmers.": "ಅರ್ಹ ರೈತರಿಗಾಗಿ ಬೆಂಬಲ ಕಾರ್ಯಕ್ರಮಗಳು.",
  "Women Welfare Scheme": "ಮಹಿಳಾ ಕಲ್ಯಾಣ ಯೋಜನೆ",
  "Explore available welfare benefits.": "ಲಭ್ಯವಿರುವ ಕಲ್ಯಾಣ ಸೌಲಭ್ಯಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
  "Employment Support Programme": "ಉದ್ಯೋಗ ಬೆಂಬಲ ಕಾರ್ಯಕ್ರಮ",
  "Explore illustrative skills and employment support listings.":
    "ಕೌಶಲ್ಯ ಮತ್ತು ಉದ್ಯೋಗ ಬೆಂಬಲದ ವಿವರಣಾತ್ಮಕ ಪಟ್ಟಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
  "Healthcare Assistance Scheme": "ಆರೋಗ್ಯ ನೆರವು ಯೋಜನೆ",
  "Browse sample listings for healthcare support services.": "ಆರೋಗ್ಯ ಬೆಂಬಲ ಸೇವೆಗಳ ಮಾದರಿ ಪಟ್ಟಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
  "Housing Support Scheme": "ವಸತಿ ಬೆಂಬಲ ಯೋಜನೆ",
  "Explore illustrative housing assistance opportunities.": "ವಿವರಣಾತ್ಮಕ ವಸತಿ ನೆರವು ಅವಕಾಶಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
  "Upload Documents": "ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
  "Step 3 of 4": "4ರಲ್ಲಿ ಹಂತ 3",
  "PREPARE YOUR APPLICATION": "ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ",
  "Documents required": "ಅಗತ್ಯ ದಾಖಲೆಗಳು",
  "Upload the documents needed for your selected scheme.":
    "ನೀವು ಆಯ್ಕೆಮಾಡಿದ ಯೋಜನೆಗೆ ಅಗತ್ಯವಾದ ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
  "Prototype upload": "ಮಾದರಿ ಅಪ್‌ಲೋಡ್",
  "Files stay in this browser session and are not submitted to any government department.":
    "ಫೈಲ್‌ಗಳು ಈ ಬ್ರೌಸರ್ ಅವಧಿಯಲ್ಲೇ ಇರುತ್ತವೆ; ಯಾವುದೇ ಸರ್ಕಾರಿ ಇಲಾಖೆಗೆ ಸಲ್ಲಿಸಲಾಗುವುದಿಲ್ಲ.",
  "Accepted: PDF, JPG, PNG": "ಸ್ವೀಕೃತ: PDF, JPG, PNG",
  "Maximum: 5 MB each": "ಗರಿಷ್ಠ: ಪ್ರತಿ ಫೈಲ್‌ಗೆ 5 MB",
  "Aadhaar Card": "ಆಧಾರ್ ಕಾರ್ಡ್",
  "Upload only if the selected scheme specifically requires it.":
    "ಆಯ್ಕೆಮಾಡಿದ ಯೋಜನೆ ನಿರ್ದಿಷ್ಟವಾಗಿ ಕೇಳಿದರೆ ಮಾತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
  "Income Certificate": "ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ",
  "A clear copy of a valid income certificate.": "ಮಾನ್ಯ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ ಸ್ಪಷ್ಟ ಪ್ರತಿ.",
  "Educational Certificate": "ಶೈಕ್ಷಣಿಕ ಪ್ರಮಾಣಪತ್ರ",
  "Your latest relevant marksheet or certificate.": "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ಸಂಬಂಧಿತ ಅಂಕಪಟ್ಟಿ ಅಥವಾ ಪ್ರಮಾಣಪತ್ರ.",
  "Bank Passbook": "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
  "A clear copy of the account details page, if requested.": "ಕೇಳಿದರೆ ಖಾತೆ ವಿವರಗಳ ಪುಟದ ಸ್ಪಷ್ಟ ಪ್ರತಿ.",
  Required: "ಅಗತ್ಯ",
  Optional: "ಐಚ್ಛಿಕ",
  "Upload file": "ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
  "Upload failed": "ಅಪ್‌ಲೋಡ್ ವಿಫಲವಾಗಿದೆ",
  Retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
  Replace: "ಬದಲಿಸಿ",
  Remove: "ತೆಗೆದುಹಾಕಿ",
  "Unsupported format. Choose a PDF, JPG or PNG file.": "ಬೆಂಬಲಿಸದ ಸ್ವರೂಪ. PDF, JPG ಅಥವಾ PNG ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ.",
  "File is larger than the 5 MB limit.": "ಫೈಲ್ 5 MB ಮಿತಿಗಿಂತ ದೊಡ್ಡದಾಗಿದೆ.",
  "Simulating secure upload…": "ಸುರಕ್ಷಿತ ಅಪ್‌ಲೋಡ್ ಮಾದರಿಯನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ…",
  "Ready in this prototype": "ಈ ಮಾದರಿಯಲ್ಲಿ ಸಿದ್ಧವಾಗಿದೆ",
  "Required files are ready for the next prototype step.": "ಮುಂದಿನ ಮಾದರಿ ಹಂತಕ್ಕೆ ಅಗತ್ಯ ಫೈಲ್‌ಗಳು ಸಿದ್ಧವಾಗಿವೆ.",
  "Upload the required sample documents before continuing.":
    "ಮುಂದುವರಿಯುವ ಮೊದಲು ಅಗತ್ಯ ಮಾದರಿ ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
  "Your documents contain personal information. Upload only documents required by the scheme and use secure storage.":
    "ನಿಮ್ಮ ದಾಖಲೆಗಳಲ್ಲಿ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಇದೆ. ಯೋಜನೆಗೆ ಅಗತ್ಯವಾದ ದಾಖಲೆಗಳನ್ನು ಮಾತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಸುರಕ್ಷಿತ ಸಂಗ್ರಹ ಬಳಸಿ.",
  "Save and continue later": "ಉಳಿಸಿ ಮತ್ತು ನಂತರ ಮುಂದುವರಿಸಿ",
  "Progress saved in this browser prototype.": "ಈ ಬ್ರೌಸರ್ ಮಾದರಿಯಲ್ಲಿ ಪ್ರಗತಿಯನ್ನು ಉಳಿಸಲಾಗಿದೆ.",
  "Track your applications": "ನಿಮ್ಮ ಅರ್ಜಿಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
  "Stay updated on your scheme applications.": "ನಿಮ್ಮ ಯೋಜನಾ ಅರ್ಜಿಗಳ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ.",
  "APPLICATION UPDATES": "ಅರ್ಜಿ ನವೀಕರಣಗಳು",
  "ILLUSTRATIVE PROTOTYPE": "ವಿವರಣಾತ್ಮಕ ಮಾದರಿ",
  "This sample does not represent or track a real government application.":
    "ಈ ಮಾದರಿ ನಿಜವಾದ ಸರ್ಕಾರಿ ಅರ್ಜಿಯನ್ನು ಪ್ರತಿನಿಧಿಸುವುದಿಲ್ಲ ಅಥವಾ ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದಿಲ್ಲ.",
  "SAMPLE APPLICATION": "ಮಾದರಿ ಅರ್ಜಿ",
  "Under Verification": "ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ",
  "Illustrative scheme name": "ವಿವರಣಾತ್ಮಕ ಯೋಜನೆಯ ಹೆಸರು",
  "Application ID": "ಅರ್ಜಿ ID",
  Submitted: "ಸಲ್ಲಿಸಲಾಗಿದೆ",
  PROGRESS: "ಪ್ರಗತಿ",
  "Application status": "ಅರ್ಜಿಯ ಸ್ಥಿತಿ",
  "Application Submitted": "ಅರ್ಜಿ ಸಲ್ಲಿಸಲಾಗಿದೆ",
  "Documents Received": "ದಾಖಲೆಗಳು ಸ್ವೀಕೃತವಾಗಿವೆ",
  "Final Decision": "ಅಂತಿಮ ತೀರ್ಮಾನ",
  Completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
  "Current stage": "ಪ್ರಸ್ತುತ ಹಂತ",
  Pending: "ಬಾಕಿ ಇದೆ",
  "Waiting for an update": "ನವೀಕರಣಕ್ಕಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ",
  "SAMPLE RECORD": "ಮಾದರಿ ದಾಖಲೆ",
  "Application details": "ಅರ್ಜಿ ವಿವರಗಳು",
  "Submission date": "ಸಲ್ಲಿಸಿದ ದಿನಾಂಕ",
  "Selected scheme": "ಆಯ್ಕೆಮಾಡಿದ ಯೋಜನೆ",
  "Current status": "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ",
  "Last updated": "ಕೊನೆಯ ನವೀಕರಣ",
  "15 November 2026": "15 ನವೆಂಬರ್ 2026",
  "15 Nov 2026": "15 ನವೆಂಬರ್ 2026",
  "18 November 2026": "18 ನವೆಂಬರ್ 2026",
  "Last updated 18 November 2026": "ಕೊನೆಯ ನವೀಕರಣ 18 ನವೆಂಬರ್ 2026",
  "EXAMPLE ERROR STATE": "ದೋಷ ಸ್ಥಿತಿಯ ಉದಾಹರಣೆ",
  "Action Required": "ಕ್ರಮ ಅಗತ್ಯ",
  "Your uploaded document could not be verified.": "ನೀವು ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ದಾಖಲೆಯನ್ನು ಪರಿಶೀಲಿಸಲಾಗಲಿಲ್ಲ.",
  "Review Document": "ದಾಖಲೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
  "Try Again": "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ",
  "Opening the sample document review flow.": "ಮಾದರಿ ದಾಖಲೆ ಪರಿಶೀಲನಾ ಪ್ರಕ್ರಿಯೆಯನ್ನು ತೆರೆಯಲಾಗುತ್ತಿದೆ.",
  "Verification retry simulated for this prototype.": "ಈ ಮಾದರಿಗಾಗಿ ಮರುಪರಿಶೀಲನೆಯನ್ನು ಅನುಕರಿಸಲಾಗಿದೆ.",
  "Need help with this application?": "ಈ ಅರ್ಜಿಗೆ ಸಹಾಯ ಬೇಕೇ?",
  "Read simple guidance about application steps and document checks.":
    "ಅರ್ಜಿ ಹಂತಗಳು ಮತ್ತು ದಾಖಲೆ ಪರಿಶೀಲನೆಗಳ ಸರಳ ಮಾರ್ಗದರ್ಶನ ಓದಿ.",
  "View application guidance": "ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶನ ವೀಕ್ಷಿಸಿ",
  "For official decisions, refer to the relevant government department.":
    "ಅಧಿಕೃತ ತೀರ್ಮಾನಗಳಿಗಾಗಿ ಸಂಬಂಧಿತ ಸರ್ಕಾರಿ ಇಲಾಖೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
  "PROTOTYPE GUIDANCE": "ಮಾದರಿ ಮಾರ್ಗದರ್ಶನ",
  "Application guidance": "ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶನ",
  "Review status updates carefully, respond only to document requests shown on a verified official source, and keep your application ID private.":
    "ಸ್ಥಿತಿ ನವೀಕರಣಗಳನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಿ, ದೃಢೀಕೃತ ಅಧಿಕೃತ ಮೂಲದ ದಾಖಲೆ ವಿನಂತಿಗಳಿಗೆ ಮಾತ್ರ ಪ್ರತಿಕ್ರಿಯಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಅರ್ಜಿ ID ಅನ್ನು ಗೌಪ್ಯವಾಗಿಡಿ.",
  "This guidance is illustrative. Contact the relevant government department for official help or decisions.":
    "ಈ ಮಾರ್ಗದರ್ಶನ ವಿವರಣಾತ್ಮಕವಾಗಿದೆ. ಅಧಿಕೃತ ಸಹಾಯ ಅಥವಾ ತೀರ್ಮಾನಗಳಿಗಾಗಿ ಸಂಬಂಧಿತ ಸರ್ಕಾರಿ ಇಲಾಖೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ.",
  "Close guidance": "ಮಾರ್ಗದರ್ಶನ ಮುಚ್ಚಿ",
  "Your preferences": "ನಿಮ್ಮ ಆದ್ಯತೆಗಳು",
  "Your selected language is kept as you move through the prototype.":
    "ನೀವು ಮಾದರಿಯಲ್ಲಿ ಸಾಗುವಾಗ ಆಯ್ಕೆಮಾಡಿದ ಭಾಷೆಯನ್ನು ಉಳಿಸಲಾಗುತ್ತದೆ.",
  "Preferred language": "ಆದ್ಯತೆಯ ಭಾಷೆ",
  "Close profile": "ಪ್ರೊಫೈಲ್ ಮುಚ್ಚಿ",
  "Open profile": "ಪ್ರೊಫೈಲ್ ತೆರೆಯಿರಿ",
  "Go back": "ಹಿಂತಿರುಗಿ",
  "Main navigation": "ಮುಖ್ಯ ಸಂಚರಣೆ",
  "Janaseva home dashboard": "ಜನಸೇವಾ ಮುಖಪುಟ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
  "Janaseva eligibility checker": "ಜನಸೇವಾ ಅರ್ಹತಾ ಪರಿಶೀಲಕ",
  "Janaseva scheme discovery results": "ಜನಸೇವಾ ಯೋಜನೆ ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳು",
  "Janaseva document upload": "ಜನಸೇವಾ ದಾಖಲೆ ಅಪ್‌ಲೋಡ್",
  "Janaseva application tracking": "ಜನಸೇವಾ ಅರ್ಜಿ ಟ್ರ್ಯಾಕಿಂಗ್",
  "Eligibility check progress": "ಅರ್ಹತಾ ಪರಿಶೀಲನೆ ಪ್ರಗತಿ",
  "Application progress": "ಅರ್ಜಿ ಪ್ರಗತಿ",
  "Filter and sort results": "ಫಲಿತಾಂಶಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ ಮತ್ತು ವಿಂಗಡಿಸಿ",
  "Sort schemes": "ಯೋಜನೆಗಳನ್ನು ವಿಂಗಡಿಸಿ",
  "Choose a scheme category": "ಯೋಜನಾ ವರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
  "Potential scheme matches": "ಸಂಭಾವ್ಯ ಯೋಜನಾ ಹೊಂದಾಣಿಕೆಗಳು",
  "Documents to upload": "ಅಪ್‌ಲೋಡ್ ಮಾಡಬೇಕಾದ ದಾಖಲೆಗಳು",
  Close: "ಮುಚ್ಚಿ",
  Kannada: "ಕನ್ನಡ",
  Hindi: "ಹಿಂದಿ",
  "Clear search": "ಹುಡುಕಾಟ ತೆರವುಗೊಳಿಸಿ",
  potential: "ಸಂಭಾವ್ಯ",
  match: "ಹೊಂದಾಣಿಕೆ",
  matches: "ಹೊಂದಾಣಿಕೆಗಳು",
  "· Uploading": "· ಅಪ್‌ಲೋಡ್ ಆಗುತ್ತಿದೆ",
  "JANASEVA PROFILE": "ಜನಸೇವಾ ಪ್ರೊಫೈಲ್",
  "No sample listings match “": "“",
  "”.": "”ಗೆ ಹೊಂದುವ ಮಾದರಿ ಪಟ್ಟಿಗಳಿಲ್ಲ.",
};

const hi: Dictionary = {
  "Government schemes, made simple.": "सरकारी योजनाएँ, सरल रूप में।",
  "An independent concept project": "एक स्वतंत्र अवधारणा परियोजना",
  "WELCOME TO JANASEVA": "जनसेवा में आपका स्वागत है",
  "Your benefits.": "आपके लाभ।",
  "Your language.": "आपकी भाषा।",
  "Discover government schemes, check eligibility and understand how to apply.":
    "सरकारी योजनाएँ खोजें, पात्रता जाँचें और आवेदन प्रक्रिया समझें।",
  "Choose your preferred language": "अपनी पसंदीदा भाषा चुनें",
  "Get Started": "शुरू करें",
  "You can change your language anytime.": "आप कभी भी अपनी भाषा बदल सकते हैं।",
  "A friendly illustration of Indian citizens using a public service on a phone":
    "फ़ोन पर सार्वजनिक सेवा का उपयोग करते भारतीय नागरिकों का चित्र",
  "Namaste! Welcome back.": "नमस्ते! फिर से स्वागत है।",
  "Find government schemes": "सरकारी योजनाएँ खोजें",
  "Search schemes by name or category": "नाम या श्रेणी से योजनाएँ खोजें",
  "PERSONALISED FOR YOU": "आपके लिए व्यक्तिगत",
  "Find schemes you’re eligible for": "वे योजनाएँ खोजें जिनके लिए आप पात्र हो सकते हैं",
  "Answer a few simple questions to discover benefits.": "लाभ खोजने के लिए कुछ सरल प्रश्नों के उत्तर दें।",
  "Check Eligibility": "पात्रता जाँचें",
  "BROWSE BY NEED": "ज़रूरत के अनुसार देखें",
  Categories: "श्रेणियाँ",
  "View all": "सभी देखें",
  "ILLUSTRATIVE CONTENT": "उदाहरणात्मक सामग्री",
  "Featured schemes": "चुनिंदा योजनाएँ",
  SAMPLE: "नमूना",
  "Sample content for demonstration only. Verify details on official sources before applying.":
    "यह केवल प्रदर्शन के लिए नमूना सामग्री है। आवेदन से पहले आधिकारिक स्रोत पर विवरण जाँचें।",
  Home: "होम",
  Explore: "खोजें",
  "My Applications": "मेरे आवेदन",
  Profile: "प्रोफ़ाइल",
  Education: "शिक्षा",
  Agriculture: "कृषि",
  Employment: "रोज़गार",
  "Women & Child Welfare": "महिला एवं बाल कल्याण",
  Healthcare: "स्वास्थ्य सेवा",
  Housing: "आवास",
  "Student scholarship schemes": "छात्रवृत्ति योजनाएँ",
  "Explore sample listings for education support and scholarships.":
    "शिक्षा सहायता और छात्रवृत्ति की नमूना सूचियाँ देखें।",
  "Farmer support schemes": "किसान सहायता योजनाएँ",
  "Browse illustrative examples of agriculture and farmer services.":
    "कृषि और किसान सेवाओं के उदाहरण देखें।",
  "Women welfare schemes": "महिला कल्याण योजनाएँ",
  "Discover sample listings focused on women and family welfare.":
    "महिला और परिवार कल्याण की नमूना सूचियाँ देखें।",
  "Check Your Eligibility": "अपनी पात्रता जाँचें",
  "Step 1 of 4": "चरण 1 / 4",
  "TELL US A LITTLE ABOUT YOURSELF": "अपने बारे में थोड़ा बताएँ",
  "Let’s find schemes for you": "आइए आपके लिए योजनाएँ खोजें",
  "Answer a few simple questions to discover government schemes that may match your profile.":
    "आपकी प्रोफ़ाइल से मेल खाने वाली सरकारी योजनाएँ खोजने के लिए कुछ सरल प्रश्नों के उत्तर दें।",
  "State / Union Territory": "राज्य / केंद्र शासित प्रदेश",
  "Select where you currently live.": "जहाँ आप अभी रहते हैं, वह स्थान चुनें।",
  "Select your state or territory": "अपना राज्य या प्रदेश चुनें",
  States: "राज्य",
  "Union Territories": "केंद्र शासित प्रदेश",
  "Andhra Pradesh": "आंध्र प्रदेश",
  "Arunachal Pradesh": "अरुणाचल प्रदेश",
  Assam: "असम",
  Bihar: "बिहार",
  Chhattisgarh: "छत्तीसगढ़",
  Goa: "गोवा",
  Gujarat: "गुजरात",
  Haryana: "हरियाणा",
  "Himachal Pradesh": "हिमाचल प्रदेश",
  Jharkhand: "झारखंड",
  Karnataka: "कर्नाटक",
  Kerala: "केरल",
  "Madhya Pradesh": "मध्य प्रदेश",
  Maharashtra: "महाराष्ट्र",
  Manipur: "मणिपुर",
  Meghalaya: "मेघालय",
  Mizoram: "मिज़ोरम",
  Nagaland: "नागालैंड",
  Odisha: "ओडिशा",
  Punjab: "पंजाब",
  Rajasthan: "राजस्थान",
  Sikkim: "सिक्किम",
  "Tamil Nadu": "तमिलनाडु",
  Telangana: "तेलंगाना",
  Tripura: "त्रिपुरा",
  "Uttar Pradesh": "उत्तर प्रदेश",
  Uttarakhand: "उत्तराखंड",
  "West Bengal": "पश्चिम बंगाल",
  "Andaman and Nicobar Islands": "अंडमान और निकोबार द्वीपसमूह",
  Chandigarh: "चंडीगढ़",
  "Dadra and Nagar Haveli and Daman and Diu": "दादरा और नगर हवेली और दमन और दीव",
  "Delhi (NCT)": "दिल्ली (एनसीटी)",
  "Jammu and Kashmir": "जम्मू और कश्मीर",
  Ladakh: "लद्दाख",
  Lakshadweep: "लक्षद्वीप",
  Puducherry: "पुडुचेरी",
  "Age group": "आयु वर्ग",
  "Select your age group": "अपना आयु वर्ग चुनें",
  "Under 18 years": "18 वर्ष से कम",
  "18–24 years": "18–24 वर्ष",
  "25–39 years": "25–39 वर्ष",
  "40–59 years": "40–59 वर्ष",
  "60 years and above": "60 वर्ष और अधिक",
  Gender: "लिंग",
  "(optional)": "(वैकल्पिक)",
  Woman: "महिला",
  Man: "पुरुष",
  "Non-binary": "नॉन-बाइनरी",
  "Prefer not to say": "बताना नहीं चाहते",
  "Annual family income": "वार्षिक पारिवारिक आय",
  "Choose the closest approximate range.": "निकटतम अनुमानित सीमा चुनें।",
  "Below ₹1 lakh": "₹1 लाख से कम",
  "₹1–3 lakh": "₹1–3 लाख",
  "₹3–6 lakh": "₹3–6 लाख",
  "Above ₹6 lakh": "₹6 लाख से अधिक",
  Occupation: "व्यवसाय",
  Student: "विद्यार्थी",
  Farmer: "किसान",
  Employee: "कर्मचारी",
  "Self-employed": "स्व-रोज़गार",
  Other: "अन्य",
  "Your privacy matters.": "आपकी गोपनीयता महत्वपूर्ण है।",
  "Your information is used only to help identify potentially relevant schemes.":
    "आपकी जानकारी केवल संभावित रूप से प्रासंगिक योजनाएँ पहचानने के लिए उपयोग की जाती है।",
  "Results are suggestions only and do not guarantee eligibility. Always confirm requirements with the official scheme source.":
    "परिणाम केवल सुझाव हैं और पात्रता की गारंटी नहीं देते। आधिकारिक योजना स्रोत से आवश्यकताएँ जाँचें।",
  Continue: "जारी रखें",
  "Back to Home": "होम पर वापस जाएँ",
  "Profile details saved for the next step.": "अगले चरण के लिए प्रोफ़ाइल विवरण सहेजा गया।",
  "Schemes for You": "आपके लिए योजनाएँ",
  "YOUR PERSONALISED RESULTS": "आपके व्यक्तिगत परिणाम",
  "We found schemes for you": "हमें आपके लिए योजनाएँ मिलीं",
  "Based on the information you provided.": "आपके द्वारा दी गई जानकारी के आधार पर।",
  Filter: "फ़िल्टर",
  "Sort:": "क्रम:",
  Recommended: "अनुशंसित",
  "Name A–Z": "नाम अ–ह",
  Category: "श्रेणी",
  "Filter by category": "श्रेणी के अनुसार फ़िल्टर करें",
  All: "सभी",
  "Illustrative samples": "उदाहरणात्मक नमूने",
  "Potential match": "संभावित मेल",
  "View Details": "विवरण देखें",
  "These are potential matches, not confirmed eligibility. Final eligibility is determined by the official scheme authority.":
    "ये संभावित मेल हैं, पुष्टि की गई पात्रता नहीं। अंतिम पात्रता आधिकारिक योजना प्राधिकरण तय करता है।",
  "ILLUSTRATIVE SAMPLE": "उदाहरणात्मक नमूना",
  "This sample is a potential match only. Check the official scheme source for current requirements and final eligibility.":
    "यह नमूना केवल संभावित मेल है। वर्तमान आवश्यकताओं और अंतिम पात्रता के लिए आधिकारिक स्रोत जाँचें।",
  "Apply for this scheme": "इस योजना के लिए आवेदन करें",
  "Close details": "विवरण बंद करें",
  "Education Scholarship": "शिक्षा छात्रवृत्ति",
  "Financial assistance for eligible students.": "पात्र विद्यार्थियों के लिए वित्तीय सहायता।",
  "Farmer Support Scheme": "किसान सहायता योजना",
  "Support programmes for eligible farmers.": "पात्र किसानों के लिए सहायता कार्यक्रम।",
  "Women Welfare Scheme": "महिला कल्याण योजना",
  "Explore available welfare benefits.": "उपलब्ध कल्याण लाभ देखें।",
  "Employment Support Programme": "रोज़गार सहायता कार्यक्रम",
  "Explore illustrative skills and employment support listings.":
    "कौशल और रोज़गार सहायता की उदाहरणात्मक सूचियाँ देखें।",
  "Healthcare Assistance Scheme": "स्वास्थ्य सहायता योजना",
  "Browse sample listings for healthcare support services.": "स्वास्थ्य सहायता सेवाओं की नमूना सूचियाँ देखें।",
  "Housing Support Scheme": "आवास सहायता योजना",
  "Explore illustrative housing assistance opportunities.": "आवास सहायता के उदाहरणात्मक अवसर देखें।",
  "Upload Documents": "दस्तावेज़ अपलोड करें",
  "Step 3 of 4": "चरण 3 / 4",
  "PREPARE YOUR APPLICATION": "अपना आवेदन तैयार करें",
  "Documents required": "आवश्यक दस्तावेज़",
  "Upload the documents needed for your selected scheme.":
    "चुनी गई योजना के लिए आवश्यक दस्तावेज़ अपलोड करें।",
  "Prototype upload": "प्रोटोटाइप अपलोड",
  "Files stay in this browser session and are not submitted to any government department.":
    "फ़ाइलें इसी ब्राउज़र सत्र में रहती हैं और किसी सरकारी विभाग को जमा नहीं की जातीं।",
  "Accepted: PDF, JPG, PNG": "स्वीकृत: PDF, JPG, PNG",
  "Maximum: 5 MB each": "अधिकतम: प्रत्येक 5 MB",
  "Aadhaar Card": "आधार कार्ड",
  "Upload only if the selected scheme specifically requires it.":
    "केवल तभी अपलोड करें जब चुनी गई योजना विशेष रूप से इसे माँगे।",
  "Income Certificate": "आय प्रमाणपत्र",
  "A clear copy of a valid income certificate.": "मान्य आय प्रमाणपत्र की स्पष्ट प्रति।",
  "Educational Certificate": "शैक्षणिक प्रमाणपत्र",
  "Your latest relevant marksheet or certificate.": "आपकी नवीनतम संबंधित अंकसूची या प्रमाणपत्र।",
  "Bank Passbook": "बैंक पासबुक",
  "A clear copy of the account details page, if requested.":
    "माँगे जाने पर खाता विवरण पृष्ठ की स्पष्ट प्रति।",
  Required: "आवश्यक",
  Optional: "वैकल्पिक",
  "Upload file": "फ़ाइल अपलोड करें",
  "Upload failed": "अपलोड विफल",
  Retry: "पुनः प्रयास करें",
  Replace: "बदलें",
  Remove: "हटाएँ",
  "Unsupported format. Choose a PDF, JPG or PNG file.": "असमर्थित प्रारूप। PDF, JPG या PNG फ़ाइल चुनें।",
  "File is larger than the 5 MB limit.": "फ़ाइल 5 MB सीमा से बड़ी है।",
  "Simulating secure upload…": "सुरक्षित अपलोड का अनुकरण हो रहा है…",
  "Ready in this prototype": "इस प्रोटोटाइप में तैयार",
  "Required files are ready for the next prototype step.":
    "अगले प्रोटोटाइप चरण के लिए आवश्यक फ़ाइलें तैयार हैं।",
  "Upload the required sample documents before continuing.":
    "जारी रखने से पहले आवश्यक नमूना दस्तावेज़ अपलोड करें।",
  "Your documents contain personal information. Upload only documents required by the scheme and use secure storage.":
    "आपके दस्तावेज़ों में निजी जानकारी है। केवल योजना के लिए आवश्यक दस्तावेज़ अपलोड करें और सुरक्षित संग्रहण उपयोग करें।",
  "Save and continue later": "सहेजें और बाद में जारी रखें",
  "Progress saved in this browser prototype.": "इस ब्राउज़र प्रोटोटाइप में प्रगति सहेजी गई।",
  "Track your applications": "अपने आवेदन ट्रैक करें",
  "Stay updated on your scheme applications.": "अपने योजना आवेदनों की नवीनतम स्थिति देखें।",
  "APPLICATION UPDATES": "आवेदन अपडेट",
  "ILLUSTRATIVE PROTOTYPE": "उदाहरणात्मक प्रोटोटाइप",
  "This sample does not represent or track a real government application.":
    "यह नमूना किसी वास्तविक सरकारी आवेदन का प्रतिनिधित्व या ट्रैक नहीं करता।",
  "SAMPLE APPLICATION": "नमूना आवेदन",
  "Under Verification": "सत्यापनाधीन",
  "Illustrative scheme name": "उदाहरणात्मक योजना नाम",
  "Application ID": "आवेदन ID",
  Submitted: "जमा किया",
  PROGRESS: "प्रगति",
  "Application status": "आवेदन की स्थिति",
  "Application Submitted": "आवेदन जमा हुआ",
  "Documents Received": "दस्तावेज़ प्राप्त हुए",
  "Final Decision": "अंतिम निर्णय",
  Completed: "पूर्ण",
  "Current stage": "वर्तमान चरण",
  Pending: "लंबित",
  "Waiting for an update": "अपडेट की प्रतीक्षा",
  "SAMPLE RECORD": "नमूना रिकॉर्ड",
  "Application details": "आवेदन विवरण",
  "Submission date": "जमा करने की तिथि",
  "Selected scheme": "चुनी गई योजना",
  "Current status": "वर्तमान स्थिति",
  "Last updated": "अंतिम अपडेट",
  "15 November 2026": "15 नवंबर 2026",
  "15 Nov 2026": "15 नवंबर 2026",
  "18 November 2026": "18 नवंबर 2026",
  "Last updated 18 November 2026": "अंतिम अपडेट 18 नवंबर 2026",
  "EXAMPLE ERROR STATE": "त्रुटि स्थिति का उदाहरण",
  "Action Required": "कार्रवाई आवश्यक",
  "Your uploaded document could not be verified.": "आपका अपलोड किया दस्तावेज़ सत्यापित नहीं हो सका।",
  "Review Document": "दस्तावेज़ देखें",
  "Try Again": "फिर प्रयास करें",
  "Opening the sample document review flow.": "नमूना दस्तावेज़ समीक्षा प्रक्रिया खोली जा रही है।",
  "Verification retry simulated for this prototype.":
    "इस प्रोटोटाइप के लिए सत्यापन पुनः प्रयास का अनुकरण किया गया।",
  "Need help with this application?": "इस आवेदन में सहायता चाहिए?",
  "Read simple guidance about application steps and document checks.":
    "आवेदन चरणों और दस्तावेज़ जाँच के बारे में सरल मार्गदर्शन पढ़ें।",
  "View application guidance": "आवेदन मार्गदर्शन देखें",
  "For official decisions, refer to the relevant government department.":
    "आधिकारिक निर्णयों के लिए संबंधित सरकारी विभाग देखें।",
  "PROTOTYPE GUIDANCE": "प्रोटोटाइप मार्गदर्शन",
  "Application guidance": "आवेदन मार्गदर्शन",
  "Review status updates carefully, respond only to document requests shown on a verified official source, and keep your application ID private.":
    "स्थिति अपडेट ध्यान से देखें, केवल सत्यापित आधिकारिक स्रोत पर दिखे दस्तावेज़ अनुरोधों का उत्तर दें और अपना आवेदन ID निजी रखें।",
  "This guidance is illustrative. Contact the relevant government department for official help or decisions.":
    "यह मार्गदर्शन उदाहरणात्मक है। आधिकारिक सहायता या निर्णय के लिए संबंधित सरकारी विभाग से संपर्क करें।",
  "Close guidance": "मार्गदर्शन बंद करें",
  "Your preferences": "आपकी प्राथमिकताएँ",
  "Your selected language is kept as you move through the prototype.":
    "प्रोटोटाइप में आगे बढ़ते समय आपकी चुनी हुई भाषा बनी रहती है।",
  "Preferred language": "पसंदीदा भाषा",
  "Close profile": "प्रोफ़ाइल बंद करें",
  "Open profile": "प्रोफ़ाइल खोलें",
  "Go back": "वापस जाएँ",
  "Main navigation": "मुख्य नेविगेशन",
  "Janaseva home dashboard": "जनसेवा होम डैशबोर्ड",
  "Janaseva eligibility checker": "जनसेवा पात्रता जाँच",
  "Janaseva scheme discovery results": "जनसेवा योजना खोज परिणाम",
  "Janaseva document upload": "जनसेवा दस्तावेज़ अपलोड",
  "Janaseva application tracking": "जनसेवा आवेदन ट्रैकिंग",
  "Eligibility check progress": "पात्रता जाँच प्रगति",
  "Application progress": "आवेदन प्रगति",
  "Filter and sort results": "परिणाम फ़िल्टर और क्रमबद्ध करें",
  "Sort schemes": "योजनाएँ क्रमबद्ध करें",
  "Choose a scheme category": "योजना श्रेणी चुनें",
  "Potential scheme matches": "संभावित योजना मेल",
  "Documents to upload": "अपलोड करने के दस्तावेज़",
  Close: "बंद करें",
  Kannada: "कन्नड़",
  Hindi: "हिन्दी",
  "Clear search": "खोज साफ़ करें",
  potential: "संभावित",
  match: "मेल",
  matches: "मेल",
  "· Uploading": "· अपलोड हो रहा है",
  "JANASEVA PROFILE": "जनसेवा प्रोफ़ाइल",
  "No sample listings match “": "“",
  "”.": "” से मेल खाती नमूना सूची नहीं मिली।",
};

const dictionaries: Record<Exclude<Language, "en">, Dictionary> = { kn, hi };

const textOriginals = new WeakMap<Text, string>();
const textApplied = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();
const attributeApplied = new WeakMap<Element, Map<string, string>>();

export function translate(source: string, language: Language): string {
  if (language === "en") return source;
  const dictionary = dictionaries[language];
  if (dictionary[source]) return dictionary[source];

  const sample = source.match(/^SAMPLE (\d+)$/);
  if (sample) return `${language === "kn" ? "ಮಾದರಿ" : "नमूना"} ${sample[1]}`;

  const categoryHeading = source.match(/^(.+) schemes$/);
  if (categoryHeading) {
    return `${translate(categoryHeading[1], language)} ${language === "kn" ? "ಯೋಜನೆಗಳು" : "योजनाएँ"}`;
  }

  const removeFilter = source.match(/^Remove (.+) filter$/);
  if (removeFilter) {
    return language === "kn"
      ? `${translate(removeFilter[1], language)} ಫಿಲ್ಟರ್ ತೆಗೆದುಹಾಕಿ`
      : `${translate(removeFilter[1], language)} फ़िल्टर हटाएँ`;
  }

  const browse = source.match(/^Browse (.+) schemes$/);
  if (browse) {
    return language === "kn"
      ? `${translate(browse[1], language)} ಯೋಜನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ`
      : `${translate(browse[1], language)} योजनाएँ देखें`;
  }

  const matches = source.match(/^(\d+) potential (match|matches)$/);
  if (matches) {
    return language === "kn" ? `${matches[1]} ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆಗಳು` : `${matches[1]} संभावित मेल`;
  }

  const ready = source.match(/^(\d+) of (\d+) documents ready$/);
  if (ready) {
    return language === "kn"
      ? `${ready[2]}ರಲ್ಲಿ ${ready[1]} ದಾಖಲೆಗಳು ಸಿದ್ಧ`
      : `${ready[2]} में से ${ready[1]} दस्तावेज़ तैयार`;
  }

  const uploading = source.match(/^Uploading (\d+)%$/);
  if (uploading) {
    return language === "kn" ? `ಅಪ್‌ಲೋಡ್ ${uploading[1]}%` : `अपलोड ${uploading[1]}%`;
  }

  const noResults = source.match(/^No sample listings match “(.+)”\.$/);
  if (noResults) {
    return language === "kn"
      ? `“${noResults[1]}”ಗೆ ಹೊಂದುವ ಮಾದರಿ ಪಟ್ಟಿಗಳಿಲ್ಲ.`
      : `“${noResults[1]}” से मेल खाती नमूना सूची नहीं मिली।`;
  }

  const chooseFile = source.match(/^Choose file for (.+)$/);
  if (chooseFile) {
    return language === "kn"
      ? `${translate(chooseFile[1], language)}ಗಾಗಿ ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ`
      : `${translate(chooseFile[1], language)} के लिए फ़ाइल चुनें`;
  }

  const uploadProgress = source.match(/^(.+) upload progress$/);
  if (uploadProgress) {
    return language === "kn"
      ? `${translate(uploadProgress[1], language)} ಅಪ್‌ಲೋಡ್ ಪ್ರಗತಿ`
      : `${translate(uploadProgress[1], language)} अपलोड प्रगति`;
  }

  return source;
}

function translateTextNode(node: Text, language: Language) {
  const current = node.data;
  const lastApplied = textApplied.get(node);
  if (!textOriginals.has(node) || (lastApplied !== undefined && current !== lastApplied)) {
    textOriginals.set(node, current);
  }
  const original = textOriginals.get(node) || current;
  const leading = original.match(/^\s*/)?.[0] || "";
  const trailing = original.match(/\s*$/)?.[0] || "";
  const core = original.trim();
  if (!core) return;
  const next = `${leading}${translate(core, language)}${trailing}`;
  textApplied.set(node, next);
  if (node.data !== next) node.data = next;
}

function translateAttribute(element: Element, name: string, language: Language) {
  const current = element.getAttribute(name);
  if (!current) return;
  let originals = attributeOriginals.get(element);
  let applied = attributeApplied.get(element);
  if (!originals) {
    originals = new Map();
    attributeOriginals.set(element, originals);
  }
  if (!applied) {
    applied = new Map();
    attributeApplied.set(element, applied);
  }
  if (!originals.has(name) || (applied.has(name) && current !== applied.get(name))) {
    originals.set(name, current);
  }
  const next = translate(originals.get(name) || current, language);
  applied.set(name, next);
  if (current !== next) element.setAttribute(name, next);
}

function localize(root: Node, language: Language) {
  if (root.nodeType === Node.TEXT_NODE) translateTextNode(root as Text, language);
  if (root.nodeType === Node.ELEMENT_NODE) {
    const element = root as Element;
    ["aria-label", "placeholder", "title", "label"].forEach((name) =>
      translateAttribute(element, name, language),
    );
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text, language);
    else {
      ["aria-label", "placeholder", "title", "label"].forEach((name) =>
        translateAttribute(node as Element, name, language),
      );
    }
  }
}

export function LanguageRuntime({ language }: { language: Language }) {
  useLayoutEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    localize(root, language);
    document.documentElement.lang = language;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") localize(mutation.target, language);
        mutation.addedNodes.forEach((node) => localize(node, language));
      }
    });
    observer.observe(root, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  return null;
}
