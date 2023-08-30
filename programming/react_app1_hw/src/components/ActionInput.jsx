// ActionInput.jsx
export const ActionInput = ({ text, date, setText, setDate }) => {
  return (
    <>
      <td><input type="text" value={text} onChange={e => setText(e.target.value)} /></td>
      <td><input type="date" value={date} onChange={e => setDate(e.target.value)} /></td>
    </>
  );
};