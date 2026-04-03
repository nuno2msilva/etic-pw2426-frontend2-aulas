import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const styles = {
    width: "100vw", 
    height: "100vh", 
    alignItems: "center", 
    justifyContent: "center",
    textAlign: "center" as const,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
}

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [queryString, setQueryString] = useState("");
    const query = searchParams.get("query");

    return (
        <div style={styles}>
            <h1>Search Results for: {query}</h1>
            <p>{query}</p>
            <input type="text" value={queryString} onChange={(e) => setQueryString(e.target.value)} />
            <button onClick = {() => setSearchParams({ query: queryString })}>New Search</button>
        </div>
    )
}

export default Search

