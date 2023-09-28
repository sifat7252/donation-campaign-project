import { PieChart, Pie, Cell } from "recharts";


const Statistic = () => {
  const myDonations = JSON.parse(localStorage.getItem("donateCard"));
  let myDonation = 0;
  if (myDonations !== null) {
    myDonation = myDonations.length;
  }
  const total = 12;
  const data = [
    { name: "Donation", value: total - myDonation },
    { name: "Total-Donation", value: myDonation },
  ];

  const COLORS = ["#FF444A", "#00C49F" ,'#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  return (
    <div>
      <div className="flex items-center justify-center mt-10 md:mt-2">
        <PieChart width={400} height={400}>
          <Pie
            width={150}
            height={150}
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center items-center">
      <h2 className="text-black font-bold">Your donation = <span className="bg-sky-400 p-2 rounded-md">Blue</span> Total donation = <span className="bg-red-500 p-2 rounded-md">Red</span></h2>
      </div>
    </div>
  );
};

export default Statistic;
