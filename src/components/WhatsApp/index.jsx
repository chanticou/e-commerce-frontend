import "./index.css";

export const WhatsAppLink = () => {
  const phoneNumber = "1528849705"; // número de teléfono

  const url = `https://wa.me/${phoneNumber}`;

  return (
    <div>
      <div className="whatsapp-link ">
        <a href={url}>
          <img
            src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1696767556/5ae21cc526c97415d3213554_asiupg.png"
            alt="WhatsApp logo"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppLink;
