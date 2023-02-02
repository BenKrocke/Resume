import {
  RiLinkedinBoxFill,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
} from "react-icons/ri";

export default function Contact({ phone, email, linkedIn, address }) {
  return (
    <div className="flex text-sm justify-center">
      <div className="flex">
        <div className="flex items-center mr-2">
          <RiPhoneLine className="mr-1" />
          {phone}
        </div>
        |
        <div className="flex items-center mx-2">
          <RiMailLine className="mr-1" />
          {email}
        </div>
        |
        <div className="flex items-center mx-2">
          <RiLinkedinBoxFill className="mr-1" />
          {linkedIn}
        </div>
        |
        <div className="flex items-center ml-2">
          <RiMapPin2Line className="mr-1 mb-0.5" />
          {address}
        </div>
      </div>
    </div>
  );
}
