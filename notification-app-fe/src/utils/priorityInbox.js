const weight = { placement: 3 , result:2 , event : 1};

export function top10(list) {
    return list
        .filter((n) => !n.read)
        .sort((a,b) => {
            const p = (weight[b.type] || 0) - (weight[a.type] || 0);
            if (p) return p;
            return new Date(b.timestamp) - new Date(a.timestamp);

        })
        .slice(0, 10);
}