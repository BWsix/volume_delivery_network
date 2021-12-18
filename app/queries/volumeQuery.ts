import { resolver } from "blitz";
import { getVolume } from "loudness";

export default resolver.pipe(async () => {
  return await getVolume();
});
