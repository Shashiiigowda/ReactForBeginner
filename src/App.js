import React from 'react';
import './App.css';
import FunctionalComponents from './Components/FunctionalComponents';
import ClassComponents from './Components/ClassComponents';
import Props from './Props/Props';
import ClassProps from './Props/ClassProps';
import States from './States/States';
import SetState from './States/SetState';
import DestructingProps from './Destructing/DestructingProps';
import DestructingClass from './Destructing/DestructingClass';
import EventHandling from './EventHandling/EventHandling';
import EventHandlingClass from './EventHandling/EventHandlingClass';
import EventBinding from './EventBinding/EventBinding';
import ParentComponent from './MethodsAsProps/ParentComponent';
import UserGreeting from './ConditionalRendering/UserGreeting';
import ListRendering from './ListRendering/ListRendering';
import ListRendering2 from './ListRendering/ListRendering2';
import ListandKeys from './ListandKeys/ListandKeys';
import IndexAsKey from './ListandKeys/IndexAsKey';
import CssStylesheets from './CssStyling/CssStylesheets';
import InlineStyling from './CssStyling/InlineStyling';
import './CssStyling/cssModules.css'
import styles from './CssStyling/cssModules.module.css'
import FormHandling from './FormHandling/FormHandling';
import MountingLifecycleMethods from './LifecycleMethods/MountingLifecycleMethods/MountingLifecycleMethods';
import UpdatingLifecycleMethod from './LifecycleMethods/UpdatingLifecycleMethods/UpdatingLifecycleMethod';
import Fragments from './Fragments/Fragments';
import FragmentTable from './Fragments/FragmentTable';
import PureComponents from './PureComponents/PureComponents';
import ParentComp from './MemoComponents/ParentComp';
import RefsDemo from './Refs/RefsDemo';
import RefsParentComponent from './Refs/RefsParentComponent';
import ForwardingRefsParent from './Refs/ForwardingRefsParent';
import UseState from './Hooks/UseState/UseState';
import UseStatePrevState from './Hooks/UseState/UseState-PrevState';
import UseStateObject from './Hooks/UseState/UseState-Object';
import UseStateArray from './Hooks/UseState/UseState-Array';
import UseEffect from './Hooks/UseEffect/UseEffect';
import CompC from './Hooks/UseContext/CompC';
import UseReducer from './Hooks/UseReducer/UseReducer';

export const ChannelContext = React.createContext()
export const UserContext = React.createContext()

function App() {
  
  return (
    <div>
      <h1>Components:</h1>
      <FunctionalComponents/>
      <ClassComponents/>
      <br/>
      <h1>Props:</h1>
      <Props name="abc" scname="123">
        <p>This is children props</p>
      </Props>
      <Props name="xyz" scname="456">
        <button>Hi</button>
      </Props>
      <br/>
      <h1>Class Props:</h1>
      <ClassProps name="abc" scname="123" />
      <ClassProps name="xyz" scname="456" />
      <br/>
      <h1>States</h1>
      <States/>
      <br/>
      <h1>SetState</h1>
      <SetState/>
      <br/>
      <h1>Destructing props and state</h1> 
      Destructing Props:<DestructingProps name="abc" sname="123"/>
      <br/>
      Destructing Class: <DestructingClass name="xyz" sname='456'/>
      <br/>
      <h1>Event Handling</h1>
      Event Handling Function:<EventHandling/>
      Event Handling Class: <EventHandlingClass/>
      <br/>
      <h1>Event Binding</h1>
      <EventBinding/>
      <br/>
      <h1>Method As Props</h1>
      <ParentComponent/>
      <br/>
      <h1>Conditional Rendering</h1>
      <UserGreeting/>
      <br/>
      <h1>List Rendering</h1>
      <ListRendering/>
      <ListRendering2/>
      <br/>
      <h1>List and Keys</h1>
      <ListandKeys/>
      <br/>
      <h1>Index As Key</h1>
      <IndexAsKey/>
      <br/>
      <h1>Stylying Components</h1>
      <h2>1. CSS Stylesheets</h2>
      <CssStylesheets primary={true}/>
      <br></br>
      <h2>2. Inline CSS</h2>
      <InlineStyling/>
      <br/>
      <h2>3. CSS Module</h2>
      <div className='error'>Error</div>
      <div className={styles.success}>Sucess</div>
      <br/>
      <h2>Form Handling</h2>
      <FormHandling/>
      <br/>
      <h1>Lifecycle Methods</h1>
      <h2>Mounting Lifecycle Methods</h2>
      <MountingLifecycleMethods/>
      <br/>
      <h2>Updating Lifecycle Methods</h2>
      <UpdatingLifecycleMethod/>
      <br></br>
      <h1>Fragments</h1>
      <Fragments/>
      <FragmentTable/>
      <br/>
      <h1>Pure Component</h1>
      <PureComponents/>
      <br/>
      <h1>Memo</h1>
      <ParentComp/>
      <br/>
      <h1>Refs</h1>
      <RefsDemo/>
      <br/>
      <h2>Refs Class Component</h2>
      <RefsParentComponent/>
      <br/>
      <h2>Forwarding Refs</h2>
      <ForwardingRefsParent/>
      <br/>
      <h1>Hooks</h1>
      <h2>useState Hook</h2>
      <UseState/>
      <br/>
      <h2>useState Prev State</h2>
      <UseStatePrevState/>
      <br/>
      <h2>useState Object</h2>
      <UseStateObject/>
      <h2>useState Array</h2>
      <UseStateArray/>
      <br/>
      <h2>useEffect Hook</h2>
      <UseEffect/>
      <br/>
      <h2>useContext Hook</h2>
      <UserContext.Provider value={'abc'}>
        <ChannelContext.Provider value={'pqr'}>
          <CompC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      <br/>
      <h2>useReducer Hook</h2>
      <UseReducer/>
    </div>
  );
}

export default App;
