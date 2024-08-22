import React from "react";
const useSortProducts = (): { sortByCriteria: "name" | "date_desc" | "date_asc" | '', handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void } => {

    const [sortByCriteria, setSortByCriteria] = React.useState<"name" | "date_desc" | "date_asc" | ''>('')
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSortByCriteria(e.target.value as "name" | "date_desc" | "date_asc" | '');
    };
    return { sortByCriteria, handleSortChange };
};

export default useSortProducts;