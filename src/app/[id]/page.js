import CharacterInfo from "@/components/CharacterInfo";
import Err from "@/components/Err";
import helpApi from "@/helpers/helpApi";

const getCharacter = async (id) => {
  try {
    const data = await helpApi(`api/character/${id}`);
    return data;
  } catch (err) {
    return;
  }
};

export async function generateMetadata({ params }) {
  const character = await getCharacter(params.id);
  return {
    title: `${character.name} - API`,
  };
}

const characterPage = async ({ params }) => {
  const character = await getCharacter(params.id);

  return (
    <>
      <main>
        {character && character.id ? (
          <CharacterInfo data={character} />
        ) : (
          <Err msg="An error occurred while obtaining the character information" />
        )}
      </main>
    </>
  );
};

export default characterPage;
