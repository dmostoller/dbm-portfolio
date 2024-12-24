'use client';

export default function AsciiChart({ data }: { data: { label: string, value: number }[] }) {
  const maxValue = Math.max(...data.map(d => d.value));
  const height = 5;
  
  const generateChart = () => {
    let chart = '';
    for (let row = height; row >= 0; row--) {
      for (let col = 0; col < data.length; col++) {
        const normalizedValue = Math.floor((data[col].value / maxValue) * height);
        chart += normalizedValue >= row ? '█' : ' ';
      }
      chart += '\n';
    }
    return chart;
  };

  return (
    <pre className="font-dos my-4 w-96">
      {generateChart()}
      {data.map(d => d.label).join(' ')}
    </pre>
  );
}