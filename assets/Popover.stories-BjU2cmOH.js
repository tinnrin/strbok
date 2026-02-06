import{ak as t,h as e,l as s,m as d,aj as u,_ as a}from"./iframe-C561pEjZ.js";const p={title:"Components/Popover",component:t,tags:["autodocs"],argTypes:{}},n={render:r=>({components:{VPopover:t},setup(){return{args:r}},render(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[e(t,{...r},{default:()=>e(a,{},()=>"Click"),content:()=>[e(s,{multiple:!0,nested:!0,modelValue:["first"],options:[{label:"first",value:"first"},{label:"second",value:"second"},{label:"third",value:"third"}]}),e(d),e(s,{nested:!0,options:[{label:"first",value:"first"},{label:"second",value:"second"},{label:"third",value:"third"}]}),e(u,{text:"Большое спасибо за внимание?",title:"Внимание",nested:!0},()=>e(a,{},()=>"Применить"))]})])}}),args:{disabled:!1}};var l,o,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VPopover
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
      }, [h(VPopover, {
        ...args
      }, {
        default: () => h(VButton, {}, () => "Click"),
        content: () => [h(VSelect, {
          multiple: true,
          nested: true,
          modelValue: ["first"],
          options: [{
            label: "first",
            value: "first"
          }, {
            label: "second",
            value: "second"
          }, {
            label: "third",
            value: "third"
          }]
        }), h(VInput), h(VSelect, {
          nested: true,
          options: [{
            label: "first",
            value: "first"
          }, {
            label: "second",
            value: "second"
          }, {
            label: "third",
            value: "third"
          }]
        }), h(VPopConfirm, {
          text: "Большое спасибо за внимание?",
          title: "Внимание",
          nested: true
        }, () => h(VButton, {}, () => "Применить"))]
      })]);
    }
  }),
  args: {
    disabled: false
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const m=["Primary"];export{n as Primary,m as __namedExportsOrder,p as default};
