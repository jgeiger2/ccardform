import VISA_ICON from './Assets/visa.png';
import AMEX_ICON from './Assets/amex.png';
import DISCOVER_ICON from './Assets/discover.png';
import MASTERCARD_ICON from './Assets/masterCard.png';

export const OTHER_CARDS = [
    /[1-9]/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
]

export const AMEX = [
    /[1-9]/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
]

export const CARD = [
    'VISA',
    'MASTERCARD',
    'DISCOVER',
    'AMEX',
]

export const CARD_ICON = {
    VISA: VISA_ICON,
    MASTERCARD: MASTERCARD_ICON,
    DISCOVER: DISCOVER_ICON,
    AMEX: AMEX_ICON
}