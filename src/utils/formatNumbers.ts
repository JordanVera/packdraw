export function formatNumberWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function roundToTwoDecimals(num: number): number {
  return Math.round(num * 100) / 100;
}
