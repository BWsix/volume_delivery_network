import { resolver } from "blitz";
import { getVolume, setVolume } from "loudness";

export default resolver.pipe(async (isUp: boolean) => {
  const volume = await getVolume();

  if (isUp && volume !== 100) {
    await setVolume(volume + 2);
  } else if (volume) {
    await setVolume(volume - 2);
  }

  return getVolume();
});
