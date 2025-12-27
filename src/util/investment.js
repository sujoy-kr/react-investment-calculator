export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const annualData = []
    let investmentValue = initialInvestment

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn / 100)
        investmentValue += interestEarnedInYear + annualInvestment
        annualData.push({
            year: i + 1,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
        })
    }

    return annualData
}

export const formatter = new Intl.NumberFormat('bn-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    numberingSystem: 'beng',
})

export const toBanglaDigits = (num) => {
    return num.toLocaleString('bn-BD', { numberingSystem: 'beng' })
}
