export default function Btn({ children }) {
  return (
    <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:rounded-xl hover:drop-shadow-xl rounded transition-all text-lg">
      {children}
    </button>
  );
}
