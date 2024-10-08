import React, { Suspense } from "react";
// import "./App.css";
import MapMainFrame from "./Components/MapMainFrame.tsx/MapMainFrame";

function App():JSX.Element {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <div>
          <LazyMap />
        </div> */}
      </Suspense>
      <MapMainFrame />
    </>
  );
}

export default App;
