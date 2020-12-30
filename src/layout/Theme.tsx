import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
    color: {
        white: 'rgb(255, 255, 255)' /* Cararra */,
        lightAccent: '#949b92' /* Stack */,
        main: '#86b9a7' /* Shadow */,
        darkShade: '#252423' /* Shark */,
        darkAccent: '#ac7742' /* Cape Palliser */,
        primary: '#876351' /* Shadow */,
        black: '#232525' /* Shark */,
        success: '#5e9850' /* Fruit Salad */,
        warning: '#db8818' /* Zest */,
        danger: '#f44336' /* Pomegranate */,
    },
    maxWidth: "1200px"
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;