export default function MacBook({ children }) {
  return (
    <div className="macbook">
      {/* Frame */}
      <div className="macbook-frame">
        {/* Top black strip */}
        <div className="macbook-top">
          <div className="macbook-notch">
            <div className="macbook-camera"></div>
          </div>
        </div>

        {/* Screen area */}
        <div className="macbook-screen">
          <div className="macbook-content">{children}</div>
        </div>
      </div>

      {/* Base */}
      <div className="macbook-hinge"></div>
      <div className="macbook-base">
      <div className="macbook-notch-cutout"></div>
        <div className="macbook-foot left-foot"></div>
        <div className="macbook-foot right-foot"></div>
    </div>
    </div>
  );
}
