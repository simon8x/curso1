
import React, {useState} from "react";
import Prop from "./Prop";
import Fade from 'react-reveal/Fade';

const Props= () => {
    const [propsGroup, setProps] = useState([
      {
        id: 1,
        name: "Kevin",
        lastname: "Frontend Developer",
        email: "mail@mail.com",
      },
      {
        id: 2,
        name: "Alex",
        lastname: "Backend Developer",
        email: "mail@mail.com",
      },
      {
        id: 3,
        name: "Ben",
        lastname: "Designer",
        email: "mail@mail.com",
      },
    ]);
  
    return (
      <div>
        {propsGroup.map((prop) => {
          return (
            <Fade left>
                <Prop
                key={prop.id}
                name={prop.name}
                lastname={prop.lastname}
                email={prop.email}
                />
            </Fade>
          );
        })}
      </div>
    );
  };
export default Props;