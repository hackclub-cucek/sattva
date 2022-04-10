import { google } from 'googleapis';

export async function getDataFromSheets() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_2_ID,
      range: process.env.SPREADSHEET_2_NAME,
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map((row) => ({
        events: row[0],
        first: row[1],
        second: row[2],
        third: row[3],
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
