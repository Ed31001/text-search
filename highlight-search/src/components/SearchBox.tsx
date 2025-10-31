import "./SearchBox.css";

interface Props {
    query: string;
    setQuery: (q: string) => void;
}

export default function SearchBox({ query, setQuery }: Props) {
    return (
        <div className="search-box">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
}