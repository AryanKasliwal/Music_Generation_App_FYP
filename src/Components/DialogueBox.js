import '../Styles/DialogueBox.css'

function DialogueBox(props) {
    return (
      <div className="dialogue-box">
        <div className="dialogue-header">
          <h2>File not chosen</h2>
          <button onClick={props.onClose}>Close</button>
        </div>
        <div className="dialogue-content">
          <p>Please select a file before clicking upload</p>
        </div>
      </div>
    );
}

export default DialogueBox;