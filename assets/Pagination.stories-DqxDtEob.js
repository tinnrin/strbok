import{ah as e,h as a}from"./iframe-C561pEjZ.js";const u={title:"Components/Pagination",component:e,tags:["autodocs"],argTypes:{}},m=n=>({components:{VPagination:e},setup(){return{args:n}},render(){return a("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[a(e,{...n})])}}),r=m.bind({});r.args={totalRows:1e3,pageSizes:[25,50,200,500],showQuickJumper:!0,showLastsPages:!0};const t={render:n=>({components:{VPagination:e},setup(){return{args:n}},render(){return a("div",{style:{display:"flex",flexDirection:"column",gap:"50px"}},[a(e,{...n,size:"small"}),a(e,{...n,size:"default"}),a(e,{...n,placement:"center"}),a(e,{...n,placement:"right"})])}}),args:{totalRows:1e3,pageSizes:[25,50,200]}};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    VPagination
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
    }, [h(VPagination, {
      ...args
    })]);
  }
})`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VPagination
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
          gap: "50px"
        }
      }, [h(VPagination, {
        ...args,
        size: "small"
      }), h(VPagination, {
        ...args,
        size: "default"
      }), h(VPagination, {
        ...args,
        placement: "center"
      }), h(VPagination, {
        ...args,
        placement: "right"
      })]);
    }
  }),
  args: {
    totalRows: 1000,
    pageSizes: [25, 50, 200]
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const d=["Primary","AllInOne"];export{t as AllInOne,r as Primary,d as __namedExportsOrder,u as default};
