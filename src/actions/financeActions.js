
let riskLevelId = 0
export const userRiskLevel = (risk_level) => {
	return {
		type: "RISK_LEVEL",
		id: riskLevelId++,
		risk_level
	}
}