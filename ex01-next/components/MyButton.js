"use client";

export function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}> I'm a button </button>
  );
}