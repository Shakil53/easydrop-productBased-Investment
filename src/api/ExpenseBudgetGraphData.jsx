export const dataExpenseBudgetGraphData = [
  { name: 'Office rent', value: 400 },
  { name: 'Employee salary', value: 200 },
  { name: 'Transportation', value: 300 },
  
];

export const COLORS = ['#FF0080', '#9B2CE5', '#744692'];

export const RADIAN = Math.PI / 180;
export const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  
export const style = {
  top: '90%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};