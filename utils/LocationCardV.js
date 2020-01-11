function LocationCardV({ location }) {
  const {
    id,
    name,
    region,
    lat,
    lng,
    facilities,
    bestFor,
    imgUrl,
    type
  } = location;

  return (
    <article className="br3 dark-gray">
      {/* image */}
      <div
        className="db br3 bra aspect-ratio--3x4 bg-near-white"
        style={{
          background: imgUrl ? `url(${imgUrl})` : null,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      {/* body */}
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <p className="f6 mt0 mb2 black-30 ttu">{type}</p>
          <h1 className="f4 mv0 lh-solid">{name}</h1>
        </div>
        <div className="dt w-100 mt2">
          <div className="dtc">
            <h2 className="f5 mv0 normal">{region}</h2>
          </div>
          <div className="dtc tr"></div>
        </div>
      </div>
    </article>
  );
}

export default LocationCardV;
