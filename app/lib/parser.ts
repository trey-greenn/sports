import Papa from 'papaparse';

export interface CsvRow {
  Season: string;
  Lg: string;
  Team: string;
  W: string;
  L: string;
  'W/L%': string;
  Finish: string;
  SRS: string;
  Pace: string;
  'Rel Pace': string;
  ORtg: string;
  'Rel ORtg': string;
  DRtg: string;
  'Rel DRtg': string;
}

export const fetchCsvData = async (filePath: string): Promise<CsvRow[]> => {
  const response = await fetch(filePath);
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse<CsvRow>(csvText, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error: { message: any; }) => reject(error.message),
    });
  });
};
