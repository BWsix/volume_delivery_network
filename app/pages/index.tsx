import muteMutation from "app/mutations/muteMutation";
import volumeMutation from "app/mutations/volumeMutation";
import muteQuery from "app/queries/muteQuery";
import volumeQuery from "app/queries/volumeQuery";
import { BlitzPage, useMutation, useQuery } from "blitz";

const Home: BlitzPage = () => {
  const [volume, { setQueryData: setVolume }] = useQuery(volumeQuery, null, { suspense: false });
  const [mute, { setQueryData: setMute }] = useQuery(muteQuery, null, { suspense: false });

  const [updateVolume] = useMutation(volumeMutation);
  const [toggle] = useMutation(muteMutation);

  return (
    <>
      {mute ? "muted" : "not muted"}
      <div>
        <button
          onClick={async () => {
            setMute(await toggle(true));
          }}
        >
          mute
        </button>
        <button
          onClick={async () => {
            setMute(await toggle(false));
          }}
        >
          unmute
        </button>
      </div>
      volume: {volume}
      <div>
        <button
          onClick={async () => {
            setVolume(await updateVolume(true));
          }}
        >
          volume up
        </button>
        <button
          onClick={async () => {
            setVolume(await updateVolume(false));
          }}
        >
          volume down
        </button>
      </div>
    </>
  );
};

export default Home;
