const { useState } = React;

function VowelConsonantChecker() {
  const [letter, setLetter] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = letter.trim();
    if (trimmed.length === 0) {
      setResult("Please enter a single letter.");
      return;
    }

    const char = trimmed[0];
    if (!/^[a-zA-Z]$/.test(char)) {
      setResult("Only alphabetic letters are allowed.");
      return;
    }

    const lower = char.toLowerCase();
    if (lower === "a" || lower === "e" || lower === "i" || lower === "o" || lower === "u") {
      setResult(`\"${char}\" is a vowel.`);
    } else {
      setResult(`\"${char}\" is a consonant.`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="checker-form">
      <label htmlFor="letter">Enter a letter:</label>
      <input
        id="letter"
        type="text"
        maxLength="1"
        value={letter}
        onChange={(event) => setLetter(event.target.value)}
        placeholder="a"
      />
      <button type="submit">Check</button>
      <p className="result">{result}</p>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<VowelConsonantChecker />);
