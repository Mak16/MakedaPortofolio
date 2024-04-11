export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-between mx-10 bg-white my-2 items-center">
        <h1 className="text-3xl font-bold text-textColor ">Makeda Banza</h1>
        <div className="flex flex-row space-x-10 justify-between">
          <p className=" text-linkColor">Mes réalisations</p>
          <p className=" text-linkColor">Me contacter</p>
        </div>
      </div>
    </>
  );
}
