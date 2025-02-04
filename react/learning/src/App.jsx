import First from './chapters/describingUi/yourFirstComponent/First.jsx'
import Key from './chapters/describingUi/importingAndExportingComponents/ImportKey.jsx'
import Jsinjsx from './chapters/describingUi/javascriptInJsx/JsInJsx.jsx'
import Jsx from './chapters/describingUi/writingMarkupWithJsx/WriteJsx.jsx'
import PassingProps from './chapters/describingUi/passingProps/PassingProps.jsx'
import Conditionalrendering from './chapters/describingUi/conditionalRendring/ConditionalRendering.jsx'
import Renderlist from './chapters/describingUi/renderingList/RenderList.jsx'
import Purecomponent from './chapters/describingUi/keepingComponentsPure/PureComponent.jsx'
import UiAsTree from './chapters/describingUi/uiAsTree/UiAsTree.jsx'



const App = () => {
return (
  <>
    <div>
      <First/>
      <Key/>
      <Jsx/>
      <Jsinjsx/>
      <PassingProps id={234}><First/></PassingProps>
      <Conditionalrendering isEven = {true} />
      <Renderlist />
      <Purecomponent/>
      <UiAsTree />
    </div>
  </>
)
}

export default App;
