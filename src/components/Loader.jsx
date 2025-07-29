import React from "react";

const CanvasLoader = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    minHeight: "200px"
  }}>
    <div style={{
      width: "48px",
      height: "48px",
      border: "6px solid #915eff",
      borderTop: "6px solid transparent",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }} />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}
    </style>
  </div>
);

export default CanvasLoader;