import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
		// const fetchCategories = () => {
		//     apiClient
		//         .get("/categories")
		//         .then((res) => {
		//             setCategories(res.data);
		//         });
		// };
		// fetchCategories();
		apiClient
            .get("/categories")
            .then((res) => {
                setCategories(res.data);
            });
	}, []);
    return categories; 
};

export default useFetchCategory; 