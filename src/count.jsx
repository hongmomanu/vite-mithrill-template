export default function Count(props) {
  const { state } = props.attrs;

  return {
    view: () => {
      console.log("Count render");
      return (
        <div class="flex gap-4">
          <div class=" text-gray-500">{state.count}</div>
          <button class="w-10" onclick={state.inc}>
            +
          </button>
          <button class="w-10" onclick={state.sub}>
            -
          </button>
        </div>
      );
    },
  };
}
