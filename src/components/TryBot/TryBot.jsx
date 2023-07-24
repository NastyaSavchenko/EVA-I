import {MainBtn} from '../MainBtn/MainBtn.jsx'
import { TryBotStyles, TryBotTitle } from './TryBot.styled.jsx'

export const TryBot = () => {
  return (
    <TryBotStyles>
      <TryBotTitle>
        Encouragement to press CTA
      </TryBotTitle>
      <MainBtn title={'button cta'}/>
    </TryBotStyles>
  )
};
