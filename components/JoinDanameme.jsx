export default function JoinDanameme() {
  return (
    <div className="card !flex-row !justify-between py-[1.35rem] mt-auto">
      <div className="flex flex-col w-1/2 h-full">
        <h1 className="title text-2xl text-primary">Join Danameme:</h1>
        <p className="text text-lg text-muted mt-auto">Code: 111111</p>
      </div>
      <div className="flex flex-col w-1/2 justify-end">
        <div className="w-[120px] h-auto justify-center flex flex-col text-center ms-auto">
          <img src="qr-code.png" alt="QR Code" className="full" />
          <span className="text text-sm text-muted">danameme.ch</span>
        </div>
      </div>
    </div>
  );
}
