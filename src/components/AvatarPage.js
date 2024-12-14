import React from "react";
import RandomAvatar from "./RandomAvatar";
import {GlobalStyle} from '../Styles/GlobalStyle';
import { Mainn, Section, Div, Title } from "../Styles/Style";

import F1 from "../image/Fondos/F1.PNG";
import F2 from "../image/Fondos/F2.PNG";
import F3 from "../image/Fondos/F3.PNG";
import F4 from "../image/Fondos/F4.PNG";
import F5 from "../image/Fondos/F5.PNG";
import F6 from "../image/Fondos/F6.PNG";
import F7 from "../image/Fondos/F7.PNG";
import F8 from "../image/Fondos/F8.PNG";
import F9 from "../image/Fondos/F9.PNG";
import F10 from "../image/Fondos/F10.PNG";
import F11 from "../image/Fondos/F11.PNG";
import F12 from "../image/Fondos/F12.PNG";
import F13 from "../image/Fondos/F13.PNG";
import F14 from "../image/Fondos/F14.PNG";
import F15 from "../image/Fondos/F15.PNG";
import F16 from "../image/Fondos/F16.PNG";
import F17 from "../image/Fondos/F17.PNG";
import F18 from "../image/Fondos/F18.PNG";
import F19 from "../image/Fondos/F19.PNG";
import F20 from "../image/Fondos/F20.PNG";
import F21 from "../image/Fondos/F21.PNG";
import F22 from "../image/Fondos/F22.PNG";
import F23 from "../image/Fondos/F23.PNG";
import F24 from "../image/Fondos/F24.PNG";
import F25 from "../image/Fondos/F25.PNG";
import F26 from "../image/Fondos/F26.PNG";
import F27 from "../image/Fondos/F27.PNG";
import F28 from "../image/Fondos/F28.PNG";
import F29 from "../image/Fondos/F29.PNG";
import F30 from "../image/Fondos/F30.PNG";
import F31 from "../image/Fondos/F31.PNG";
import F32 from "../image/Fondos/F32.PNG";
import F33 from "../image/Fondos/F33.PNG";

import G1 from "../image/Gatos/G1.PNG";
import G2 from "../image/Gatos/G2.PNG";
import G3 from "../image/Gatos/G3.PNG";
import G4 from "../image/Gatos/G4.PNG";
import G5 from "../image/Gatos/G5.PNG";
import G6 from "../image/Gatos/G6.PNG";
import G7 from "../image/Gatos/G7.PNG";
import G8 from "../image/Gatos/G8.PNG";

import O1 from "../image/Ojos/O1.PNG";
import O2 from "../image/Ojos/O2.PNG";
import O3 from "../image/Ojos/O3.PNG";
import O4 from "../image/Ojos/O4.PNG";
import O5 from "../image/Ojos/O5.PNG";
import O6 from "../image/Ojos/O6.PNG";
import O7 from "../image/Ojos/O7.PNG";
import O8 from "../image/Ojos/O8.PNG";
import O9 from "../image/Ojos/O9.PNG";
import O10 from "../image/Ojos/O10.PNG";
import O11 from "../image/Ojos/O11.PNG";
import O12 from "../image/Ojos/O12.PNG";
import O13 from "../image/Ojos/O13.PNG";

import C1 from "../image/Cabeza/C1.PNG";
import C2 from "../image/Cabeza/C2.PNG";
import C3 from "../image/Cabeza/C3.PNG";
import C4 from "../image/Cabeza/C4.PNG";
import C5 from "../image/Cabeza/C5.PNG";
import C6 from "../image/Cabeza/C6.PNG";
import C7 from "../image/Cabeza/C7.PNG";
import C8 from "../image/Cabeza/C8.PNG";
import C9 from "../image/Cabeza/C9.PNG";
import C10 from "../image/Cabeza/C10.PNG";
import C11 from "../image/Cabeza/C11.PNG";
import C12 from "../image/Cabeza/C12.PNG";
import C13 from "../image/Cabeza/C13.PNG";
import C14 from "../image/Cabeza/C14.PNG";
import C15 from "../image/Cabeza/C15.PNG";

import M1 from "../image/Manos/M1.PNG";
import M2 from "../image/Manos/M2.PNG";
import M3 from "../image/Manos/M3.PNG";
import M4 from "../image/Manos/M4.PNG";
import M5 from "../image/Manos/M5.PNG";
import M6 from "../image/Manos/M6.PNG";
import M7 from "../image/Manos/M7.PNG";
import M8 from "../image/Manos/M8.PNG";
import M9 from "../image/Manos/M9.PNG";
import M10 from "../image/Manos/M10.PNG";
import M11 from "../image/Manos/M11.PNG";
import M12 from "../image/Manos/M12.PNG";
import M13 from "../image/Manos/M13.PNG";
import M14 from "../image/Manos/M14.PNG";
import M15 from "../image/Manos/M15.PNG";
import M16 from "../image/Manos/M16.PNG";
import M17 from "../image/Manos/M17.PNG";
import M18 from "../image/Manos/M18.PNG";
import M19 from "../image/Manos/M19.PNG";
import M20 from "../image/Manos/M20.PNG";
import M21 from "../image/Manos/M21.PNG";
import M22 from "../image/Manos/M22.PNG";
import M23 from "../image/Manos/M23.PNG";
import M24 from "../image/Manos/M24.PNG";
import M25 from "../image/Manos/M25.PNG";
import M26 from "../image/Manos/M26.PNG";
import M27 from "../image/Manos/M27.PNG";
import M28 from "../image/Manos/M28.PNG";
import M29 from "../image/Manos/M29.PNG";



const Main = () => {
  const assets = {
    fondos: [
      F1,
      F2,
      F3,
      F4,
      F5,
      F6,
      F7,
      F8,
      F9,
      F10,
      F11,
      F12,
      F13,
      F14,
      F15,
      F16,
      F17,
      F18,
      F19,
      F20,
      F21,
      F22,
      F23,
      F24,
      F25,
      F26,
      F27,
      F28,
      F29,
      F30,
      F31,
      F32,
      F33,
    ],
    gatos: [
      G1,
      G2,
      G3,
      G4,
      G5,
      G6,
      G7,
      G8,
    ],
    ojos: [
      O1,
      O2,
      O3,
      O4,
      O5,
      O6,
      O7,
      O8,
      O9,
      O10,
      O11,
      O12,
      O13,
    ],
    cabezas: [
      C1,
      C2,
      C3,
      C4,
      C5,
      C6,
      C7,
      C8,
      C9,
      C10,
      C11,
      C12,
      C13,
      C14,
      C15,
    ],
    manos: [
      M1,
      M2,
      M3,
      M4,
      M5,
      M6,
      M7,
      M8,
      M9,
      M10,
      M11,
      M12,
      M13,
      M14,
      M15,
      M16,
      M17,
      M18,
      M19,
      M20,
      M21,
      M22,
      M23,
      M24,
      M25,
      M26,
      M27,
      M28,
      M29,
    ],
  };

  return (
    <Mainn>
      <GlobalStyle/>
      <Section>
        <Div texto>
          <Title>Generador de Mishis Avatares.</Title>
        </Div>
        <RandomAvatar assets={assets} />
      </Section>
    </Mainn>
  );
};

export default Main;