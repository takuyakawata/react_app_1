// ActionButton.jsx
export const ActionButton = ({ text, action }) => {
  return (
    <>
      <button type="button" onClick={action} >
        {text}
      </button>
    </>
  );
};