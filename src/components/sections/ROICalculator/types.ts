import { BuilderBlockAttributes } from "@/global.types";
import { Control } from "react-hook-form";

export interface ROICalculatorProps extends BuilderBlockAttributes {
  heading?: string;
  headingType?: string; // "h1" | "h2"
  text?: string;
  buttonText?: string;
  buttonUrl?: string;
  leanMoreHeading?: string;
  leanMoreContent?: string;
  addForm?: boolean;
  formHeading?: string;
  formSubheading?: string;
  portalId?: string;
  formId?: string;
}

export type ROIInputs = {
  agents: number;
  outsourcingType: "offshore" | "nearshore";
  agentHourlyRate: number;
  teamLeadHourlyRate: number;
  accountManagerHourlyRate: number;
};

export interface ROITableProps {
  control: Control<ROIInputs, unknown, ROIInputs>;
  results?: ROIResults;
}

export interface ROIResults {
  agentCostInHouse: number;
  agentCostOutsourced: number;
  teamLeadCostInHouse: number;
  accountManagerCostInHouse: number;
  trainingCostInHouse: number;
  trainingCostOutsourced: number;
  directSalarySubtotalInHouse: number;
  directSalarySubtotalOutsourced: number;
  officeSpaceCostInHouse: number;
  hardwareCostInHouse: number;
  indirectCostInHouse: number;
  overheadSubtotalInHouse: number;
  overheadSubtotalOutsourced: number;
  totalCostInHouse: number;
  totalCostOutsourced: number;
  totalSavings: number;
  percentageSavings: number;
}
