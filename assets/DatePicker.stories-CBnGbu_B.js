import{f as a,h as l}from"./iframe-C561pEjZ.js";const V={title:"Components/DatePicker",component:a,tags:["autodocs"],argTypes:{}},i=n=>({components:{VDatePicker:a},setup(){return{args:n}},render(){return l("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[l(a,{...n,"onUpdate:modelValue":e=>{console.log("updated",e)}})])}}),o=i.bind({});o.args={};const t={render:n=>({components:{VDatePicker:a},setup(){return{args:n}},render(){return l("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[l(a,{...n,class:"testclass",displayFormat:"ru-dot","onUpdate:modelValue":e=>{console.log("updated",e)}}),l(a,{...n,displayFormat:"ru-dot",multiple:!0,class:"testclass","onUpdate:modelValue":e=>{console.log("updated",e)}}),l(a,{...n,displayFormat:"ru-dot",modelValue:"2025-12-24",disabled:!0,"onUpdate:modelValue":e=>{console.log("updated",e)}}),l(a,{...n,displayFormat:"ru-dot",modelValue:["2025-12-24","2025-12-28"],multiple:!0,disabled:!0,"onUpdate:modelValue":e=>{console.log("updated",e)}})])}}),args:{}};var d,r,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    VDatePicker
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
    }, [h(VDatePicker, {
      ...args,
      "onUpdate:modelValue": value => {
        console.log("updated", value);
      }
    })]);
  }
})`,...(u=(r=o.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VDatePicker
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
      }, [h(VDatePicker, {
        ...args,
        class: "testclass",
        displayFormat: "ru-dot",
        "onUpdate:modelValue": value => {
          console.log("updated", value);
        }
      }), h(VDatePicker, {
        ...args,
        displayFormat: "ru-dot",
        multiple: true,
        class: "testclass",
        "onUpdate:modelValue": value => {
          console.log("updated", value);
        }
      }), h(VDatePicker, {
        ...args,
        displayFormat: "ru-dot",
        modelValue: "2025-12-24",
        disabled: true,
        "onUpdate:modelValue": value => {
          console.log("updated", value);
        }
      }), h(VDatePicker, {
        ...args,
        displayFormat: "ru-dot",
        modelValue: ["2025-12-24", "2025-12-28"],
        multiple: true,
        disabled: true,
        "onUpdate:modelValue": value => {
          console.log("updated", value);
        }
      })
      // h(VDatePicker, {
      //   ...args,
      //   displayFormat: "ru-slash",
      //   modelValue: "2025-10-15",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   displayFormat: "iso",
      //   modelValue: "2025-10-15",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   displayFormat: "ru-dot",
      //   view: "months",
      //   modelValue: "2025-10-15",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   displayFormat: "ru-slash",
      //   view: "months",
      //   modelValue: "2025-10-15",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   displayFormat: "iso",
      //   view: "months",
      //   modelValue: "2025-10-15",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   displayFormat: "ru-dot",
      //   view: "years",
      //   modelValue: "2025-10-15",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   displayFormat: "ru-slash",
      //   view: "years",
      //   modelValue: "2025-10-15",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   displayFormat: "iso",
      //   view: "years",
      //   modelValue: "2025-10-15",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   multiple: true,
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   multiple: true,
      //   size: "large",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   multiple: true,
      //   view: "months",
      //   outputFormat: "YYYY.MM",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      // h(VDatePicker, {
      //   ...args,
      //   multiple: true,
      //   view: "years",
      //   outputFormat: "YYYY",
      //   "onUpdate:modelValue": (value) => {
      //     console.log("updated", value);
      //   },
      // }),
      ]);
    }
  }),
  args: {}
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const g=["Primary","AllInOne"];export{t as AllInOne,o as Primary,g as __namedExportsOrder,V as default};
