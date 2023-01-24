export default function Hello() {
  return {
    oninit: function (vnode) {
      console.log("initialize component");
    },
    view: () => {
      console.log("hello render");
      return <div class="bg-purple-500">Hello everyone</div>;
    },
  };
}
