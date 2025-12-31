import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Van Vuong Ngo - Projects in 2026</h1>
      <p>
        Hi, thanks for your interest. You can find me on{" "}
        <a href="https://www.linkedin.com/in/vanvuong-ngo/">linkedIn</a>
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Van Vuong Ngo - Projects in 2026",
  meta: [
    {
      name: "description",
      content: "Van Vuong Ngo - Projects in 2026",
    },
  ],
};
