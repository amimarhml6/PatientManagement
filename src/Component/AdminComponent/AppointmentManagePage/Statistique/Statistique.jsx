import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./Statistique.css";

const COLORS = ['#0088FE' ,'#00C49F', '#FFBB28', '#ff5906' ,'#A28DFF' ,'#7a7a7a' ,'#d25af4'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={COLORS[index % COLORS.length]}
      fontSize={14}
      fontWeight="bold"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistique = () => {
  const [careData, setCareData] = useState([]);
  const [bloodGroupData, setBloodGroupData] = useState([]);

  useEffect(() => {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const bloodAppointments = JSON.parse(localStorage.getItem("Bloodappointment")) || [];

    const careStats = {};
    const bloodGroupStats = {};

    appointments.forEach(({ service }) => {
      careStats[service] = (careStats[service] || 0) + 1;
    });

    bloodAppointments.forEach(({ bloodGroup }) => {
      bloodGroupStats[bloodGroup] = (bloodGroupStats[bloodGroup] || 0) + 1;
    });

    const careChartData = Object.keys(careStats).map((service, index) => ({
      name: service,
      value: careStats[service],
      color: COLORS[index % COLORS.length],
    }));

    const bloodChartData = Object.keys(bloodGroupStats).map((group, index) => ({
      name: group,
      value: bloodGroupStats[group],
      color: COLORS[index % COLORS.length],
    }));

    setCareData(careChartData);
    setBloodGroupData(bloodChartData);
  }, []);

  return (
    <div className="statistique-container">
      <h1 style={{color:"#1B5C9E"}}>Appointment <span style={{color:"#1BB13C"}}>Statistics</span> </h1>
      <div className="Statistics-co">
        
        {careData.length > 0 && (
          <div className="statistique-section" id="Care">
            <h2 className="statistique-title">Service Appointments</h2>
            <div className="chart-info-container">
              <PieChart width={300} height={300}>
                <Pie
                  data={careData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={renderCustomizedLabel}
                  labelLine={false}
                  dataKey="value"
                >
                  {careData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </div>
                <div className="details-container">
                 {careData.map((item, index) => (
                   <div key={index} className="details-item">
                     <span className="color-box" style={{ backgroundColor: item.color }}></span>
                      {item.name}: {item.value}  
                    </div>
                 ))}
               </div>
            </div>
        )}

        {/* Blood Donation Appointments */}
        {bloodGroupData.length > 0 && (
            <div className="statistique-section" id="Blood">
                <h2 className="statistique-title">Blood Donations</h2>
                <div className="chart-info-container">
                <PieChart width={300} height={300}>
                    <Pie
                    data={bloodGroupData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={renderCustomizedLabel}
                    labelLine={false}
                    dataKey="value"
                    >
                    {bloodGroupData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
                </div>
                <div className="details-container">
                    {bloodGroupData.map((item, index) => (
                    <div key={index} className="details-item">
                        <span className="color-box" style={{ backgroundColor: item.color }}></span>
                        {item.name}: {item.value} 
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Statistique;
