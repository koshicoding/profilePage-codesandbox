export default function ButtonSection({ handleClick }) {
  return (
    <div className="buttonSection">
      <button
        type="button"
        className="button"
        onClick={() => handleClick("filmarzec")}
      >
        GitHub
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleClick("Filip Marzec")}
      >
        LinkedIn
      </button>
    </div>
  );
}
