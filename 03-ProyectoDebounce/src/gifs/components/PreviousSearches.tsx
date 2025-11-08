interface PreviousSearchesProps {
  title: string;
  searches: string[];
  onHandleClick: (term: string) => void;
}

export const PreviousSearches = ({
  title,
  searches,
  onHandleClick,
}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term} onClick={() => onHandleClick(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
