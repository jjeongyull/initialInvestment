import { calculateInvestmentResults, formatter } from "../util/investment"


export default function Result({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);
  const initialInestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData)
  return <table id="result">
    <thead>
      <tr>
        <th>연도</th>
        <th>투자 가치</th>
        <th>이자(연도)</th>
        <th>총 이자</th>
        <th>투자 자본</th>
      </tr>
    </thead>
    <tbody>
      {
        resultData.map(yearData => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment *
            yearData.year -
            initialInestment;
          
          const totalAmountInvested =
            yearData.valueEndOfYear - initialInestment;
          return <tr key={yearData.year}>
            <td>{ yearData.year }</td>
            <td>{ formatter.format(yearData.valueEndOfYear) }</td>
            <td>{ formatter.format(yearData.interest) }</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{ formatter.format(totalAmountInvested) }</td>
          </tr>
        })
      }
    </tbody>
  </table>
}