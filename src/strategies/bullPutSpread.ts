export function calculateBullPutSpread(price: number, strikeShort: number, strikeLong: number, credit: number) {
  const spread = strikeShort - strikeLong;
  const maxLoss = spread - credit;
  const breakEven = strikeShort - credit;
  return {
    strikeShort,
    strikeLong,
    credit,
    maxLoss,
    breakEven,
    profit: price >= strikeShort ? credit : (price <= strikeLong ? -maxLoss : credit - (strikeShort - price))
  };
}