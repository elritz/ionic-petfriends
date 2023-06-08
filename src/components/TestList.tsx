import "./TestList.css";
import { IonAvatar, IonImg, IonItem, IonLabel, IonList } from "@ionic/react";

interface ContainerProps {
  name: string;
}

const TestList: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonList>
      {[...Array(10)].map((item) => {
        return (
          <IonItem button key={item} routerLink="/item" routerDirection="forward">
            <IonAvatar slot="start">
              <IonImg className="ion" src={"https://picsum.photos/200"} />
            </IonAvatar>
            <IonLabel>Basic Item</IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default TestList;
