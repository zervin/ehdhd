export async function fetchLivePrice(ticker: string, apiKey: string) {
  const res = await fetch(`https://eodhd.com/api/real-time/${ticker}?api_token=${apiKey}&fmt=json`);
  return res.json();
}