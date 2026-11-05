/**
 * DUS Bankası — CSV Dışa Aktarma ve Kaçışlama Motoru (saf modül)
 *
 * RFC 4180 standardı + UTF-8 BOM + Excel/Sheets tam uyumlu.
 */
export function escapeCsvCell(val: unknown, delimiter = ';'): string {
  if (val === null || val === undefined) return '';
  const str = String(val);
  const needsQuotes =
    str.includes(delimiter) ||
    str.includes('"') ||
    str.includes('\n') ||
    str.includes('\r') ||
    str.includes(',');
  if (needsQuotes) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function generateCsvString(
  headers: string[],
  rows: (string | number | null | undefined)[][],
  delimiter = ';',
): string {
  const headerLine = headers.map(h => escapeCsvCell(h, delimiter)).join(delimiter);
  const dataLines = rows.map(row => row.map(cell => escapeCsvCell(cell, delimiter)).join(delimiter));
  return '\uFEFF' + [headerLine, ...dataLines].join('\r\n');
}

export function downloadCsvFile(filename: string, csvContent: string): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.csv') ? filename : `${filename}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
