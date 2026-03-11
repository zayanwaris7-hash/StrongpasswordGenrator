import { useCallback, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passref=useRef(null);/*return an object like this {cuurrent : null} */
  const copypass=()=>{
    /* .cuureeet .? means optionaly chaning only select if data exist in input field */
    passref.current?.select(); 
    window.navigator.clipboard.writeText(pass);
  }
  const generatePass = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "!#$%^&*()_+{}|~,.";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      password += str[index];
    }

    setPass(password);
  }, [length, num, char]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Password Generator
        </h2>

        <input
          ref={passref}
          type="text"
          className="w-full mb-6 px-4 py-2 border rounded-lg text-center font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Generated Password"
          value={pass}
          readOnly
        />
        

        
        <div className="mb-4">
          <label className="block text-sm mb-2">
            Length: <span className="font-semibold">{length}</span>
          </label>
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

    
        <div className="space-y-3 mb-6 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={num}
              onChange={() => setNum(!num)}
              className="accent-blue-500"
            />
             Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={char}
              onChange={() => setChar(!char)}
              className="accent-blue-500"
            />
            Symbols
          </label>
        </div>

        <div  className="space-y-1">
        <button
          onClick={generatePass}
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Generate Password
        </button>
        <button
          onClick={copypass}
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Copy Password
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
