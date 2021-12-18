import { resolver } from "blitz";
import { setMuted, getMuted } from "loudness";

export default resolver.pipe(async (toggle: boolean) => {
  await setMuted(toggle);

  return await getMuted();
});
