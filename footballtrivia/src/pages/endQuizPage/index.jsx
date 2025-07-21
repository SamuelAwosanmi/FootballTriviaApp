import Link from "next/link";
import ToggleButton from "../../../components/ToggleButton";
import football from "../../../components/football";
export default function EndQuizPage({ score, total }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF7ED",
        color: "#1F2937",
        padding: "20px",
        textAlign: "center",
        gap: "20px",
         backgroundImage: "url('stadium.jpg')",

      }}
    >

      
      <h1 style={{ fontSize: "30px", fontWeight: "bold", color: "#10B981" }}>
        🎉 You have now completed the quizz 🎉
      </h1>

      <p style={{ fontSize: "15px", maxWidth: "400px", color: 'white', fontStyle: 'bold', }}>
        Thanks for playing! You can try again or tune into other difficulty levels.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/">
          <button
            style={{
              backgroundColor: "#EF4444",
              color: "white",
              padding: "10px 25px",
              fontSize: "15px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Start page
          </button>
        </Link>

        <Link href="/difficultySelector">
          <button
            style={{
              backgroundColor: "#10B981",
              color: "white",
              padding: "10px 25px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Try another level
          </button>
        </Link>
      </div>
      <ToggleButton/>
    </div>
  );
}
