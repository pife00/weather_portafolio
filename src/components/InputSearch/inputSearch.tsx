type Props = {
  search: () => void;
  setMsg: (msg: string) => void;
};

export const InputSearch: React.FC<Props> = (props: Props) => {
  const iconSearch =
    '<svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>';
  return (
    <div>
      <div className="flex outline-0 rounded-lg">
        <input
          placeholder="Quibdo,CO"
          type="text"
          className="
          border-none
          bg-transparent
          border-l-0
          border-r-0
          border-t-0
          border-l-transparent
          border-r-transparent
          border-t-transparent
        hover:border-b-white 
          rounded-lg font-bold
          block w-full p-2.5
          focus:ring-transparent 
          focus:border-l-none
          focus:border-t-none
          focus:border-r-none
          "
          onChange={(e) => props.setMsg(e.target.value)}
        />

        <button onClick={props.search} className="relative bg-transparent">
          <div dangerouslySetInnerHTML={{ __html: iconSearch }} />
        </button>
      </div>
    </div>
  );
};