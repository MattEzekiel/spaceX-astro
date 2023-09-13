export const getLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 12,
            }
        })
    });
    const { docs } = await res.json();
    return docs;
}

/**
 * @param {string}id
 * @returns {Promise<*>}
 */
export const getLaunchByID = async (id) => {
    if (id) {
        try {
            const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
            return await res.json();
        } catch(e) {
            console.error(e);
            return e;
        }
    }
}
