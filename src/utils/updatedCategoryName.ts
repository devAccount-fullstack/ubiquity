export function updatedCategoryName(category: string | undefined): string {
  if (!category) return "General";

  switch (category) {
    case "Back Office":
      return "Non-Voice";
    case "Banking Operations":
      return "Risk & Response";
    case "Business Transformation":
      return "Specialized Services";
    case "Customer Satisfaction":
      return "Customer Experience";
    case "E-commerce":
      return "E-Commerce & Retail";
    case "Fintech":
      return "Finance & Insurance";
    case "Healthcare":
      return "Healthcare & Wellness";
    case "Insurance":
      return "Finance & Insurance";
    case "Logistics & Shipping":
      return "Delivery & Logistics";
    case "People & Culture":
      return "Trends & News";
    case "Recruiting":
      return "Specialized Services";
    case "Technology Solutions":
      return "Trends & News";
    case "Utilities":
      return "Energy & Utilities";
    case "Trends":
      return "Trends & News";
    case "Whitepapers":
      return "Reports & Guides";
    case "ROI Calculator":
      return "ROI Calculator";
    case "News":
      return "Trends & News";
    case "CX Guides":
      return "Reports & Guides";
    case "Case Studies":
      return "Customer Success Stories";
    case "Education":
      return "Reports & Guides";
    default:
      return category;
  }
}
