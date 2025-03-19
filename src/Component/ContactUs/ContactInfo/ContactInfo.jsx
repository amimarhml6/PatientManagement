import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "boxicons";
import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-details">
        <div className="contact-item">
          <box-icon name="phone" type="solid" color="#1E5D9E"></box-icon>
          <div>
            <p>+213 512345643</p>
            <p>+213 712345643</p>
            <p>+213 612345643</p>
          </div>
        </div>
        <div className="contact-item">
          <box-icon name="envelope" type="solid" color="#1E5D9E"></box-icon>
          <p>medlinkclinic@medlink.com</p>
        </div>
        <div className="social-icons">
          <p style={{color:"#1B5C9E"}}>Follow <span style={{color:"#1BB13C"}}>us</span> </p>
          <box-icon type="logo" name="instagram"></box-icon>
          <box-icon type="logo" name="facebook"></box-icon>
          <box-icon type="logo" name="twitter"></box-icon>
          <box-icon type="logo" name="linkedin"></box-icon>
          <box-icon type="logo" name="tiktok"></box-icon>
        </div>
      </div>

      <div className="map-container">
        <MapContainer center={[36.76, 3.47]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[36.76, 3.47]}>
            <Popup>Nous sommes à Boumerdès</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
