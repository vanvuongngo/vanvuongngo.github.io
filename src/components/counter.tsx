import { component$, useStore } from "@qwik.dev/core";

import styles from "./counter.module.css";

export const Counter = component$(() => {
  const counter = useStore({ value: 0 });

  return (
    <>
      <div class={styles.container}>
        <button
          class={styles.counter}
          type="button"
          onClick$={() => counter.value++}
        >
          count is {counter.value}
        </button>
      </div>
    </>
  );
});
