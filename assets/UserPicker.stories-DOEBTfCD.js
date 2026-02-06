import{b7 as n,h as s,s as d}from"./iframe-C561pEjZ.js";const x={title:"Components/UserPicker",component:n,tags:["autodocs"],argTypes:{}},m=Array.from({length:30},(e,t)=>({id:t,name:d(10),username:`user_${t}`})),g=e=>({components:{VUserPicker:n},setup(){return{args:e}},render(){return s("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[s(n,{...e,multiple:!1,modelValue:2})])}}),r=g.bind({});r.args={users:m,disabled:!1};const a={render:e=>({components:{VUserPicker:n},setup(){return{args:e}},render(){return s("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[s(n,{...e,users:e.users}),s(n,{...e,multiple:!0,modelValue:[1,6]})])}}),args:{users:m}};var o,l,u;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    VUserPicker
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
    }, [h(VUserPicker, {
      ...args,
      multiple: false,
      modelValue: 2
    })]);
  }
})`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VUserPicker
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
      }, [h(VUserPicker, {
        ...args,
        users: args.users
      }), h(VUserPicker, {
        ...args,
        multiple: true,
        modelValue: [1, 6]
      })]);
    }
  }),
  args: {
    users: USERS
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const y=["Primary","AllInOne"];export{a as AllInOne,r as Primary,y as __namedExportsOrder,x as default};
