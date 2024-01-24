import Image from "next/image";
interface logo {
  logo: string;
}

export default function Logo({ logo }: logo) {
  return (
    <div className="logo">
      <Image src={logo} alt="logo" />
    </div>
  );
}
