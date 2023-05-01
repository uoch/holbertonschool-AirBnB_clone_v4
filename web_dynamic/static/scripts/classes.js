// Base class for amenities
class Amenity {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  
    // Get the string representation of the Amenity
    toString() {
      return this.name;
    }
  
    // Get the ID of the Amenity
    getId() {
      return this.id;
    }
  }
  
  // Amenity list class
  class AmenityList {
    constructor(amenities) {
      this.amenities = amenities;
    }
  
    // Add an Amenity to the list
    addAmenity(amenity) {
      this.amenities.push(amenity);
    }
  
    // Remove an Amenity from the list
    removeAmenity(amenity) {
      const index = this.amenities.indexOf(amenity);
      if (index !== -1) {
        this.amenities.splice(index, 1);
      }
    }
  
    // Get the string representation of the Amenity list
    toString() {
      return this.amenities.map((amenity) => amenity.toString()).join(', ');
    }
  
    // Get the IDs of the Amenities in the list
    getIds() {
      return this.amenities.map((amenity) => amenity.getId());
    }
  }
  
  // Example usage:
  const amenities = new AmenityList([
    new Amenity('Wifi', 1),
    new Amenity('Pool', 2),
    new Amenity('Gym', 3),
  ]);
  
  $(document).ready(function () {
    const selectedAmenities = new AmenityList([]);
  
    $('input[type="checkbox"]').change(function () {
      const amenityId = parseInt($(this).data('id'));
      const amenity = amenities.amenities.find((a) => a.id === amenityId);
  
      if ($(this).is(':checked')) {
        selectedAmenities.addAmenity(amenity);
      } else {
        selectedAmenities.removeAmenity(amenity);
      }
  
      $('div.amenities h4').text(selectedAmenities.toString());
    });
  });
  