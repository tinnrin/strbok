import{aV as r,h as a}from"./iframe-C561pEjZ.js";const b={title:"Components/Tabs",component:r,tags:["autodocs"],argTypes:{}},d=[{id:0,label:"Tab 1"},{id:1,label:"Tab 2"},{id:2,label:"Tab 3"},{id:3,label:"Tab 4"}],m=n=>({components:{VTabs:r},setup(){return{args:n}},render(){return a("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[a(r,{...n},()=>"Выбрать значение")])}}),e=m.bind({});e.args={tabs:d};const s={render:n=>({components:{VTabs:r},setup(){return{args:n}},render(){return a("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[a(r,{...n},()=>"Выбрать значение")])}}),args:{tabs:d}};var t,o,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    VTabs
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
    }, [h(VTabs, {
      ...args
    }, () => "Выбрать значение")]);
  }
})`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,c,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VTabs
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
      }, [h(VTabs, {
        ...args
      }, () => "Выбрать значение")]);
    }
  }),
  args: {
    tabs: TABS
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const g=["Primary","AllInOne"];export{s as AllInOne,e as Primary,g as __namedExportsOrder,b as default};
