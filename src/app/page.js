import Characters from "@/components/Characters";
import helpApi from "@/helpers/helpApi";

const getCharacters = async () => {
  try {
    const data = await helpApi("api");
    return data;
  } catch (err) {
    return;
  }
};

export default async function Home() {
  const characters = await getCharacters();

  return (
    <main>
      <Characters data={characters} />
    </main>
  );
}
