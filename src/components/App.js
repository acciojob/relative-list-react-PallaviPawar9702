import React from 'react';

const App = () => {
  const relatives = [
    "Grandfather",
    "Grandmother",
    "Uncle",
    "Aunt",
    "Cousin"
  ];

  return (
    <div id="main">
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>
            {relative}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
