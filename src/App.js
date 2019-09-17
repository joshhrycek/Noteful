import React from 'react';

function App() {
  return (
    <main className='App'>
      
      <Route
        exact
        path='/'
        render={() =>
          <MainPageCompnent />}
      />
      
      <Route
        path='/folder/:folder-id'
        render={() =>
          <FolderCompnent />}
      />

      <Route
        path='/note/:note-id'
        render={() =>
          <NoteCompnent />}
      />

    </main>
  );
}

export default App;