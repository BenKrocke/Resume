import Contact from "@/components/sections/contact";

export default function Header({ name, title, contactDetails }) {
  return (
    <div className="mb-4 text-center">
      <div className="font-bold text-4xl mb-2">{name}</div>
      <Contact
        phone={contactDetails.phone}
        email={contactDetails.email}
        address={contactDetails.address}
        linkedIn={contactDetails.linkedIn}
      />
    </div>
  );
}
