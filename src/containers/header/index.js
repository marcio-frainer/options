import React, { useState, useEffect } from "react";
import { TextField, Paper } from "@material-ui/core";

const Card = props => {
  const [background, setBackground] = useState("#fff");
  const styleCard = {
    width: "80px",
    height: "35px",
    background: background,
    margin: "5px"
  };

  const onClickPaper = e => {
    e.button === 0 ? setBackground("#ff0000") : setBackground("#0033cc");
  };

  return <Paper onClick={onClickPaper} style={styleCard}></Paper>;
};

const styleCardContainer = {
  display: "flex",
  flexFlow: "row wrap",
  //flexWrap: "wrap",
  justifyContent: "space-around"
};

export default props => {
  console.log("props", props);
  const { style } = props;
  const [initialHour, setInitialHour] = useState(0);
  const [initialMinute, setInitialMinute] = useState(0);
  const [interval, setInterval] = useState(1);
  const [candles, setCandles] = useState(110);
  const [cards, setCards] = useState([]);

  const handleChangeInitialHour = e => setInitialHour(parseInt(e.target.value));
  const handleChangeInitialMinute = e =>
    setInitialMinute(parseInt(e.target.value));
  const handleChangeInterval = e => setInterval(parseInt(e.target.value));
  const handleChangeCandles = e => setCandles(parseInt(e.target.value));

  const type_None = "none";
  const type_Blue = "blue";
  const type_Red = "red";

  useEffect(() => {
    let aux = [];
    for (var i = 0; i < candles; i++) {
      aux.push({ id: i, type: type_None });
    }
    setCards(aux);
  }, [candles]);

  return (
    <div style={style}>
      <div>
        <TextField
          label="Hora"
          id="tf_hour"
          type="number"
          InputLabelProps={{ shrink: true }}
          value={initialHour}
          style={{ width: "80px" }}
          inputProps={{
            max: 23,
            min: 0
          }}
          onChange={handleChangeInitialHour}
        />
        <TextField
          label="Minuto"
          id="tf_minute"
          type="number"
          InputLabelProps={{ shrink: true }}
          style={{ width: "80px" }}
          value={initialMinute}
          inputProps={{
            max: 59,
            min: 0
          }}
          onChange={handleChangeInitialMinute}
        />
        <TextField
          label="Intervalo"
          id="tf_interval"
          type="number"
          InputLabelProps={{ shrink: true }}
          style={{ width: "80px" }}
          value={interval}
          onChange={handleChangeInterval}
        />
        <TextField
          label="Velas"
          id="tf_candles"
          type="number"
          InputLabelProps={{ shrink: true }}
          style={{ width: "80px" }}
          value={candles}
          onChange={handleChangeCandles}
        />
      </div>
      <div style={styleCardContainer}>
        {cards.map(item => (
          <Card />
        ))}
      </div>
    </div>
  );
};
