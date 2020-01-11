function LocationCardH({ location }) {
  const { id, name, region, lat, lng, facilities, bestFor, type } = location;

  return (
    <article className="br3 ba dark-gray b--black-10 bg-white">
      <div className="dt w-100">
        <div className="dtc v-top bg-gray w-33 br3 br--left"></div>
        <div className="dtc v-top">
          <div className="pa2 ph3-ns pb3">
            <div className="mb2">
              <div className="f6 f5-ns dib black-30">{type}</div>
            </div>

            <h1 className="f5 f4-ns lh-solid mb4">{name}</h1>
            <div className="dt w-100 mt3">
              <div className="dtc">
                <h2 className="f6 f5-ns mv0 normal">View more</h2>
              </div>
              <div className="dtc tr">
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default LocationCardH;
