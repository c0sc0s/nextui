const App = `import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function App() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex w-full flex-col">
      <Tabs 
        aria-label="Options"         
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
              List of photos
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              List of music
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              List of videos
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};