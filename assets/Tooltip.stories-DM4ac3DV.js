import{k as n,h as t,j as i,b3 as r,u as w}from"./iframe-C561pEjZ.js";const S={title:"Components/Tooltip",component:n,tags:["autodocs"],argTypes:{}},W=e=>({components:{VTooltip:n},setup(){return{args:e}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"20px",paddingTop:"200px",paddingLeft:"200px"}},[t(n,{...e,placement:"right-bottom",disabled:!1},()=>t(i,{ellipsis:!0,fit:!0,style:{height:"30px"}},()=>"Навести"))])}}),l=W.bind({});l.args={text:"Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"};const o={render:e=>({components:{VTooltip:n},setup(){return{args:e}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"10px",width:"200vw",height:"200vh"}},[t(n,{...e},()=>t(i,{ellipsis:!0,fit:!0},()=>"Обычный тултип")),t(n,{...e,openNotVisible:!0},()=>t(i,{ellipsis:!0,fit:!0,style:{maxWidth:"100px"}},()=>"Повляется когда текст не помещается")),t(n,{...e,openNotVisible:!0},()=>t(i,{ellipsis:!0,fit:!0},()=>"Повляется когда текст не помещается")),t(n,{...e,openAboveCursor:!0},()=>t(i,{ellipsis:!0,fit:!0},()=>"Стрелочка под курсором")),t(n,{...e,openAboveCursor:!0,stickyCursor:!0},()=>t(i,{ellipsis:!0,fit:!0},()=>"Стрелочка следует за курсором")),t(r,{vertical:!0,gap:30,style:{marginLeft:"300px",marginTop:"300px",maxWidth:"390px"}},()=>[t(r,{gap:20,flexAlign:"center",justify:"center"},()=>[t(n,{...e,placement:"top-left"},()=>t(i,{ellipsis:!0,fit:!0},()=>"t-left")),t(n,{...e,placement:"top-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"t-center")),t(n,{...e,placement:"top-right"},()=>t(i,{ellipsis:!0,fit:!0},()=>"t-right"))]),t(r,{gap:280},()=>[t(r,{gap:20,vertical:!0},()=>[t(n,{...e,placement:"left-top"},()=>t(i,{ellipsis:!0,fit:!0},()=>"l-top")),t(n,{...e,placement:"left-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"l-center")),t(n,{...e,placement:"left-bottom"},()=>t(i,{ellipsis:!0,fit:!0},()=>"l-bottom"))]),t(r,{gap:20,vertical:!0},()=>[t(n,{...e,placement:"right-top"},()=>t(i,{ellipsis:!0,fit:!0},()=>"r-top")),t(n,{...e,placement:"right-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"r-center")),t(n,{...e,placement:"right-bottom"},()=>t(i,{ellipsis:!0,fit:!0},()=>"r-bottom"))])]),t(r,{gap:20,flexAlign:"center",justify:"center"},()=>[t(n,{...e,placement:"bottom-left"},()=>t(i,{ellipsis:!0,fit:!0},()=>"b-left")),t(n,{...e,placement:"bottom-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"b-center")),t(n,{...e,placement:"bottom-right"},()=>t(i,{ellipsis:!0,fit:!0},()=>"b-right"))])])])}}),args:{text:"Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"}},p={render:e=>({components:{VTooltip:n},setup(){const c=w("div");return{args:e,div:c}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"10px",width:"100%",height:"100%"}},[t("div",{ref:"div",style:{border:"1px solid black",minHeight:"300px",minWidth:"500px",margin:"300px 300px 300px 300px",class:"test-tooltip-position",display:"flex",flexDirection:"column",position:"relative",gap:"50px"}},[t(n,{...e,visibleArea:this.div,placement:"top-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip top-center")),t(n,{...e,visibleArea:this.div,placement:"left-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip left-center")),t(n,{...e,visibleArea:this.div,placement:"right-top"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip right-top")),t(n,{...e,visibleArea:this.div,placement:"bottom-right"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip bottom-right"))])])}}),args:{text:"Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"}},s={render:e=>({components:{VTooltip:n},setup(){const c=w("div");return{args:e,div:c}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"10px",width:"100%",height:"100%"}},[t("div",{ref:"div",style:{border:"1px solid black",minHeight:"300px",minWidth:"500px",margin:"300px 300px 300px 300px",class:"test-tooltip-position",overflow:"auto"}},[t("div",{style:{height:"600px",paddingTop:"200px",display:"flex",flexDirection:"column",gap:"50px",position:"relative"}},[t(n,{...e,visibleArea:this.div,placement:"top-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip top-center")),t(n,{...e,visibleArea:this.div,placement:"left-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip left-center")),t(n,{...e,visibleArea:this.div,placement:"right-top"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip right-top")),t(n,{...e,visibleArea:this.div,placement:"bottom-right"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip bottom-right"))])])])}}),args:{text:"Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"}},a={render:e=>({components:{VTooltip:n},setup(){return{args:e}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"10px",width:"100%",height:"100%"}},[t("div",{ref:"div",style:{border:"1px solid black",minHeight:"300px",minWidth:"500px",margin:"300px 300px 300px 300px",class:"test-tooltip-position",overflow:"auto"}},[t("div",{style:{minHeight:"600px",paddingTop:"200px",display:"flex",flexDirection:"column",gap:"50px",position:"relative"}},[t(n,{...e,placement:"top-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip top-center")),t(n,{...e,placement:"left-center"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip left-center")),t(n,{...e,placement:"right-top"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip right-top")),t(n,{...e,placement:"bottom-right"},()=>t(i,{ellipsis:!0,fit:!0},()=>"Tooltip bottom-right"))])])])}}),args:{text:"Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"}};var u,h,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    VTooltip
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
        gap: "20px",
        paddingTop: "200px",
        paddingLeft: "200px"
      }
    }, [h(VTooltip, {
      ...args,
      placement: "right-bottom",
      disabled: false
    }, () => h(VText, {
      ellipsis: true,
      fit: true,
      style: {
        height: "30px"
      }
    }, () => "Навести"))]);
  }
})`,...(m=(h=l.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,d,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VTooltip
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
          gap: "10px",
          width: "200vw",
          height: "200vh"
        }
      }, [h(VTooltip, {
        ...args
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Обычный тултип")), h(VTooltip, {
        ...args,
        openNotVisible: true
      }, () => h(VText, {
        ellipsis: true,
        fit: true,
        style: {
          maxWidth: "100px"
        }
      }, () => "Повляется когда текст не помещается")), h(VTooltip, {
        ...args,
        openNotVisible: true
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Повляется когда текст не помещается")), h(VTooltip, {
        ...args,
        openAboveCursor: true
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Стрелочка под курсором")), h(VTooltip, {
        ...args,
        openAboveCursor: true,
        stickyCursor: true
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Стрелочка следует за курсором")), h(VFlex, {
        vertical: true,
        gap: 30,
        style: {
          marginLeft: "300px",
          marginTop: "300px",
          maxWidth: "390px"
        }
      }, () => [h(VFlex, {
        gap: 20,
        flexAlign: "center",
        justify: "center"
      }, () => [h(VTooltip, {
        ...args,
        placement: "top-left"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "t-left")), h(VTooltip, {
        ...args,
        placement: "top-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "t-center")), h(VTooltip, {
        ...args,
        placement: "top-right"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "t-right"))]), h(VFlex, {
        gap: 280
      }, () => [h(VFlex, {
        gap: 20,
        vertical: true
      }, () => [h(VTooltip, {
        ...args,
        placement: "left-top"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "l-top")), h(VTooltip, {
        ...args,
        placement: "left-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "l-center")), h(VTooltip, {
        ...args,
        placement: "left-bottom"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "l-bottom"))]), h(VFlex, {
        gap: 20,
        vertical: true
      }, () => [h(VTooltip, {
        ...args,
        placement: "right-top"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "r-top")), h(VTooltip, {
        ...args,
        placement: "right-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "r-center")), h(VTooltip, {
        ...args,
        placement: "right-bottom"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "r-bottom"))])]), h(VFlex, {
        gap: 20,
        flexAlign: "center",
        justify: "center"
      }, () => [h(VTooltip, {
        ...args,
        placement: "bottom-left"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "b-left")), h(VTooltip, {
        ...args,
        placement: "bottom-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "b-center")), h(VTooltip, {
        ...args,
        placement: "bottom-right"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "b-right"))])])]);
    }
  }),
  args: {
    text: "Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"
  }
}`,...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,T,v;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VTooltip
    },
    setup() {
      const div = useTemplateRef("div");
      return {
        args,
        div
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          height: "100%"
        }
      }, [h("div", {
        ref: "div",
        style: {
          border: "1px solid black",
          minHeight: "300px",
          minWidth: "500px",
          margin: "300px 300px 300px 300px",
          class: "test-tooltip-position",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          gap: "50px"
        }
      }, [h(VTooltip, {
        ...args,
        visibleArea: this.div,
        placement: "top-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip top-center")), h(VTooltip, {
        ...args,
        visibleArea: this.div,
        placement: "left-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip left-center")), h(VTooltip, {
        ...args,
        visibleArea: this.div,
        placement: "right-top"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip right-top")), h(VTooltip, {
        ...args,
        visibleArea: this.div,
        placement: "bottom-right"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip bottom-right"))])]);
    }
  }),
  args: {
    text: "Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"
  }
}`,...(v=(T=p.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var V,b,y;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VTooltip
    },
    setup() {
      const div = useTemplateRef("div");
      return {
        args,
        div
      };
    },
    render() {
      return h("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          height: "100%"
        }
      }, [h("div", {
        ref: "div",
        style: {
          border: "1px solid black",
          minHeight: "300px",
          minWidth: "500px",
          margin: "300px 300px 300px 300px",
          class: "test-tooltip-position",
          overflow: "auto"
        }
      }, [h("div", {
        style: {
          height: "600px",
          paddingTop: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          position: "relative"
        }
      }, [h(VTooltip, {
        ...args,
        visibleArea: this.div,
        placement: "top-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip top-center")), h(VTooltip, {
        ...args,
        visibleArea: this.div,
        placement: "left-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip left-center")), h(VTooltip, {
        ...args,
        visibleArea: this.div,
        placement: "right-top"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip right-top")), h(VTooltip, {
        ...args,
        visibleArea: this.div,
        placement: "bottom-right"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip bottom-right"))])])]);
    }
  }),
  args: {
    text: "Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var A,D,k;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VTooltip
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
          gap: "10px",
          width: "100%",
          height: "100%"
        }
      }, [h("div", {
        ref: "div",
        style: {
          border: "1px solid black",
          minHeight: "300px",
          minWidth: "500px",
          margin: "300px 300px 300px 300px",
          class: "test-tooltip-position",
          overflow: "auto"
        }
      }, [h("div", {
        style: {
          minHeight: "600px",
          paddingTop: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          position: "relative"
        }
      }, [h(VTooltip, {
        ...args,
        placement: "top-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip top-center")), h(VTooltip, {
        ...args,
        placement: "left-center"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip left-center")), h(VTooltip, {
        ...args,
        placement: "right-top"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip right-top")), h(VTooltip, {
        ...args,
        placement: "bottom-right"
      }, () => h(VText, {
        ellipsis: true,
        fit: true
      }, () => "Tooltip bottom-right"))])])]);
    }
  }),
  args: {
    text: "Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа, Большой текст для тестов тултипа"
  }
}`,...(k=(D=a.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const H=["Primary","AllInOne","PositionCheckInVisibleArea","PositionCheckInVisibleAreaWithScroll","PositionCheckWithScroll"];export{o as AllInOne,p as PositionCheckInVisibleArea,s as PositionCheckInVisibleAreaWithScroll,a as PositionCheckWithScroll,l as Primary,H as __namedExportsOrder,S as default};
