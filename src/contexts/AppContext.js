import React, { useState } from "react";

const AppContext = React.createContext({
  initialHour: 0,
  initialMinute: 0,
  interval: 1,
  candles: 110,
  cards: []
});

const [initialHour, setInitialHour] = useState(0);
const [initialMinute, setInitialMinute] = useState(0);
const [interval, setInterval] = useState(1);
const [candles, setCandles] = useState(110);
const [cards, setCards] = useState([]);

const REDUCER_TYPE_HOUR = "type_hour";
const REDUCER_TYPE_MINUTE = "type_minute";
const REDUCER_TYPE_INTERVAL = "type_interval";
const REDUCER_TYPE_CANDLES = "type_candles";
const REDUCER_TYPE_CARDS = "type_cards";

const setReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_TYPE_HOUR:
      setInitialHour(state);
      return state;
    case REDUCER_TYPE_MINUTE:
      setInitialMinute(state);
      return state;
    case REDUCER_TYPE_INTERVAL:
      setInterval(state);
      return state;
    case REDUCER_TYPE_CANDLES:
      setCandles(state);
      return state;
    case REDUCER_TYPE_CARDS:
      setCards(state);
      return state;
    default:
      state;
  }
};

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;
