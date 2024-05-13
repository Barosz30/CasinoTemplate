import { FC } from "react";

interface RepeatButtonProps {
    onClick: () => void;
  }
  
 export const RepeatButton: FC<RepeatButtonProps> = ({ onClick }) => {
    return (
      <button aria-label='Play again.' id='repeatButton' onClick={onClick}></button>
    );
  };