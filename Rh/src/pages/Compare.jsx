import React from 'react';

export default function Compare() {
  // Sample data in the form of an array of objects
  const data = [
    { 
      id: 1, 
      name: 'Battery', 
      rhynoSE03Lite: '1.8 kWh', 
      rhynoSE03: '1.8 kWh', 
      rhynoSE03Max: '1.8 kWh' 
    },
    { 
      id: 2, 
      name: 'Battery Features', 
      rhynoSE03Lite: 'Waterproof', 
      rhynoSE03: 'Waterproof', 
      rhynoSE03Max: 'Waterproof' 
    },
    { 
      id: 3, 
      name: 'Battery Warranty', 
      rhynoSE03Lite: '3 years', 
      rhynoSE03: '3 years', 
      rhynoSE03Max: '3 years' 
    },
    {
        id: 4,
        name: 'Charging time',
        rhynoSE03Lite: '3 hours (12A) ', 
      rhynoSE03: '4 hours (12A) ', 
      rhynoSE03Max: '4 hours (12A) ' 
    },
    {
        id: 5,
        name: 'Motor',
        rhynoSE03Lite: '1500W  ', 
      rhynoSE03: '1500W ', 
      rhynoSE03Max: '2000W ' 
    },
    {
        id: 6,
        name: 'Max speed ',
        rhynoSE03Lite: '55 km/h  ', 
      rhynoSE03: '55 km/h ', 
      rhynoSE03Max: '66 km/h ' 
    },
    {
        id: 7,
        name: 'Warranty on electronics',
        rhynoSE03Lite: '1 year ', 
      rhynoSE03: '1 year ', 
      rhynoSE03Max: '1 year ' 
    },
    {
        id: 8,
        name: 'Max range(@30km/h)',
        rhynoSE03Lite: '100 km ', 
      rhynoSE03: '150 km ', 
      rhynoSE03Max: '120 km ' 
    },
    {
        id: 9,
        name: 'Max range (@45km/h)',
        rhynoSE03Lite: '90 km  ', 
      rhynoSE03: '110 km ', 
      rhynoSE03Max: '100 km ' 
    },
    {
        id: 10,
        name: 'Max range (@full speed)',
        rhynoSE03Lite: '60km ', 
      rhynoSE03: '90 km', 
      rhynoSE03Max: '80 km ' 
    },
    {
        id: 11,
        name: 'Other key benefits',
        rhynoSE03Lite: 'Fire-safe Battery ', 
      rhynoSE03: 'Range prediction', 
      rhynoSE03Max: 'Stable and safe' 
    },
    // Add more specifications as needed
  ];

  return (
    <div>
        <br />
      <h3>Providing Ease For Our Customers</h3>
      <br />
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' , color: 'black'}}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={cellStyle}>Specification</th>
            <th style={cellStyle}>Rhyno SE03 Lite</th>
            <th style={cellStyle}>Rhyno SE03</th>
            <th style={cellStyle}>Rhyno SE03 Max</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>{item.rhynoSE03Lite}</td>
              <td style={cellStyle}>{item.rhynoSE03}</td>
              <td style={cellStyle}>{item.rhynoSE03Max}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
}

const cellStyle = {
  padding: '8px',
  textAlign: 'center',
  borderBottom: '1px solid #ddd',
};