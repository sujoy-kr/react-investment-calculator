import {
    calculateInvestmentResults,
    formatter,
    toBanglaDigits,
} from '../util/investment'

const Result = ({ userInput }) => {
    const resultData = calculateInvestmentResults(userInput)

    const initialInvestment =
        resultData.length > 0
            ? resultData[0].valueEndOfYear -
              resultData[0].interest -
              resultData[0].annualInvestment
            : 0

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>বছর</th>
                    <th>মোট জমার পরিমাণ</th>
                    <th>মুনাফা (বছর)</th>
                    <th>মোট মুনাফা</th>
                    <th>বিনিয়োগকৃত মূলধন</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map((yearData) => {
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment

                    const totalAmountInvested =
                        yearData.valueEndOfYear - totalInterest

                    return (
                        <tr key={yearData.year}>
                            <td>{toBanglaDigits(yearData.year)}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Result
