export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location?.address || 'Unknown address'; 
    this.location = {lat: location?.lat || 0, lng: location?.lng || 0};
        this.id = new Date().toString() + Math.random().toString();
    }
}   