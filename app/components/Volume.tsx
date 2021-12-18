import volumeMutation from "app/mutations/volumeMutation";
import volumeQuery from "app/queries/volumeQuery";
import { useMutation, useQuery } from "blitz";

export const Volume = () => {
  const [volume, { setQueryData }] = useQuery(volumeQuery, null);
  const [updateVolume] = useMutation(volumeMutation);

  return (
    <>
      volume: {volume}
      <div>
        <button
          onClick={async () => {
            setQueryData(await updateVolume(true));
          }}
        >
          volume up
        </button>
        <button
          onClick={async () => {
            setQueryData(await updateVolume(false));
          }}
        >
          volume down
        </button>
      </div>
    </>
  );
};
