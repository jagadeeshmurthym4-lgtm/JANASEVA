export type SchemeCategory =
  | "Education"
  | "Agriculture"
  | "Employment"
  | "Women & Child Welfare"
  | "Healthcare"
  | "Housing";

export type EligibilityProfile = {
  region: string;
  age: string;
  gender: string;
  income: string;
  occupation: string;
};

export function categoryForProfile(profile: EligibilityProfile): SchemeCategory | undefined {
  const occupationCategory: Partial<Record<string, SchemeCategory>> = {
    Student: "Education",
    Farmer: "Agriculture",
    Employee: "Employment",
    "Self-employed": "Employment",
  };
  return (
    occupationCategory[profile.occupation] ||
    (profile.gender === "Woman"
      ? "Women & Child Welfare"
      : profile.age === "60 years and above"
        ? "Healthcare"
        : undefined)
  );
}
