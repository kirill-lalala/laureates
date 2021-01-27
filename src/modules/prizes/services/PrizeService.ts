class PrizeService {
  loadPrizes = async () => {
    const res = await fetch("https://api.nobelprize.org/v1/prize.json");
    const { prizes } = await res.json();
    return prizes;
  };
}

export const prizeService = new PrizeService();
