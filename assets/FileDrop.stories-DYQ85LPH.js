import{p as n,h as r}from"./iframe-C561pEjZ.js";const i={title:"Components/FileDrop",component:n,tags:["autodocs"],argTypes:{}},p=o=>({components:{VFileDrop:n},setup(){return{args:o}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px",height:"300px",border:"1px solid var(--ksd-border-color)"}},[r(n,{...o,onUpload:l=>console.log(l)},{default:()=>"Переместите файл",over:()=>"Импорт файла"})])}}),e=p.bind({});e.args={};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    VFileDrop
  },
  setup() {
    return {
      args
    };
  },
  render() {
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
        height: "300px",
        border: "1px solid var(--ksd-border-color)"
      }
    }, [h(VFileDrop,
    // eslint-disable-next-line no-console
    {
      ...args,
      onUpload: value => console.log(value)
    }, {
      default: () => "Переместите файл",
      over: () => "Импорт файла"
    })]);
  }
})`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,i as default};
