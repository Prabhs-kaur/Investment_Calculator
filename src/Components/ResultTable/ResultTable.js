import React from "react";
import classes from './ResultTable.module.css';

const formatter = new  Intl.NumberFormat('en-US',{
  style : 'currency',
  currency : 'USD',
  minimumFractiononDigits: 2,
  maximumFractiononDigit: 2,

});
const ResultTable = (props) => {
return <table className={classes.result}>
<thead>
  <tr>
    <th>Year</th>
    <th>Total Savings</th>
    <th>Interest (Year)</th>
    <th>Total Interest</th>
    <th>Invested Capital</th>
  </tr>
</thead>
<tbody>
  {props.data.map((yeardata) => (
    <tr key={yeardata.year}>
    <td>{yeardata.year}</td>
    <td>{formatter.format(yeardata.savingsEndOfYear)}</td>
    <td>{formatter.format(yeardata.yearlyInterest)}</td>
    <td>{formatter.format(yeardata.savingsEndOfYear - 
    props.initialInvestment - 
    yeardata.yearlyContribution * yeardata.year)}</td>
    <td>{formatter.format(props.initialInvestment + yeardata.yearlyContribution * yeardata.year )}</td>
  </tr>
  ))}
  
</tbody>
</table>
}
export default ResultTable;
