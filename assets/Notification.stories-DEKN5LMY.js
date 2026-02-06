import{z as B,af as N,M as x,B as b,O as I,Q as k,_ as v,ag as i,h as t}from"./iframe-C561pEjZ.js";const n=B({__name:"ButtonNotification",props:{type:{},process:{type:Boolean},text:{},title:{},big:{type:Boolean}},setup(e){const o=e,c=N(),d=o.big?Array.from({length:5},()=>"Some interesting message").join(" "):"Some interesting message",m=o.big?Array.from({length:20},()=>"Title").join(" "):"Title";function h(){if(o.process){const s=c(o.text??"Please wait loading",o.title??"Title",{type:"loading",duration:0});setTimeout(()=>{c(o.text??"The loading has been completed",o.title??"Title",{type:"success",id:s,duration:3})},2e3)}else c(o.text??d,o.title??m,{type:o.type??"success",onClose:s=>{console.log("close ",s)},okButtonHandler:()=>console.log("ok"),cancelButtonHandler:()=>console.log("cancel")})}return(s,C)=>(b(),x(v,{onClick:h},{default:I(()=>[k(s.$slots,"default")]),_:3}))}});n.__docgenInfo={exportName:"default",displayName:"ButtonNotification",type:1,props:[{name:"big",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"type",global:!1,description:"",tags:[],required:!1,type:"NotificationType",declarations:[],schema:{kind:"enum",type:"NotificationType",schema:['"default"','"error"','"loading"','"success"','"warning"','"info"','"confirm"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"title",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"text",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"process",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"big",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"type",type:"NotificationType",description:"",declarations:[],schema:{kind:"enum",type:"NotificationType",schema:['"default"','"error"','"loading"','"success"','"warning"','"info"','"confirm"']}},{name:"title",type:"string",description:"",declarations:[],schema:"string"},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"process",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"C:/Users/polina/Documents/JS/bbt/vue-ui/src/tech/ButtonNotification.vue"};const P={title:"Components/Notification",component:i,tags:["autodocs"],argTypes:{}},S=e=>({setup(){return{args:e}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[t(i,{...e},()=>t("div",{style:{display:"flex",gap:"20px",paddingBlockStart:"300px"}},[t(n,{type:"success"},()=>"Success")]))])}}),a=S.bind({});a.args={};const r={render:e=>({setup(){return{args:e}},render(){return t("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},[t(i,{...e},()=>t("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},["Top-Right",t(n,{type:"success"},()=>"Success"),t(n,{type:"warning"},()=>"Warning"),t(n,{type:"error"},()=>"Error"),t(n,{type:"info"},()=>"Info"),t(n,{type:"loading"},()=>"Loading"),t(n,{type:"default"},()=>"Default"),t(n,{type:"confirm"},()=>"Confirm"),t(n,{process:!0},()=>"Process"),t(n,{type:"success",big:!0},()=>"Big")])),t(i,{...e,position:"top-left"},()=>t("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},["Top-Left",t(n,{type:"success"},()=>"Success"),t(n,{type:"warning"},()=>"Warning"),t(n,{type:"error"},()=>"Error"),t(n,{type:"info"},()=>"Info"),t(n,{type:"loading"},()=>"Loading"),t(n,{type:"default"},()=>"Default"),t(n,{type:"confirm"},()=>"Confirm"),t(n,{process:!0},()=>"Process"),t(n,{type:"success",big:!0},()=>"Big")])),t(i,{...e,position:"top"},()=>t("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},["Top",t(n,{type:"success"},()=>"Success"),t(n,{type:"warning"},()=>"Warning"),t(n,{type:"error"},()=>"Error"),t(n,{type:"info"},()=>"Info"),t(n,{type:"loading"},()=>"Loading"),t(n,{type:"default"},()=>"Default"),t(n,{type:"confirm"},()=>"Confirm"),t(n,{process:!0},()=>"Process"),t(n,{type:"success",big:!0},()=>"Big")])),t(i,{...e,position:"bottom-right"},()=>t("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},["Bottom-Right",t(n,{type:"success"},()=>"Success"),t(n,{type:"warning"},()=>"Warning"),t(n,{type:"error"},()=>"Error"),t(n,{type:"info"},()=>"Info"),t(n,{type:"loading"},()=>"Loading"),t(n,{type:"default"},()=>"Default"),t(n,{type:"confirm"},()=>"Confirm"),t(n,{process:!0},()=>"Process"),t(n,{type:"success",big:!0},()=>"Big")])),t(i,{...e,position:"bottom-left"},()=>t("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},["Bottom-Left",t(n,{type:"success"},()=>"Success"),t(n,{type:"warning"},()=>"Warning"),t(n,{type:"error"},()=>"Error"),t(n,{type:"info"},()=>"Info"),t(n,{type:"loading"},()=>"Loading"),t(n,{type:"default"},()=>"Default"),t(n,{type:"confirm"},()=>"Confirm"),t(n,{process:!0},()=>"Process"),t(n,{type:"success",big:!0},()=>"Big")])),t(i,{...e,position:"bottom"},()=>t("div",{style:{display:"flex",gap:"20px",alignItems:"center"}},["Bottom",t(n,{type:"success"},()=>"Success"),t(n,{type:"warning"},()=>"Warning"),t(n,{type:"error"},()=>"Error"),t(n,{type:"info"},()=>"Info"),t(n,{type:"loading"},()=>"Loading"),t(n,{type:"default"},()=>"Default"),t(n,{type:"confirm"},()=>"Confirm"),t(n,{process:!0},()=>"Process"),t(n,{type:"success",big:!0},()=>"Big")]))])}}),args:{}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
    }, [h(VNotification, {
      ...args
    }, () => h("div", {
      style: {
        display: "flex",
        gap: "20px",
        paddingBlockStart: "300px"
      }
    }, [h(ButtonNotification, {
      type: "success"
    }, () => "Success")]))]);
  }
})`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var f,y,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
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
      }, [h(VNotification, {
        ...args
      }, () => h("div", {
        style: {
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }
      }, ["Top-Right", h(ButtonNotification, {
        type: "success"
      }, () => "Success"), h(ButtonNotification, {
        type: "warning"
      }, () => "Warning"), h(ButtonNotification, {
        type: "error"
      }, () => "Error"), h(ButtonNotification, {
        type: "info"
      }, () => "Info"), h(ButtonNotification, {
        type: "loading"
      }, () => "Loading"), h(ButtonNotification, {
        type: "default"
      }, () => "Default"), h(ButtonNotification, {
        type: "confirm"
      }, () => "Confirm"), h(ButtonNotification, {
        process: true
      }, () => "Process"), h(ButtonNotification, {
        type: "success",
        big: true
      }, () => "Big")])), h(VNotification, {
        ...args,
        position: "top-left"
      }, () => h("div", {
        style: {
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }
      }, ["Top-Left", h(ButtonNotification, {
        type: "success"
      }, () => "Success"), h(ButtonNotification, {
        type: "warning"
      }, () => "Warning"), h(ButtonNotification, {
        type: "error"
      }, () => "Error"), h(ButtonNotification, {
        type: "info"
      }, () => "Info"), h(ButtonNotification, {
        type: "loading"
      }, () => "Loading"), h(ButtonNotification, {
        type: "default"
      }, () => "Default"), h(ButtonNotification, {
        type: "confirm"
      }, () => "Confirm"), h(ButtonNotification, {
        process: true
      }, () => "Process"), h(ButtonNotification, {
        type: "success",
        big: true
      }, () => "Big")])), h(VNotification, {
        ...args,
        position: "top"
      }, () => h("div", {
        style: {
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }
      }, ["Top", h(ButtonNotification, {
        type: "success"
      }, () => "Success"), h(ButtonNotification, {
        type: "warning"
      }, () => "Warning"), h(ButtonNotification, {
        type: "error"
      }, () => "Error"), h(ButtonNotification, {
        type: "info"
      }, () => "Info"), h(ButtonNotification, {
        type: "loading"
      }, () => "Loading"), h(ButtonNotification, {
        type: "default"
      }, () => "Default"), h(ButtonNotification, {
        type: "confirm"
      }, () => "Confirm"), h(ButtonNotification, {
        process: true
      }, () => "Process"), h(ButtonNotification, {
        type: "success",
        big: true
      }, () => "Big")])), h(VNotification, {
        ...args,
        position: "bottom-right"
      }, () => h("div", {
        style: {
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }
      }, ["Bottom-Right", h(ButtonNotification, {
        type: "success"
      }, () => "Success"), h(ButtonNotification, {
        type: "warning"
      }, () => "Warning"), h(ButtonNotification, {
        type: "error"
      }, () => "Error"), h(ButtonNotification, {
        type: "info"
      }, () => "Info"), h(ButtonNotification, {
        type: "loading"
      }, () => "Loading"), h(ButtonNotification, {
        type: "default"
      }, () => "Default"), h(ButtonNotification, {
        type: "confirm"
      }, () => "Confirm"), h(ButtonNotification, {
        process: true
      }, () => "Process"), h(ButtonNotification, {
        type: "success",
        big: true
      }, () => "Big")])), h(VNotification, {
        ...args,
        position: "bottom-left"
      }, () => h("div", {
        style: {
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }
      }, ["Bottom-Left", h(ButtonNotification, {
        type: "success"
      }, () => "Success"), h(ButtonNotification, {
        type: "warning"
      }, () => "Warning"), h(ButtonNotification, {
        type: "error"
      }, () => "Error"), h(ButtonNotification, {
        type: "info"
      }, () => "Info"), h(ButtonNotification, {
        type: "loading"
      }, () => "Loading"), h(ButtonNotification, {
        type: "default"
      }, () => "Default"), h(ButtonNotification, {
        type: "confirm"
      }, () => "Confirm"), h(ButtonNotification, {
        process: true
      }, () => "Process"), h(ButtonNotification, {
        type: "success",
        big: true
      }, () => "Big")])), h(VNotification, {
        ...args,
        position: "bottom"
      }, () => h("div", {
        style: {
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }
      }, ["Bottom", h(ButtonNotification, {
        type: "success"
      }, () => "Success"), h(ButtonNotification, {
        type: "warning"
      }, () => "Warning"), h(ButtonNotification, {
        type: "error"
      }, () => "Error"), h(ButtonNotification, {
        type: "info"
      }, () => "Info"), h(ButtonNotification, {
        type: "loading"
      }, () => "Loading"), h(ButtonNotification, {
        type: "default"
      }, () => "Default"), h(ButtonNotification, {
        type: "confirm"
      }, () => "Confirm"), h(ButtonNotification, {
        process: true
      }, () => "Process"), h(ButtonNotification, {
        type: "success",
        big: true
      }, () => "Big")]))]);
    }
  }),
  args: {}
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const T=["Primary","AllInOne"];export{r as AllInOne,a as Primary,T as __namedExportsOrder,P as default};
