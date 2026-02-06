import{g as e,h as n}from"./iframe-C561pEjZ.js";const x={title:"Components/Divider",component:e,tags:["autodocs"],argTypes:{}},c=a=>({components:{VDivider:e},setup(){return{args:a}},render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n(e,{...a})])}),t=c.bind({});t.args={};const r={render:a=>({components:{VDivider:e},setup(){return{args:a}},render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[n(e,{variant:"solid"}),n(e,{variant:"dashed"}),n(e,{variant:"dotted"}),n("div",{style:{display:"flex",gap:"20px"}},[n("span",{},"Text"),n(e,{type:"vertical",variant:"solid"}),n("span",{},"Text"),n(e,{type:"vertical",variant:"dashed"}),n("span",{},"Text"),n(e,{type:"vertical",variant:"dotted"}),n("span",{},"Text")]),n(e,{orientation:"center"},()=>n("span",{style:{whiteSpace:"nowrap",padding:"0px 10px"}},"Center")),n(e,{orientation:"left"},()=>n("span",{style:{whiteSpace:"nowrap",padding:"0px 10px"}},"Left")),n(e,{orientation:"right"},()=>n("span",{style:{whiteSpace:"nowrap",padding:"0px 10px"}},"Right"))])}),args:{}};var i,p,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    VDivider
  },
  setup() {
    return {
      args
    };
  },
  render: () => h("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, [h(VDivider, {
    ...args
  })])
})`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var d,o,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VDivider
    },
    setup() {
      return {
        args
      };
    },
    render: () => h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }
    }, [h(VDivider, {
      variant: "solid"
    }), h(VDivider, {
      variant: "dashed"
    }), h(VDivider, {
      variant: "dotted"
    }), h("div", {
      style: {
        display: "flex",
        gap: "20px"
      }
    }, [h("span", {}, "Text"), h(VDivider, {
      type: "vertical",
      variant: "solid"
    }), h("span", {}, "Text"), h(VDivider, {
      type: "vertical",
      variant: "dashed"
    }), h("span", {}, "Text"), h(VDivider, {
      type: "vertical",
      variant: "dotted"
    }), h("span", {}, "Text")]), h(VDivider, {
      orientation: "center"
    }, () => h("span", {
      style: {
        whiteSpace: "nowrap",
        padding: "0px 10px"
      }
    }, "Center")), h(VDivider, {
      orientation: "left"
    }, () => h("span", {
      style: {
        whiteSpace: "nowrap",
        padding: "0px 10px"
      }
    }, "Left")), h(VDivider, {
      orientation: "right"
    }, () => h("span", {
      style: {
        whiteSpace: "nowrap",
        padding: "0px 10px"
      }
    }, "Right"))])
  }),
  args: {}
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const h=["Primary","AllInOne"];export{r as AllInOne,t as Primary,h as __namedExportsOrder,x as default};
