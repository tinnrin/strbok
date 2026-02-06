import{at as t,h as n}from"./iframe-C561pEjZ.js";const c={title:"Components/RadioGroup",component:t,tags:["autodocs"],argTypes:{}},d=e=>({components:{VRadioGroup:t},setup(){return{args:e}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n(t,{...e})])}}),o=d.bind({});o.args={options:[{value:1,label:"Значение 1"},{value:2,label:"Значение 2"},{value:3,label:"Значение 3"},{value:4,label:"Значение 4",disabled:!0},{value:5,label:"Значение 5"}]};const l={render:e=>({components:{VRadioGroup:t},setup(){return{args:e}},render(){return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n("div",{},[n(t,{...e})]),n("div",{},[n(t,{...e,optionType:"button",buttonStyle:"outline",size:"default"})]),n("div",{},[n(t,{...e,optionType:"button",buttonStyle:"solid",size:"default"})]),n("div",{},[n(t,{...e,optionType:"button",buttonStyle:"outline",size:"large"})]),n("div",{},[n(t,{...e,optionType:"button",buttonStyle:"outline",size:"small"})])])}}),args:{options:[{value:1,label:"Значение 1"},{value:2,label:"Значение 2"},{value:3,label:"Значение 3"},{value:4,label:"Значение 4",disabled:!0},{value:5,label:"Значение 5"}]}};var a,r,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    VRadioGroup
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
    }, [h(VRadioGroup, {
      ...args
    })]);
  }
})`,...(u=(r=o.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var i,s,p;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VRadioGroup
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
      }, [h("div", {}, [h(VRadioGroup, {
        ...args
      })]), h("div", {}, [h(VRadioGroup, {
        ...args,
        optionType: "button",
        buttonStyle: "outline",
        size: "default"
      })]), h("div", {}, [h(VRadioGroup, {
        ...args,
        optionType: "button",
        buttonStyle: "solid",
        size: "default"
      })]), h("div", {}, [h(VRadioGroup, {
        ...args,
        optionType: "button",
        buttonStyle: "outline",
        size: "large"
      })]), h("div", {}, [h(VRadioGroup, {
        ...args,
        optionType: "button",
        buttonStyle: "outline",
        size: "small"
      })])]);
    }
  }),
  args: {
    options: [{
      value: 1,
      label: "Значение 1"
    }, {
      value: 2,
      label: "Значение 2"
    }, {
      value: 3,
      label: "Значение 3"
    }, {
      value: 4,
      label: "Значение 4",
      disabled: true
    }, {
      value: 5,
      label: "Значение 5"
    }]
  }
}`,...(p=(s=l.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const v=["Primary","AllInOne"];export{l as AllInOne,o as Primary,v as __namedExportsOrder,c as default};
