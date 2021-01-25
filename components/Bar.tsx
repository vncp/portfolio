export const Bar = (props) => {
  return (
    <div
      className={props.className}
      key={props.index}
      style={
        props.highlighted
          ? { ...props.style, backgroundColor: "red" }
          : props.style
      }
    ></div>
  );
};
