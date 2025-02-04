import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function UiAsTree() {
  return (
    <>
      <FancyText title text="UI AS TREE" />
      <InspirationGenerator>
        <Copyright year={2008}/>
      </InspirationGenerator>
    </>
  );
}
