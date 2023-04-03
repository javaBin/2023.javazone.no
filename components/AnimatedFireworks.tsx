'use client'

import Fireworks from "@fireworks-js/react";
import {useState} from "react";

export default function AnimatedFireworks() {
  /*make a boolean variable called timeout that turns true when 5 seconds has passed */
  const [timeOver, setTimeOver] = useState(true);
  setTimeout(() => {
    setTimeOver(false);
  }, 5000);

  return ( /*if timeout is true, then show the fireworks */
    timeOver ? (
      <div>
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
          }}
        />
      </div>
    )
      :
      (
        <>
        </>
      )
  )
}
