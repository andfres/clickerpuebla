const getMousePos = (evt) => {
  const pos = evt.currentTarget.getBoundingClientRect();
  const x = evt.clientX - pos.left;
  const y = evt.clientY - pos.top;
  return {
    x: x,
    y: y,
  };
};


export default getMousePos;
