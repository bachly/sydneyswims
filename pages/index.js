import Layout from "../utils/Layout";
import LocationCard from "../utils/LocationCardV";
const Airtable = require("airtable");

const AIRTABLE_API_KEY = "key5tUPHlXqO2yf57";
var base = new Airtable({
  apiKey: AIRTABLE_API_KEY
}).base("appDjiuvxWdyTHSrF");

function Home({ locations }) {
  console.log(locations);
  return (
    <Layout>
      <div className="mw9 center">
        <div className="flex flex-wrap">
          <div className="w-100">
            <div className="flex flex-wrap">
              {locations.map(location => (
                <div
                  key={location.id}
                  className="w-100 w-50-m w-20-l ph1 ph2-ns mb2 mb3-ns"
                >
                  <LocationCard location={location} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Home.getInitialProps = async function() {
  return new Promise((resolve, reject) => {
    var locations = [];

    base("Locations")
      .select({
        maxRecords: 100,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            locations.push({
              name: record.get("Name"),
              region: record.get("Region"),
              lat: record.get("Lat"),
              lng: record.get("Lng"),
              facilities: record.get("Facilities"),
              id: record.get("ID"),
              type: record.get("Type"),
              bestFor: record.get("Best for"),
              imgUrl: record.get("Img1") && record.get("Img1")[0].url
            });
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(error) {
          if (error) {
            reject(error);
          }

          resolve({
            locations
          });
        }
      );
  });
};

export default Home;
