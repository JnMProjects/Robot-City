"use strict";(self.webpackChunknoplus_web=self.webpackChunknoplus_web||[]).push([[945],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/story/components/ui/Avatar/Avatar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),D_dev_NoPlus_web_noplus_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/Avatar.tsx"),_Avatar_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/story/components/ui/Avatar/Avatar.stories.tsx"),_layout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/layout/index.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,D_dev_NoPlus_web_noplus_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.W8,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"avatar",children:"Avatar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.p2,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.SD,{trigger:"Code",title:"",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"avatar-1",children:"Avatar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"usage",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:"import { Avatar } from './Avatar';\r\n\r\n<Avatar username=\"github\" />\n"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"arguments",children:"Arguments"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"username: string // The username of the user"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"size: number // The size of the avatar in px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"placeholder: boolean // If the avatar should be a placeholder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"links: boolean // If the avatar should be a link to the user's profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"avatargroup",children:"AvatarGroup"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"usage-1",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'import { AvatarGroup } from \'./Avatar\';\r\n\r\n<AvatarGroup users={["derjacklive", "octocat", "github"]} />\n'})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"arguments-1",children:"Arguments"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"users: string[] // The usernames of the users"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"size: number // The size of the avatar in px"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"limit: number // The maximum amount of avatars to display // Rest will be displayed as a number"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"types",children:"Types"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__._s,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.Uz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__.e,{username:"derjacklive",size:50})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.zj,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.BE,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.gk,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Default Avatar"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.I6,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.H2,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.cp,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Close"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.tb,{})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__._s,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.Uz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__.e,{placeholder:!0,size:50})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.zj,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.BE,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.gk,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Placeholder in Style of an Avatar"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.I6,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.Hl,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_3__.Placeholder}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.H2,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_3__.Placeholder}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.cp,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Close"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.tb,{})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__._s,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.Uz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__.Z,{users:["derjacklive","octocat","mutebefehl"],size:50})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.zj,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.BE,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.gk,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Avatar Group"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.I6,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__.Z,{users:["derjacklive","octocat","mutebefehl"],size:150}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'import { AvatarGroup } from \'./Avatar\';\r\n\r\n<AvatarGroup users={["derjacklive", "octocat", "mutebefehl"]} />\n'})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.cp,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Close"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.tb,{})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__._s,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.Uz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__.Z,{users:["mutebefehl","octocat","derjacklive","o"],limit:3,size:50})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.zj,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__.BE,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.gk,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Limited Avatar Group"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.I6,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_2__.Z,{users:["mutebefehl","octocat","derjacklive","o"],limit:3,size:100}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-tsx",children:'import { AvatarGroup } from \'./Avatar\';\r\n\r\n<AvatarGroup users={["mutebefehl", "octocat", "derjacklive", "o"]} limit={3} />\n'})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.cp,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Close"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_4__.tb,{})]})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,D_dev_NoPlus_web_noplus_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/story/components/ui/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Group:()=>Group,GroupLimited:()=>GroupLimited,Placeholder:()=>Placeholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Placeholder_parameters,_Placeholder_parameters_docs,_Placeholder_parameters1,_Group_parameters,_Group_parameters_docs,_Group_parameters1,_GroupLimited_parameters,_GroupLimited_parameters_docs,_GroupLimited_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_ui_Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/Avatar.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/Avatar",component:_ui_Avatar__WEBPACK_IMPORTED_MODULE_1__.e,argTypes:{size:{name:"Size",description:"Size of the avatar in pixels",defaultValue:100,control:{type:"number"}},username:{name:"Username",description:"Username // Github",defaultValue:"octocat",control:{type:"text"}},placeholder:{name:"Placeholder",defaultValue:!1,description:"Show placeholder instead of fetching Avatar",control:{type:"boolean"}}}},Default={args:{size:120,username:"octocat",placeholder:!1}},Placeholder={args:{...Default.args,placeholder:!0,username:""}},Group=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{users:["a","octocat","derjacklive","mutebefehl"]}),GroupLimited=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_1__.Z,{users:["mutebefehl","octocat","derjacklive","o"],limit:3});Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  args: {\n    size: 120,\n    username: "octocat",\n    placeholder: false\n  }\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...null===(_Placeholder_parameters=Placeholder.parameters)||void 0===_Placeholder_parameters?void 0:_Placeholder_parameters.docs,source:{originalSource:'{\n  args: {\n    ...Default.args,\n    placeholder: true,\n    username: ""\n  }\n}',...null===(_Placeholder_parameters1=Placeholder.parameters)||void 0===_Placeholder_parameters1||null===(_Placeholder_parameters_docs=_Placeholder_parameters1.docs)||void 0===_Placeholder_parameters_docs?void 0:_Placeholder_parameters_docs.source}}},Group.parameters={...Group.parameters,docs:{...null===(_Group_parameters=Group.parameters)||void 0===_Group_parameters?void 0:_Group_parameters.docs,source:{originalSource:'() => {\n  return <AvatarGroup users={["a", "octocat", "derjacklive", "mutebefehl"]} />;\n}',...null===(_Group_parameters1=Group.parameters)||void 0===_Group_parameters1||null===(_Group_parameters_docs=_Group_parameters1.docs)||void 0===_Group_parameters_docs?void 0:_Group_parameters_docs.source}}},GroupLimited.parameters={...GroupLimited.parameters,docs:{...null===(_GroupLimited_parameters=GroupLimited.parameters)||void 0===_GroupLimited_parameters?void 0:_GroupLimited_parameters.docs,source:{originalSource:'() => {\n  return <AvatarGroup users={["mutebefehl", "octocat", "derjacklive", "o"]} limit={3} />;\n}',...null===(_GroupLimited_parameters1=GroupLimited.parameters)||void 0===_GroupLimited_parameters1||null===(_GroupLimited_parameters_docs=_GroupLimited_parameters1.docs)||void 0===_GroupLimited_parameters_docs?void 0:_GroupLimited_parameters_docs.source}}};const __namedExportsOrder=["Default","Placeholder","Group","GroupLimited"]},"./src/components/layout/Collapse.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Collapse,p:()=>CollapseGroup});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-accordion/dist/index.mjs"),react_feather__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-feather/dist/icons/chevron-down.js"),_twm__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/twm.ts");const CollapseGroup=param=>{let{children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.bL,{type:"multiple",...props,defaultValue:["default"],className:"border-t border-b border-d-bg dark:border-l-bg",children})},CollapseItem=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.q7,{ref,...props,className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("border-t border-b border-d-bg/70 dark:border-l-bg/70",className)})}));CollapseItem.displayName="AccordionItem";const CollapseHeadRaw=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.Y9,{className:"flex text-l-txt",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.l9,{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-1 items-center justify-between text-l-txt dark:text-d-txt font py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",className),...props,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_4__.A,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})}));CollapseHeadRaw.displayName="CollapseHeadRaw";const CollapseContentRaw=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.UC,{ref,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("pb-4 pt-0",className),children})})}));CollapseContentRaw.displayName=_radix_ui_react_accordion__WEBPACK_IMPORTED_MODULE_2__.UC.displayName;let collapseCounter=0;const Collapse=param=>{let{defaultExpanded,title,trigger,children,className,no,...props}=param;const value=no||"collapse-".concat(collapseCounter++);return defaultExpanded?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CollapseItem,{className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("border-b border-t"),value:"default",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollapseHeadRaw,{children:trigger}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CollapseContentRaw,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:" font-bold border-collapse top-2",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("",className),...props,children})]})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CollapseItem,{className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("border-b border-t"),value,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollapseHeadRaw,{children:trigger}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CollapseContentRaw,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:" font-bold border-collapse top-2",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("",className),...props,children})]})]})};CollapseGroup.__docgenInfo={description:"",methods:[],displayName:"CollapseGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Collapse.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},no:{required:!1,tsType:{name:"string"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""}}}},"./src/components/layout/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Container});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),cva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/cva/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");(0,cva__WEBPACK_IMPORTED_MODULE_1__.Fj)({variants:{row:{true:"flex-row"},gap:{sm:"gap-4",md:"gap-8",lg:"gap-12"},center:{true:"items-center justify-center"},padding:{sm:"p-4",md:"p-8",lg:"p-12"},intent:{invisible:"f bg-transparent",primary:"f rounded bg-l-prim/40 dark:bg-d-prim/40",secondary:"f rounded bg-l-sec/40 dark:bg-d-sec/40",success:"f rounded bg-system-success/40",warning:"f rounded bg-system-warning/40",error:"f rounded bg-system-error/40"},shadow:{true:"shadow-md"},main:{true:"w-full h-full bg-l-bg dark:bg-d-bg overflow-hidden",false:"w-auto h-auto"},flex:{true:"flex"},roundsize:{none:"",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl"}},compoundVariants:[{row:!1,flex:!1,className:"grid grid-cols-1 gap-4"},{row:!1,flex:!0,className:"flex-col"}],defaultVariants:{center:!1,row:!1,padding:"md",gap:"md",intent:"invisible",main:!1}});const Container=param=>{let{children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props,children:react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children,(child=>{if(react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)){const flexProp=child.props.flex||1;return react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child,{flex:flexProp})}return child}))})};Container.__docgenInfo={description:"",methods:[],displayName:"Container",composes:["VariantProps"]}},"./src/components/layout/Drawer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BE:()=>DrawerHeader,I6:()=>DrawerDescription,Uz:()=>DrawerTrigger,_s:()=>Drawer,cp:()=>DrawerClose,gk:()=>DrawerTitle,tb:()=>DrawerFooter,zj:()=>DrawerContent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),vaul__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/vaul/dist/index.mjs"),_twm__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/twm.ts"),_ui_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/Button.tsx");const Drawer=param=>{let{shouldScaleBackground=!0,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vaul__WEBPACK_IMPORTED_MODULE_2__._.Root,{shouldScaleBackground,...props})};Drawer.displayName="Drawer";const DrawerTrigger=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,variant,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vaul__WEBPACK_IMPORTED_MODULE_2__._.Trigger,{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)(" w-auto h-auto",className),...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:variant="secondary",outlined:!0,children})})}));DrawerTrigger.displayName=vaul__WEBPACK_IMPORTED_MODULE_2__._.Trigger.displayName;const DrawerPortal=vaul__WEBPACK_IMPORTED_MODULE_2__._.Portal,DrawerClose=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vaul__WEBPACK_IMPORTED_MODULE_2__._.Close,{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)("",className),...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"soft",children})})}));DrawerClose.displayName="DrawerClose";const DrawerOverlay=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vaul__WEBPACK_IMPORTED_MODULE_2__._.Overlay,{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)("fixed inset-0 z-50 bg-l-bg-200/60 dark:bg-d-bg-600/40",className),...props})}));DrawerOverlay.displayName=vaul__WEBPACK_IMPORTED_MODULE_2__._.Overlay.displayName;const DrawerContent=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,children,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DrawerPortal,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DrawerOverlay,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(vaul__WEBPACK_IMPORTED_MODULE_2__._.Content,{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-l-bg-200 dark:border-d-bg-800 bg-l-bg dark:bg-d-bg",className),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),children]})]})}));DrawerContent.displayName="DrawerContent";const DrawerHeader=param=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)("grid gap-1.5 p-4 text-center text-l-txt dark:text-d-txt sm:text-left",className),...props})};DrawerHeader.displayName="DrawerHeader";const DrawerFooter=param=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)("mt-auto flex flex-col gap-2 p-4 text-l-txt/80 dark:text-d-txt/80",className),...props})};DrawerFooter.displayName="DrawerFooter";const DrawerTitle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vaul__WEBPACK_IMPORTED_MODULE_2__._.Title,{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)("text-lg font-semibold leading-none tracking-tight text-l-txt dark:text-d-txt",className),...props})}));DrawerTitle.displayName=vaul__WEBPACK_IMPORTED_MODULE_2__._.Title.displayName;const DrawerDescription=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vaul__WEBPACK_IMPORTED_MODULE_2__._.Description,{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_4__.cn)("text-sm text-muted-foreground",className),...props})}));DrawerDescription.displayName=vaul__WEBPACK_IMPORTED_MODULE_2__._.Description.displayName,Drawer.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{shouldScaleBackground:{defaultValue:{value:"true",computed:!1},required:!1}}},DrawerOverlay.__docgenInfo={description:"",methods:[]},DrawerTrigger.__docgenInfo={description:"",methods:[]},DrawerClose.__docgenInfo={description:"",methods:[],displayName:"DrawerClose"},DrawerContent.__docgenInfo={description:"",methods:[],displayName:"DrawerContent"},DrawerHeader.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader"},DrawerFooter.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter"},DrawerTitle.__docgenInfo={description:"",methods:[]},DrawerDescription.__docgenInfo={description:"",methods:[]}},"./src/components/layout/Item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Et:()=>ItemTitle,gR:()=>ItemDescription,q7:()=>Item});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),cva__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/cva/dist/index.mjs"),_twm__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/twm.ts");const ItemVariants=(0,cva__WEBPACK_IMPORTED_MODULE_2__.Fj)({base:"relative rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground w-auto",variants:{errored:{true:"border-system-error dark:border-system-error-dark text-system-error-dark dark:text-system-error-light  [&>svg]:text-system-error bg-system-error-light/20 dark:bg-system-error-dark/20",false:" bg-l-bg text-l-txt dark:bg-d-bg dark:text-d-txt border-l-acc dark:border-d-acc"}},defaultVariants:{errored:!1}}),Item=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,errored,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,role:"Item",className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)(ItemVariants({errored}),className),...props})}));Item.displayName="Item";const ItemTitle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("mb-1 font-medium leading-none tracking-tight",className),...props})}));ItemTitle.displayName="ItemTitle";const ItemDescription=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,className:(0,_twm__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm [&_p]:leading-relaxed",className),...props})}));ItemDescription.displayName="ItemDescription",Item.__docgenInfo={description:"",methods:[],displayName:"Item"},ItemTitle.__docgenInfo={description:"",methods:[],displayName:"ItemTitle"},ItemDescription.__docgenInfo={description:"",methods:[],displayName:"ItemDescription"}},"./src/components/layout/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BE:()=>_Drawer__WEBPACK_IMPORTED_MODULE_2__.BE,I6:()=>_Drawer__WEBPACK_IMPORTED_MODULE_2__.I6,SD:()=>_Collapse__WEBPACK_IMPORTED_MODULE_3__.S,Uz:()=>_Drawer__WEBPACK_IMPORTED_MODULE_2__.Uz,_s:()=>_Drawer__WEBPACK_IMPORTED_MODULE_2__._s,cp:()=>_Drawer__WEBPACK_IMPORTED_MODULE_2__.cp,gk:()=>_Drawer__WEBPACK_IMPORTED_MODULE_2__.gk,mc:()=>_Container__WEBPACK_IMPORTED_MODULE_0__.m,p2:()=>_Collapse__WEBPACK_IMPORTED_MODULE_3__.p,tb:()=>_Drawer__WEBPACK_IMPORTED_MODULE_2__.tb,zj:()=>_Drawer__WEBPACK_IMPORTED_MODULE_2__.zj});var _Container__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/layout/Container.tsx"),_Drawer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/layout/Item.tsx"),__webpack_require__("./src/components/layout/Drawer.tsx")),_Collapse__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/layout/Collapse.tsx")},"./src/components/ui/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar,Z:()=>AvatarGroup});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),twm=__webpack_require__("./src/components/twm.ts");const graphqlWithAuth=__webpack_require__("./node_modules/@octokit/graphql/dist-web/index.js").UG.defaults({headers:{authorization:"token ".concat("LEAKED TOKEN")}});const Avatar=param=>{let{username,placeholder=!1,size,className,links,...props}=param;const[avatarUrl,setAvatarUrl]=react.useState(void 0),[profileLink,setProfileLink]=react.useState(void 0);switch(react.useEffect((()=>{placeholder||async function parseGitAvatar(username){return(await graphqlWithAuth("\n        query ($username: String!) {\n            user(login: $username) {\n                avatarUrl\n            }\n        }\n    ",{username})).user.avatarUrl}(username).then((url=>{setAvatarUrl(url)}))})),placeholder){case!0:return(0,jsx_runtime.jsx)("img",{width:size||100,height:size||100,className:(0,twm.cn)(" rounded-full bg-l-bg dark:bg-d-bg border-4 border-l-prim dark:border-d-prim",className),alt:""});case!1:return links?(0,jsx_runtime.jsx)("a",{href:profileLink,children:(0,jsx_runtime.jsx)("img",{width:size||100,height:size||100,src:avatarUrl||"octocat",alt:"Avatar of "+username,className:(0,twm.cn)(" rounded-full border-4 border-l-prim dark:border-d-prim",className)})}):(0,jsx_runtime.jsx)("img",{width:size||100,height:size||100,src:avatarUrl||"octocat",alt:"Avatar of "+username,className:(0,twm.cn)(" rounded-full border-4 border-l-prim dark:border-d-prim",className)})}},AvatarGroup=param=>{let{users,limit=users.length,size=100,className,holderstyle,...props}=param;const visibleUsers=users.slice(0,limit),hiddenUsers=users.length-limit;return(0,jsx_runtime.jsxs)("div",{className:"",children:[visibleUsers.map(((user,index)=>(0,jsx_runtime.jsx)("div",{style:{marginLeft:index>0?size*index/2:0,marginTop:index>0?-size:0},children:(0,jsx_runtime.jsx)(Avatar,{username:user,size})},index))),hiddenUsers>0&&(0,jsx_runtime.jsxs)("div",{className:(0,twm.cn)("rounded-full border-2 border-l-prim dark:border-d-prim p-1",className),style:{zIndex:0,marginLeft:size*(visibleUsers.length-1),transform:"translateY(-".concat(size,"px)"),fontSize:size/3/2,width:size/3},children:["+",hiddenUsers]})]})};Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"number"},description:""},username:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},links:{required:!1,tsType:{name:"boolean"},description:""}}},AvatarGroup.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},limit:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"users.length",computed:!0}},users:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},holderstyle:{required:!1,tsType:{name:"string"},description:""}}}}}]);