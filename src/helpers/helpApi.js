export default async function helpApi(path) {
  const url = `http://localhost:3001/${path}`;

  try {
    // ISR
    const res = await fetch(url, {
      next: {
        // Every 10 seconds the request is updated, that is, after 10 seconds the HTML is generated again.
        revalidate: 10,
      },
    });

    if (!res.ok)
      throw {
        err: true,
        status: res.status || 500,
        statusText: res.statusText || "Internal several error",
      };

    const data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
}
