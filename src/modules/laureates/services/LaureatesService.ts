class LaureatesService {
  loadLaureates = async () => {
    const res = await fetch("http://api.nobelprize.org/v1/laureate.json");
    const { laureates } = await res.json();
    return laureates;
  };
}

export const laureatesService = new LaureatesService();
