export const API_KEY = 'AIzaSyBBttFCxHq-L_sNB_VSPXpQuMx1W8f_A9s';

export const valueConvertor = (value) => {
    if (value >= 1000000){
        return Math.floor(value/1000000) + "M"
    }
    else if (value >= 1000){
        return Math.floor(value/1000)+ "K"
    }
    else{
        return value;
    }
}