function Heading(props) {
  return (
    <div className={props.className}>
      <div className="border-l-8 border-white border-b-white border-b-8 rounded-bl-md">
        <h1 className="text-left pl-2 md:text-left md:pl-8 text-white text-6xl font-bellotaHeading font-bold py-2">
          {props?.text}
        </h1>
      </div>
    </div>
  );
}

export default Heading;
