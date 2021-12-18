import muteMutation from "app/mutations/muteMutation";
import muteQuery from "app/queries/muteQuery";
import { useMutation, useQuery } from "blitz";

export const Mute = () => {
  const [mute, { setQueryData }] = useQuery(muteQuery, null);
  const [toggle] = useMutation(muteMutation);

  return (
    <>
      You computer is {mute ? "muted" : "not muted"} now.
      <div>
        <button
          onClick={async () => {
            setQueryData(await toggle(true));
          }}
        >
          mute
        </button>
        <button
          onClick={async () => {
            setQueryData(await toggle(false));
          }}
        >
          unmute
        </button>
      </div>
    </>
  );
};
