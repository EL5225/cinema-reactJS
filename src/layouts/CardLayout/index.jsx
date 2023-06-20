export const CardLayout = (props) => {
  return (
    <section className="w-[10vw] h-[15vh]">
      <img src={props.src} alt={props.alt} className={props.className} />
    </section>
  );
};
