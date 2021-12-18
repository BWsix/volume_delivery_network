import { resolver } from "blitz";
import { getMuted } from "loudness";

export default resolver.pipe(async () => {
  return await getMuted();
});
