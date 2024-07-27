"use client"
import React, { useEffect, useState } from 'react';
import { fetchCsvData, CsvRow } from '../lib/parser';

const HomePage: React.FC = () => {
  const [data, setData] = useState<CsvRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const csvData = await fetchCsvData('/celticov.csv'); // Fetch and parse the CSV data
        setData(csvData); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching CSV data:', error);
        setError('Error fetching CSV data.');
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    loadData(); // Call the loadData function
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log(data)

  return (
    <div className="flex justify-center ">
      <div className="flex justify-center items-center">
      <h1 className="text-white" text-7xl>Sports Analytics Data</h1>
      </div>
      <table className="bg-black text-white  justify-center ">
        <thead>
          <tr>
            <th>Season</th>
            <th>Lg</th>
            <th>Team</th>
            <th>W</th>
            <th>L</th>
            <th>W/L%</th>
            <th>Finish</th>
            <th>SRS</th>
            <th>Pace</th>
            <th>Rel Pace</th>
            <th>ORtg</th>
            <th>Rel ORtg</th>
            <th>DRtg</th>
            <th>Rel DRtg</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="">{row.Season || 'N/A'}</td>
              <td className="">{row.Lg || 'N/A'}</td>
              <td className="">{row.Team || 'N/A'}</td>
              <td>{row.W || 'N/A'}</td>
              <td>{row.L || 'N/A'}</td>
              <td>{row['W/L%'] || 'N/A'}</td>
              <td>{row.Finish || 'N/A'}</td>
              <td>{row.SRS || 'N/A'}</td>
              <td>{row.Pace || 'N/A'}</td>
              <td>{row['Rel Pace'] || 'N/A'}</td>
              <td>{row.ORtg || 'N/A'}</td>
              <td>{row['Rel ORtg'] || 'N/A'}</td>
              <td>{row.DRtg || 'N/A'}</td>
              <td>{row['Rel DRtg'] || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
