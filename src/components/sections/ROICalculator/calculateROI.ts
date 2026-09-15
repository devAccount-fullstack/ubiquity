import { ROIResults } from "./types";

const inHouseYearlyHours = 1800; // Assuming 1800 working hours per year
const outsourceYearlyHours = 1740; // Assuming 1740 working hours per year for outsourced agents
const outsourceHourlyAgentRateNearshore = 16; // Assuming $16/hour for nearshore agents
const outsourceHourlyAgentRateOffshore = 12.75; // Assuming $12.75/hour for offshore agents

export function calculateROI(
  agents: number,
  outsourcingType: "offshore" | "nearshore",
  agentHourlyRate: number,
  teamLeadHourlyRate: number,
  accountManagerHourlyRate: number,
): ROIResults {
  const agentCostInHouse = agents * agentHourlyRate * inHouseYearlyHours;
  const agentCostOutsourced =
    outsourcingType === "offshore"
      ? agents * outsourceHourlyAgentRateOffshore * outsourceYearlyHours
      : agents * outsourceHourlyAgentRateNearshore * outsourceYearlyHours;
  const teamLeadCostInHouse =
    Math.max(Math.floor(agents / 15), 1) *
    teamLeadHourlyRate *
    inHouseYearlyHours; // 1 team lead per 15 agents, rounded down to at least 1
  const accountManagerCostInHouse =
    accountManagerHourlyRate * (inHouseYearlyHours / 2); // 1 account manager, assuming half-time.
  const trainingCostInHouse = agents * 1000 + 1500; // Assuming $1000 training cost per agent and $1500 for the team lead.
  const trainingCostOutsourced = agents * 750; // Assuming $750 training cost for outsourced agents.

  const directSalarySubtotalInHouse =
    agentCostInHouse +
    teamLeadCostInHouse +
    accountManagerCostInHouse +
    trainingCostInHouse;
  const directSalarySubtotalOutsourced =
    agentCostOutsourced + trainingCostOutsourced;

  const officeSpaceCostInHouse = agents * 6336; // Assuming $6336 per agent for office space
  const hardwareCostInHouse = (agents + 2) * 5000; // Assuming $5000 per agent for hardware, including 2 extra for overhead
  const indirectCostInHouse = directSalarySubtotalInHouse / 5; // Assuming 20% indirect costs, which is 1/5 of direct salary subtotal

  const overheadSubtotalInHouse =
    officeSpaceCostInHouse + hardwareCostInHouse + indirectCostInHouse;
  const overheadSubtotalOutsourced = 0; // No overhead costs for outsourced

  const totalCostInHouse =
    overheadSubtotalInHouse + directSalarySubtotalInHouse;
  const totalCostOutsourced = directSalarySubtotalOutsourced;
  const totalSavings = totalCostInHouse - totalCostOutsourced;
  const percentageSavings = Math.trunc(
    ((totalCostInHouse - totalCostOutsourced) / totalCostInHouse) * 100,
  );

  return {
    agentCostInHouse,
    agentCostOutsourced,
    teamLeadCostInHouse,
    accountManagerCostInHouse,
    trainingCostInHouse,
    trainingCostOutsourced,
    directSalarySubtotalInHouse,
    directSalarySubtotalOutsourced,
    officeSpaceCostInHouse,
    hardwareCostInHouse,
    indirectCostInHouse,
    overheadSubtotalInHouse,
    overheadSubtotalOutsourced,
    totalCostInHouse,
    totalCostOutsourced,
    totalSavings,
    percentageSavings,
  };
}
