function Hero(props) {
  return (
    <section>
      <h1>{props.name}</h1>

      <p>
        {props.job}
      </p>
    </section>
  );
}

export default Hero;