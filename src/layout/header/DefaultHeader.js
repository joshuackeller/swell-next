import Link from "next/link";

const DefaultHeader = () => {
  return (
    <div>
      <div className="max-w-7xl flex justify-between mx-auto my-2">
        <Link href="/" passHref>
          <h3 className="text-sn-purple">Company</h3>
        </Link>
        <div className="my-auto text-sn-purple">Cart</div>
      </div>
    </div>
  );
};

export default DefaultHeader;
