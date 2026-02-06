import{b5 as e,h as r}from"./iframe-C561pEjZ.js";const g={title:"Components/UserAvatars",component:e,tags:["autodocs"],argTypes:{}},d=n=>({components:{VUserAvatars:e},setup(){return{args:n}},render(){return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[r(e,{...n},()=>"Выбрать значение")])}}),m=[{name:"Test"},{name:"Vest"},{name:"Guest"},{name:"Muest"}],s=d.bind({});s.args={avatars:m};const t={render:n=>({components:{VUserAvatars:e},setup(){return{args:n}},render(){return r("div",{style:{display:"flex",flexDirection:"row",gap:"20px",width:"fit-content",height:"fit-content"}},[r(e,{...n}),r(e,{...n,size:"large"}),r(e,{...n,size:"small"}),r(e,{...n})])}}),args:{avatars:m}};var a,o,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    VUserAvatars
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
    }, [h(VUserAvatars, {
      ...args
    }, () => "Выбрать значение")]);
  }
})`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,p,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VUserAvatars
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
          flexDirection: "row",
          gap: "20px",
          width: "fit-content",
          height: "fit-content"
        }
      }, [h(VUserAvatars, {
        ...args
      }), h(VUserAvatars, {
        ...args,
        size: "large"
      }), h(VUserAvatars, {
        ...args,
        size: "small"
      }), h(VUserAvatars, {
        ...args
      })]);
    }
  }),
  args: {
    avatars: users
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const v=["Primary","AllInOne"];export{t as AllInOne,s as Primary,v as __namedExportsOrder,g as default};
