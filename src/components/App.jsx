import React from "react";
import FeedbackApp from "./FeedbackApp/FeedbackApp";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FeedbackApp />
    </div>
  );
};

export default App;