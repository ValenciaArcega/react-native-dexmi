import { IColors } from "../interfaces/IColors"
/**
 * Tints and shades
 * ***********************************
 * 100 - Thin 
 * 200 - Extra Light or Ultra Light 
 * 300 - Light 
 * 400 - Regular or Normal
 * 500 - Medium 
 * 600 - Semi Bold or Demi Bold 
 * 700 - Bold 
 * 800 - Extra Bold or Ultra Bold 
 * 900 - Black or Heavy 
 * ***********************************
 * Keyword for colors
 * p - Primary
 * s - Secondary
 * t - Tertiary
 * bg - Background
 * fg - Foreground
 */
export const appColors: IColors = {
	p100: "#f1fcf2",
	p200: "#dff9e3",
	p300: "#c0f2c8",
	p400: "#8fe69e",
	p500: "#51cf66",
	p600: "#31b648",
	p700: "#239636",
	p800: "#1f762e",
	p900: "#1d5e29",

	s100: "#dcecbf",
	s200: "#acd26b",
	s300: "#a1cb55",
	s400: "#95c540",
	s500: "#89BE2B",
	s600: "#7bab27",
	s700: "#6e9822",

	bgBlack: "#0A0A0A",
	bgWhite: "#FFF",
	bgGray: "#F2F2F7",
	frBlack: "#181818",
	frWhite: "#fff",
	frOrange: "FF8A00",

	frGreenTint2: "#40c057",
	bgInput: "#F1F5FF",

	green100: "#ebfbee",
	green200: "#d3f9d8",
	green300: "#8ce99a",
	green400: "#69db7c",
	green500: "#51cf66", // #2b8a3e, for Foreground #69DB7C
	green600: "#37b24d",
	green700: "#2f9e44",// #b2f2bb
	green800: "#047352",

	red100: "#fff5f5",
	red200: "#ffe3e3", // #c92a2a
	red500: "#ff6b6b",
	red700: "#f03e3e", // #ffc9c9
	red800: "#E71919", // #ff6b6b

	gray100: "#f2f2f7",
	gray200: "#f1f3f5",
	gray300: "#e9ecef",
	gray400: "#dee2e6",
	gray500: "#ced4da",
	gray600: "#aaa",
	gray700: "gray",
}
