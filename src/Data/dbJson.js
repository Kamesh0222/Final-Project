const doctorCities = {
  "New York City": [
    "New York City Doctors",
    "New York City Dentists",
    "New York City Pediatric Dentists",
    "New York City Pediatricians",
    "New York City Dermatologists",
    "New York City OB-GYNs",
    "New York City Psychiatrists",
    "New York City Therapists",
    "New York City Eye Doctors",
    "New York City ENT Doctors",
    "New York City Urgent Care",
    "New York City Medicare",
    "New York City Hospitals",
  ],
  Brooklyn: ["Brooklyn Doctors", "Brooklyn Dentists"],
  Queens: ["Queens Doctors", "Queens Dentists"],
  Bronx: ["Bronx Doctors", "Bronx Dentists"],
  "Long Island": ["Long Island Doctors", "Long Island Dentists"],
  Baltimore: ["Baltimore Doctors", "Baltimore Dentists"],
  "Washington, DC": ["Washington, DC Doctors", "Washington, DC Dentists"],
  Seattle: ["Seattle Doctors", "Seattle Dentists"],
  Atlanta: ["Atlanta Doctors", "Atlanta Dentists"],
  Denver: ["Denver Doctors", "Denver Dentists"],
  Philadelphia: ["Philadelphia Doctors", "Philadelphia Dentists"],
  Houston: ["Houston Doctors", "Houston Dentists"],
  Dallas: ["Dallas Doctors", "Dallas Dentists"],
  Austin: ["Austin Doctors", "Austin Dentists"],
  Chicago: ["Chicago Doctors", "Chicago Dentists"],
  Boston: ["Boston Doctors", "Boston Dentists"],
  "San Francisco": ["San Francisco Doctors", "San Francisco Dentists"],
  Miami: ["Miami Doctors", "Miami Dentists"],
  "Los Angeles": ["Los Angeles Doctors", "Los Angeles Dentists"],
  "San Diego": ["San Diego Doctors", "San Diego Dentists"],
};

const visitReasonsData = [
  {
    name: "Medical",
    dropdownItems: [
      "Physical Exam",
      "Flu Shot",
      "Blood Pressure Check",
      "Other Medical Reason",
    ],
  },
  {
    name: "Dental",
    dropdownItems: [
      "Teeth Cleaning",
      "Dental Checkup",
      "Tooth Pain",
      "Other Dental Reason",
    ],
  },
  {
    name: "Mental Health",
    dropdownItems: [
      "Therapy",
      "Consultation",
      "Mental Health Checkup",
      "Other Mental Health Reason",
    ],
  },
  {
    name: "Vision",
    dropdownItems: [
      "Eye Exam",
      "Vision Checkup",
      "Contact Lens Consultation",
      "Other Vision Reason",
    ],
  },
];

export { doctorCities, visitReasonsData };
