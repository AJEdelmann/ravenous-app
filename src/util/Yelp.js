import { identifier } from "@babel/types";

const apiKey = `FjIFyM0_wG9E3qIeZ5couRtLR2pESzbgisnYMKh2DJRv2pFrM-MsJqHPHW5ThiI_FCTnn3I7eo29UsPt9XhexBe5d3xHBqksG772uH6IA-LiwcGBakaSbBm4nRz6XXYx`;

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              url: business.url,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};

export default Yelp;
