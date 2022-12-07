function App({ type }) {
    return (
        <>
        <div style={{ display: 'flex' }} className="apple">
          <input
            type={type}
            maxLength={5}
            style={{ border: '1px solid blue', marginRight: '10px' }}
          />
          <input placeholder="hi there" />
          <textarea autoFocus spellCheck={true} />
        </div>
      </>
    )
}

export default App;