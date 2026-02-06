import{aU as l,h as e,j as a}from"./iframe-C561pEjZ.js";const u={title:"Components/Switch",component:l,tags:["autodocs"],argTypes:{}},h=n=>({components:{VSwitch:l},setup(){return{args:n}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(l,{...n},()=>"Выбрать значение")])}}),i=h.bind({});i.args={};const s={render:n=>({components:{VSwitch:l},setup(){return{args:n}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n},{}),e(a,{},()=>"Common")]),e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n,size:"small"},{}),e(a,{},()=>"Mini")]),e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n,size:"small"},{checked:()=>"checked",unchecked:()=>"unchecked"}),e(a,{},()=>"Mini Slots")]),e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n,loading:!0,size:"small"},{}),e(a,{},()=>"Loading Mini")]),e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n,loading:!0},{}),e(a,{},()=>"Loading")]),e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n,loading:!0,modelValue:!0},{}),e(a,{},()=>"Loading checked")]),e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n,disabled:!0,modelValue:!1},{}),e(a,{},()=>"Disabled")]),e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n,disabled:!0,modelValue:!0},{}),e(a,{},()=>"Disabled Active")]),e("div",{style:{display:"flex",gap:"10px"}},[e(l,{...n},{checked:()=>"checked",unchecked:()=>"unchecked"}),e(a,{},()=>"Slots")])])}}),args:{}};var t,d,p;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    VSwitch
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
    }, [h(VSwitch, {
      ...args
    }, () => "Выбрать значение")]);
  }
})`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var r,c,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSwitch
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
      }, [h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args
      }, {}), h(VText, {}, () => "Common")]), h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args,
        size: "small"
      }, {}), h(VText, {}, () => "Mini")]), h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args,
        size: "small"
      }, {
        checked: () => "checked",
        unchecked: () => "unchecked"
      }), h(VText, {}, () => "Mini Slots")]), h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args,
        loading: true,
        size: "small"
      }, {}), h(VText, {}, () => "Loading Mini")]), h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args,
        loading: true
      }, {}), h(VText, {}, () => "Loading")]), h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args,
        loading: true,
        modelValue: true
      }, {}), h(VText, {}, () => "Loading checked")]), h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args,
        disabled: true,
        modelValue: false
      }, {}), h(VText, {}, () => "Disabled")]), h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args,
        disabled: true,
        modelValue: true
      }, {}), h(VText, {}, () => "Disabled Active")]), h("div", {
        style: {
          display: "flex",
          gap: "10px"
        }
      }, [h(VSwitch, {
        ...args
      }, {
        checked: () => "checked",
        unchecked: () => "unchecked"
      }), h(VText, {}, () => "Slots")])]);
    }
  }),
  args: {}
}`,...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const y=["Primary","AllInOne"];export{s as AllInOne,i as Primary,y as __namedExportsOrder,u as default};
