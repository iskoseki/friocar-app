export default function Btn({ children, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex text-white bg-${color}-500 hover:bg-${color}-600 
      py-2 px-6 focus:outline-none hover:rounded-xl hover:drop-shadow-xl
     rounded transition-all text-lg ml-auto `}
    >
      {children}
    </button>
  );
}
