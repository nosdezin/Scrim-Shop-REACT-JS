import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  return (
      <div className={styles.card_container}>
        <h1>{props.name}</h1>
        <p className={styles.category_container}>{props.category}</p>
        <p>R$ {props.cost}</p>
      </div>
  );
}
