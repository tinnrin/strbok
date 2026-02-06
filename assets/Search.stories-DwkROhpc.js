import{aR as s,h as o,s as l}from"./iframe-C561pEjZ.js";const h={title:"Components/Search",component:s,tags:["autodocs"],argTypes:{}},u=e=>({components:{VSearch:s},setup(){return{args:e}},render(){return o("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[o(s,{...e,onClick:n=>console.log(n),placeholder:"Поиск"})])}}),r=u.bind({});r.args={options:[{title:"first",options:Array.from({length:150},(e,n)=>({value:n,label:l(50)}))},{title:"second",options:Array.from({length:150},(e,n)=>({value:n,label:l(50)}))}]};const t={render:e=>({components:{VSearch:s},setup(){return{args:e}},render(){return o("div",{options:void 0,style:{display:"flex",flexDirection:"column",gap:"20px"}},[o("span",{},["30000 items with length 50"]),o(s,{...e,onClick:n=>console.log(n),placeholder:"Поиск",debounce:120})])}}),args:{options:Array.from({length:3e4},(e,n)=>({value:n,label:l(50)}))}};var a,c,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    VSearch
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
        gap: "20px"
      }
    }, [
    // eslint-disable-next-line no-console
    h(VSearch, {
      ...args,
      onClick: key => console.log(key),
      placeholder: "Поиск"
    })]);
  }
})`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSearch
    },
    setup() {
      return {
        args
      };
    },
    render() {
      return h("div", {
        options: undefined,
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }
      }, [h("span", {}, ["30000 items with length 50"]), h(VSearch, {
        ...args,
        // eslint-disable-next-line no-console
        onClick: key => console.log(key),
        placeholder: "Поиск",
        debounce: 120
      })]);
    }
  }),
  args: {
    options: Array.from<unknown, SelectItem<string | number>>({
      length: 30000
    }, (_, i) => ({
      value: i,
      label: randomString(50)
    }))
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const y=["Primary","AllInOne"];export{t as AllInOne,r as Primary,y as __namedExportsOrder,h as default};
