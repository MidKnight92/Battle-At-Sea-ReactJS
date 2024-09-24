import React, { useState } from "react";
import { styled } from "styled-components";

const Instructions: React.FC = () => {
    const [isInstructionsDisplayed, setIsInstructionsDisplayed]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
    const handleClick = (): void => {
        setIsInstructionsDisplayed(!isInstructionsDisplayed);
    }

    return(
        <>
            {isInstructionsDisplayed ?    
            (
                <>
                    <p>Player 1 will place their fleet (5 ships) on their respective boards followed by Player 2. Once fleet is set Player 1 will click on Players 2 grid then the players will swap turns.</p>
                    <InstructionLink onClick={handleClick}>Close Instructions</InstructionLink>
                </>
            ):
            <InstructionLink onClick={handleClick}>Instructions</InstructionLink>  }
        </>    
    );
}

export default Instructions;

const InstructionLink = styled.a`
	display: inline-block;
	margin-top: 45px;
	margin-left: 30px;
	text-align: left;
	font-size: 8px;
	font-family: 'Press Start 2P', cursive;
	color: white;
	text-decoration: underline;
	padding: 10px;


&:hover {
	cursor: pointer;
	color: black;
	text-decoration: underline;
}`;